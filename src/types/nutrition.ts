export type ActivityLevel = "low" | "moderate" | "high";

export interface GlobalControlOptionsFormData {
  weight: number;
  activity: ActivityLevel;
}

export interface RecipeResultItem extends Ingredient {
  grams: number;
  kcalProvided: number;
}

export interface NutritionResults {
  total: number;
  veg: number;
  protein: number;
  carbs: number;
}

export type IngredientCategory =
  | "meat"
  | "seafood"
  | "fruit"
  | "vegetable"
  | "dairy"
  | "seeds-nuts"
  | "oil"
  | "grain";
export type NutritionalRole = "protein" | "vegetable" | "carbohydrate" | "topper";

export type BookCategory = "proteins" | "heartyBases" | "freshColors" | "energyBoosts" | "toppers";

export interface Ingredient {
  id: string;
  name: string;
  kcalPerGram: number;
  category: IngredientCategory; // For UI filtering (Fruit, Meat, etc.)
  role: NutritionalRole; // For the Math (The 50/40/10 buckets)
  icon: string;
  density?: "base" | "rainbow";
  allergens?: string[]; // e.g., ["Poultry", "Beef"]
  benefits: string[]; // e.g., ["Shiny Coat", "Joint Health"]
  vitamins: string[]; // e.g., ["Vitamin A", "Zinc"]
  isNovelProtein?: boolean; // Helpful for special "Allergy" searches
  // SAFETY GUARDRAILS
  isToxic?: boolean; // Strictly prohibited (e.g. Shark, Macadamias)
  isHighRisk?: boolean; // Use with extreme caution (e.g. high fat, bones)
  preparationAlert?: string; // Instructions (e.g. "Must be cooked to 165°F")
  preparation?: string;
  maxGramsCap?: number;
}

export interface CalculatedIngredient {
  id: string;
  name: string;
  grams: number;
  icon: string;
  benefits?: string[];
  vitamins?: string[];
  preparationAlert?: string;
  preparation?: string;
  category: IngredientCategory;
  density?: "base" | "rainbow";
  role: NutritionalRole;
}
