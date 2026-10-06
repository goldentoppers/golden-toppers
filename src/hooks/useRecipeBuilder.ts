import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalControlOptionsContext, type SelectionsState } from "../contexts/GlobalControlOptionsContext";
import { chapterConfig } from "../data/chapter-config";
import type { Recipes } from "../data/recipes";
import type { BreedHealthProfile } from "../data/breeds";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import type { BookCategory } from "../types/nutrition";

export const RECOMMENDED_TOPPER_MAP: Record<string, string> = {
  "Blueberries": "blueberries",
  "Bone Broth": "broth",
  "Canned Sardines in Water": "sardine",
  "Carrot Batons": "carrots",
  "Cooked Beef Liver (Tiny amounts)": "beef-liver",
  "Cooked Chicken": "chicken-breast",
  "Cooked Chicken Breast": "chicken-breast",
  "Cooked Duck": "duck-breast",
  "Cooked Duck Breast": "duck-breast",
  "Cooked Egg Whites": "egg-whole",
  "Cooked Ground Beef": "ground-beef",
  "Cooked Ground Beef (Lean)": "ground-beef",
  "Cooked Ground Turkey": "ground-turkey",
  "Cooked Lamb": "lamb",
  "Cooked Salmon": "salmon-fillet",
  "Cooked Turkey": "ground-turkey",
  "Cooked Turkey Breast": "ground-turkey",
  "Cooked Turkey Breast (Skinless)": "ground-turkey",
  "Cooked White Fish": "fish-fillet",
  "Cooked White Fish Fillet": "fish-fillet",
  "Cottage Cheese": "cottage-cheese",
  "Cottage Cheese (Low Sodium)": "cottage-cheese",
  "Diced Apple (No Seeds)": "apple",
  "Flaxseed Powder": "flaxseed-ground",
  "Fresh Blueberries": "blueberries",
  "Fresh Cucumber": "cucumber",
  "Hemp Hearts": "hemp-hearts",
  "Mashed Blueberries": "blueberries",
  "Plain Boiled White Fish": "fish-fillet",
  "Plain Canned Pumpkin": "pumpkin",
  "Plain Kefir": "kefir",
  "Plain White Rice": "white-rice",
  "Plain Yogurt": "greek-yogurt",
  "Pumpkin Puree": "pumpkin",
  "Pure Pumpkin": "pumpkin",
  "Pure Pumpkin Puree": "pumpkin",
  "Pureed Blueberries": "blueberries",
  "Pureed Pumpkin": "pumpkin",
  "Pureed Sweet Potato": "sweet-potato",
  "Rolled Oats": "rolled-oats",
  "Steamed Blueberries": "blueberries",
  "Steamed Broccoli": "broccoli",
  "Steamed Carrots": "carrots",
  "Steamed Green Beans": "green-beans",
  "Steamed Spinach": "spinach",
  "Steamed Zucchini": "zucchini",
  "Sweet Potato Puree": "sweet-potato",
  "Wild Salmon": "salmon-fillet",
  "Wild Salmon Fillets": "salmon-fillet",
  "Wild Sardines": "sardine",
  "Wild Sardines in Water": "sardine",
};

function resolveIngredientId(topper: string): string | undefined {
  if (RECOMMENDED_TOPPER_MAP[topper]) {
    return RECOMMENDED_TOPPER_MAP[topper];
  }

  const clean = topper
    .replace(/\(.*?\)/g, "")
    .replace(/(Cooked|Steamed|Pureed|Pure|Fresh|Plain|Wild|Canned|Mashed|Diced)/gi, "")
    .trim()
    .toLowerCase();

  const found = INGREDIENT_LIBRARY.find((item) => {
    const itemName = item.name.toLowerCase();
    const itemId = item.id.toLowerCase();
    return itemName.includes(clean) || clean.includes(itemName) || itemId.includes(clean);
  });

  return found?.id;
}

function getIngredientChapter(ingredientId: string): BookCategory {
  const chapter = chapterConfig.find((config) =>
    config.options.some((option) => option.id === ingredientId)
  );
  if (chapter) return chapter.id;

  const item = INGREDIENT_LIBRARY.find((i) => i.id === ingredientId);
  if (item) {
    if (item.role === "protein") return "proteins";
    if (item.role === "vegetable" && item.density === "base") return "heartyBases";
    if (item.role === "vegetable") return "freshColors";
    if (item.role === "carbohydrate" || item.category === "seeds-nuts") return "energyBoosts";
  }
  return "toppers";
}

export function useRecipeBuilder(): (recipe: Recipes) => void {
  const navigate = useNavigate();
  const { setSelections, setCurrentChapter, setIsReviewOpen } = useContext(GlobalControlOptionsContext);

  const navigateToRecipe = (recipe: Recipes) => {
    const nextSelections: SelectionsState = {
      proteins: [],
      heartyBases: [],
      freshColors: [],
      energyBoosts: [],
      toppers: [],
    };

    recipe.ingredients.forEach((ingredient) => {
      const chapter = chapterConfig.find((config) => config.options.some((option) => option.id === ingredient.id));
      if (chapter && !nextSelections[chapter.id].includes(ingredient.id)) {
        nextSelections[chapter.id].push(ingredient.id);
      }
    });

    setSelections(nextSelections);
    setCurrentChapter("proteins");
    setIsReviewOpen(true);
    navigate("/");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
  };

  return navigateToRecipe;
}

export function useBreedRecipeBuilder(): (breed: BreedHealthProfile) => void {
  const navigate = useNavigate();
  const { setSelections, setCurrentChapter, setIsReviewOpen, setFormData } =
    useContext(GlobalControlOptionsContext);

  const navigateToBreedRecipe = (breed: BreedHealthProfile) => {
    const nextSelections: SelectionsState = {
      proteins: [],
      heartyBases: [],
      freshColors: [],
      energyBoosts: [],
      toppers: [],
    };

    breed.recommendedToppers.forEach((topper) => {
      const ingredientId = resolveIngredientId(topper);
      if (ingredientId) {
        const chapterId = getIngredientChapter(ingredientId);
        if (!nextSelections[chapterId].includes(ingredientId)) {
          nextSelections[chapterId].push(ingredientId);
        }
      }
    });

    setFormData((prev) => {
      const numbers = breed.weightRange.match(/\b\d+\b/g);
      let weight = prev.weight;
      if (numbers && numbers.length > 0) {
        const parsed = numbers.map(Number);
        const avg = Math.round(parsed.reduce((a, b) => a + b, 0) / parsed.length);
        if (avg > 0) weight = avg;
      }
      return {
        ...prev,
        dogName: prev.dogName,
        weight,
      };
    });

    setSelections(nextSelections);
    setCurrentChapter("proteins");
    setIsReviewOpen(true);
    navigate("/");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
  };

  return navigateToBreedRecipe;
}
