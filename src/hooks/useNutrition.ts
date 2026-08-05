import { useMemo } from "react";
import type { Ingredient } from "../types/nutrition";

interface RecipeResultItem extends Ingredient {
  grams: number;
  kcalProvided: number;
}

interface CalculationResult {
  macros: { vegetables: number; protein: number; carbs: number };
  recipeItems: RecipeResultItem[];
  dailyCalorieTarget: number;
}

export const useNutrition = (
  weightLbs: number,
  activityLevel: "low" | "moderate" | "high",
  selectedIngredients: Ingredient[],
): CalculationResult => {
  return useMemo(() => {
    const validWeightLbs = weightLbs > 0 ? weightLbs : 1;
    const weightKg = validWeightLbs / 2.20462;

    // 1. Core Calorie Target Computations (RER -> DER)
    const rer = 70 * Math.pow(weightKg, 0.75);
    const multipliers = { low: 1.2, moderate: 1.6, high: 2.0 };
    const totalCalories = Math.round(rer * (multipliers[activityLevel] || 1.6));
    // ONLY 10% TOPPER. Round to integer calories to keep buckets integer.
    const operationalTargetKcal = Math.round(totalCalories * 0.1);

    // The Golden Ratio Split (50% Veg/Fiber, 40% Meat/Protein, remainder carbs)
    const vegKcal = Math.round(operationalTargetKcal * 0.5);
    const proteinKcal = Math.round(operationalTargetKcal * 0.4);
    const carbsKcal = operationalTargetKcal - vegKcal - proteinKcal;

    const macroBuckets = {
      vegetables: vegKcal,
      protein: proteinKcal,
      carbs: carbsKcal,
    };

    if (selectedIngredients.length === 0) {
      return {
        macros: macroBuckets,
        recipeItems: [],
        dailyCalorieTarget: operationalTargetKcal,
      };
    }

    // 2. Separate Selections Into Their True Macro Functional Buckets
    const selectedProteins = selectedIngredients.filter(
      (item) => item.role === "protein",
    );
    const selectedCarbs = selectedIngredients.filter(
      (item) => item.role === "carbohydrate",
    );
    const selectedVeggies = selectedIngredients.filter(
      (item) => item.role !== "protein" && item.role !== "carbohydrate",
    );

    // Loops through a specific category, enforces caps, and shares out deficits proportionally
    // among the remaining non-capped items in that same bucket.
    const balanceCategoryItems = (
      items: Ingredient[],
      targetCategoryKcal: number,
    ): RecipeResultItem[] => {
      if (items.length === 0) return [];

      const baseAllocationPerItem = targetCategoryKcal / items.length;
      let iterations = 0;
      const maxIterations = 3; // Prevents infinite recursion loops

      // Initialize working array matching layout constraints
      let workingItems = items.map((item) => ({
        ingredient: item,
        grams: undefined as number | undefined,
        kcalAllocated: baseAllocationPerItem,
        isCapped: false,
      }));

      while (iterations < maxIterations) {
        let carriedDeficitKcal = 0;
        let uncappedCount = 0;

        // Pass 1: Apply safety cutoffs and log calorie deficits
        workingItems = workingItems.map((item) => {
          if (item.ingredient.kcalPerGram <= 0 || item.ingredient.isToxic) {
            return { ...item, grams: 0, kcalAllocated: 0, isCapped: true };
          }

          const calculatedGrams =
            item.kcalAllocated / item.ingredient.kcalPerGram;

          if (
            item.ingredient.maxGramsCap &&
            calculatedGrams > item.ingredient.maxGramsCap
          ) {
            const safeKcal =
              item.ingredient.maxGramsCap * item.ingredient.kcalPerGram;
            carriedDeficitKcal += item.kcalAllocated - safeKcal;
            return {
              ...item,
              grams: item.ingredient.maxGramsCap,
              kcalAllocated: safeKcal,
              isCapped: true,
            };
          }

          uncappedCount++;
          return item;
        });

        // Pass 2: Distribute logged deficits proportionally among non-capped category peers
        if (carriedDeficitKcal > 0 && uncappedCount > 0) {
          const deficitShare = carriedDeficitKcal / uncappedCount;
          workingItems = workingItems.map((item) => {
            if (!item.isCapped) {
              return {
                ...item,
                kcalAllocated: item.kcalAllocated + deficitShare,
              };
            }
            return item;
          });
          iterations++;
        } else {
          // No remaining deficits found, break out and map final metrics
          break;
        }
      }

      // Convert temporary state structures into final printable engine records
      // NOTE: avoid using falsy checks for `item.grams` because 0 is a valid value.
      return workingItems.map((item) => {
        const gramsRaw =
          item.grams ??
          (item.ingredient.kcalPerGram > 0 ? item.kcalAllocated / item.ingredient.kcalPerGram : 0);

        const roundedGrams = Math.round(gramsRaw * 10) / 10;

        return {
          ...item.ingredient,
          grams: roundedGrams,
          kcalProvided: item.kcalAllocated,
        };
      });
    };

    // Run the balanced data loops across your 3 core categories independently
    const balancedProteins = balanceCategoryItems(
      selectedProteins,
      macroBuckets.protein,
    );
    const balancedCarbs = balanceCategoryItems(
      selectedCarbs,
      macroBuckets.carbs,
    );
    const balancedVeggies = balanceCategoryItems(
      selectedVeggies,
      macroBuckets.vegetables,
    );

    return {
      macros: macroBuckets,
      recipeItems: [...balancedProteins, ...balancedCarbs, ...balancedVeggies],
      dailyCalorieTarget: operationalTargetKcal,
    };
  }, [weightLbs, activityLevel, selectedIngredients]);
};
