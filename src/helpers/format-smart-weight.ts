export interface FormatSmartWeightProps {
  grams: number;
  category: string;
  ingredientId?: string; // ✅ Added to catch "egg-whole" precisely
  role?: string;
  densityType?: "base" | "rainbow";
  servingSize: 1 | 2;
}

export interface FormattedWeightResult {
  primary: string;
  subtext?: string;
}

/**
 * Modern Volumetric Converter Utility
 * Forces heavy bulk foods to mass weights, while keeping micro-toppers strictly in teaspoons/tablespoons.
 */
export const formatSmartWeight = ({
  grams,
  category,
  ingredientId,
  role,
  densityType,
  servingSize,
}: FormatSmartWeightProps): FormattedWeightResult => {
  const totalGrams = grams * servingSize;

  if (totalGrams <= 0) return { primary: "0g" };

  // A. EGG WHOLE INTERCEPTOR
  if (ingredientId === "egg-whole" || category === "egg") {
    const GRAMS_PER_EGG = 50;
    const eggCount = totalGrams / GRAMS_PER_EGG;
    const oz = totalGrams * 0.035274;

    return {
      primary: `${eggCount.toFixed(1)} Egg`,
      subtext: `${totalGrams.toFixed(0)}g • ${oz.toFixed(1)} oz`,
    };
  }

  // If an ingredient is explicitly a topper or a supplement, it is a micro-portion.
  // It must skip the heavy mass weights block entirely to be measured in clean kitchen spoons.
  const isMicroPortion =
    role === "topper" ||
    category === "topper" ||
    category === "supplements" ||
    category === "oil" ||
    category === "dairy";

  // CLINICAL MASS WEIGHTS: Main bulk proteins, grains, and vegetable structures only
  if (
    !isMicroPortion &&
    (category === "meat" ||
      category === "seafood" ||
      category === "grain" ||
      category === "vegetable" ||
      densityType === "base" ||
      role === "protein" ||
      role === "vegetable")
  ) {
    const lbs = totalGrams / 453.6;
    if (lbs >= 0.5) return { primary: `${lbs.toFixed(1)} lb` };

    const oz = totalGrams / 28.35;
    return {
      primary: `${Math.round(totalGrams)}g`,
      subtext: `${oz.toFixed(1)} oz`,
    };
  }

  // ESTABLISH THE MICROSCOPIC VOLUMETRIC DENSITY SPREAD MAP
  const averageGramsPerTablespoon = {
    rainbow: 8.5, // Default fallback for general toppers
    oil: 14.0, // Heavy therapeutic liquid oils
    dairy: 15.0, // Dense probiotic yogurt/kefir pastes
    seafood: 5.0, // Light flaked items like Seaweed/Kelp dust
  };

  let conversionFactor = averageGramsPerTablespoon.rainbow;

  if (category === "oil") conversionFactor = averageGramsPerTablespoon.oil;
  else if (category === "dairy") conversionFactor = averageGramsPerTablespoon.dairy;
  else if (category === "seafood" || category === "supplements")
    conversionFactor = averageGramsPerTablespoon.seafood;

  // D. COMPUTE VOLUMETRIC SPOON CONVERSION
  const tbsp = totalGrams / conversionFactor;

  // If substantial enough to fill a standard cooking spoon
  if (tbsp >= 1.0) {
    return { primary: `${tbsp.toFixed(1)} tbsp` };
  }

  // Fall down into teaspoons for micro-doses (3 tsp = 1 tbsp)
  const tsp = tbsp * 3;

  // Clean fractions for precise kitchen handling (e.g., "1/2 tsp" or "1/4 tsp")
  if (tsp <= 0.35) return { primary: "1/4 tsp" };
  if (tsp > 0.35 && tsp <= 0.65) return { primary: "1/2 tsp" };

  return { primary: `${Math.max(1, Math.round(tsp))} tsp` };
};
