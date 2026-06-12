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
      "Essential raw amino acids required to maintain lean muscle mass, support rapid cellular repair, and protect your Golden's structural tissue health. These complete protein building blocks form the nutritional baseline of your supplemental recipe bowl.",
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
      "Complex whole grains and high-density starches serving as stabilizing calorie anchors. These clean, fibrous carbohydrate structures supply long-sustained glucose pathways to fuel daily energy cycles without overloading digestion.",
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
      "Vibrant, sun-ripened garden vegetables rich in raw plant antioxidants, living food hydration, and active phytonutrients. These colorful selection rows support intestinal regularity and guard long-term metabolic health.",
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
      "Therapeutic whole lipids and concentrated fatty acids designed to fuel cellular metabolism. This functional tier is loaded with organic Omega-3 paths to nourish the skin barrier and maintain deep, glossy coat hydration.",
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
      "Elite, biological macro-booster supplements designed to supercharge immune vitality. Handpicked target enzymes and functional trace elements provide a final layer of protection to complete the perfect supplemental bowl blueprint.",
  },
];
