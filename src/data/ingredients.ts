import type { Ingredient } from "../types/nutrition";
import { DAIRY_INGREDIENTS } from "./ingredients/dairy";
import { FRUIT_INGREDIENTS } from "./ingredients/fruit";
import { GRAIN_INGREDIENTS } from "./ingredients/grains";
import { MEAT_INGREDIENTS } from "./ingredients/meat";
import { SEAFOOD_INGREDIENTS } from "./ingredients/seafood";
import { SEED_AND_NUT_INGREDIENTS } from "./ingredients/seed-and-nuts";
import { VEGETABLE_INGREDIENTS } from "./ingredients/vegetables";

// Combine this with your other categories (veg, seeds, etc) later
export const INGREDIENT_LIBRARY: Ingredient[] = [
  ...MEAT_INGREDIENTS,
  ...SEAFOOD_INGREDIENTS,
  ...SEED_AND_NUT_INGREDIENTS,
  ...VEGETABLE_INGREDIENTS,
  ...DAIRY_INGREDIENTS, // ... rest of your categories
  ...FRUIT_INGREDIENTS,
  ...GRAIN_INGREDIENTS,
  // ...SUPPLEMENT_INGREDIENTS,
  // ...OIL_INGREDIENTS, // TODO: NEEDS DATA SAFTEY CHECKS TO INCLUDE IN LISTINGS
];
