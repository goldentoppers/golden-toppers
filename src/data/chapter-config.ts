import type { BookCategory, Ingredient } from "../types/nutrition";
import { INGREDIENT_LIBRARY } from "./ingredients";

export interface ChapterConfig {
  id: BookCategory;
  stepNumber: number;
  title: string;
  label: string;
  target: string;
  max: number;
  description: string;
  icon: string;
  hexColor: string;
  options: Ingredient[];
}

export const chapterConfig: ChapterConfig[] = [
  // =========================================================
  // 🍖 CATEGORY 1: MAIN PROTEINS (CRIMSON REFACTOR)
  // =========================================================
  {
    id: "proteins",
    icon: "downward-dog-tail-wagging",
    stepNumber: 1,
    title: "Main Proteins",
    label: "Proteins",
    target: "40%",
    hexColor: "#991b1b", // Rich premium crimson red
    max: 3,
    options: INGREDIENT_LIBRARY.filter((i) => i.role === "protein" && !i.isToxic && !i.isHighRisk),
    description:
      "Essential raw amino acids that maintain lean muscle mass, cellular repair, and tissue health.",
  },

  // =========================================================
  // 🌾 CATEGORY 2: HEARTY BASES (OATMEAL CLAY)
  // =========================================================
  {
    id: "heartyBases",
    icon: "standing",
    stepNumber: 2,
    title: "Hearty Bases",
    label: "Bases",
    target: "10%",
    hexColor: "#c25d3d", // Warm earthen clay tone
    max: 2,
    options: INGREDIENT_LIBRARY.filter(
      (i) => i.role === "vegetable" && i.density === "base" && !i.isToxic && !i.isHighRisk,
    ),
    description:
      "Whole grains and starches serve as calorie anchors to fuel daily energy cycles without overloading digestion.",
  },

  // =========================================================
  // 🥦 CATEGORY 3: FRESH COLORS (BOTANICAL EMERALD)
  // =========================================================
  {
    id: "freshColors",
    icon: "laying-down-head-up",
    stepNumber: 3,
    title: "Fresh Colors",
    label: "Colors",
    target: "35%",
    hexColor: "#065f46", // Natural deep emerald botanical green
    max: 4,
    options: INGREDIENT_LIBRARY.filter(
      (i) => i.role === "vegetable" && i.density !== "base" && !i.isToxic && !i.isHighRisk,
    ),
    description:
      "Vibrant, sun-ripened garden vegetables support intestinal regularity and guard long-term metabolic health.",
  },

  // =========================================================
  // 🥑 CATEGORY 4: ENERGY BOOSTS (OCEAN COBALT BLUE REFACTOR)
  // =========================================================
  {
    id: "energyBoosts",
    icon: "playing-with-tennis-ball",
    stepNumber: 4,
    title: "Energy Boosts",
    label: "Boosts",
    target: "10%",
    hexColor: "#1e3a8a", // Rich deep cobalt blue
    max: 2,
    options: INGREDIENT_LIBRARY.filter(
      (i) =>
        (i.role === "carbohydrate" || i.category === "seeds-nuts") && !i.isToxic && !i.isHighRisk,
    ),
    description:
      "Fatty acids designed to fuel cellular metabolism with Omega-3 to nourish the skin barrier and maintain deep, glossy coat hydration.",
  },

  // =========================================================
  // 👑 CATEGORY 5: GOLDEN TOPPERS (DEEP AMETHYST PURPLE REFACTOR)
  // =========================================================
  {
    id: "toppers",
    icon: "running-dog",
    stepNumber: 5,
    title: "Golden Toppers",
    label: "Toppers",
    target: "5%",
    hexColor: "#581c56", // Royal plum accent
    max: 3,
    options: INGREDIENT_LIBRARY.filter((i) => i.role === "topper" && !i.isToxic && !i.isHighRisk),
    description:
      "Supplements designed to supercharge immune vitality.",
  },
];
