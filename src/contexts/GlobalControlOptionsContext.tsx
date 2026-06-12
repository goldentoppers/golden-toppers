import React, { createContext } from "react";
import type { BookCategory, RecipeResultItem } from "../types/nutrition";

// 1. Explicitly match your exact 5-bucket state type architecture
export interface SelectionsState {
  proteins: string[];
  heartyBases: string[];
  freshColors: string[];
  energyBoosts: string[];
  toppers: string[];
}

interface GlobalFormData {
  weight: number;
  activity: "low" | "moderate" | "high";
  servingSize: 1 | 2;
}

interface GlobalContextType {
  currentChapter: BookCategory;
  setCurrentChapter: React.Dispatch<React.SetStateAction<BookCategory>>;
  isReviewOpen: boolean;
  setIsReviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData: GlobalFormData;
  setFormData: React.Dispatch<React.SetStateAction<GlobalFormData>>;
  selections: SelectionsState;
  selectedIds: string[];
  toggleIngredient: (id: string, category: keyof SelectionsState) => void;
  clearAllSelections: () => void;
  nutritionResults: {
    macros: { vegetables: number; protein: number; carbs: number };
    recipeItems: RecipeResultItem[];
    dailyCalorieTarget: number;
  };
}

export const GlobalControlOptionsContext = createContext<GlobalContextType>({
  formData: {
    weight: 0,
    activity: "low",
    servingSize: 1,
  },
  currentChapter: "proteins",
  setCurrentChapter: () => null,
  isReviewOpen: false,
  setIsReviewOpen: () => null,
  setFormData: () => null,
  selections: {
    proteins: [],
    heartyBases: [],
    freshColors: [],
    energyBoosts: [],
    toppers: [],
  },
  selectedIds: [],
  toggleIngredient: () => null,
  clearAllSelections: () => null,
  nutritionResults: {
    macros: {
      vegetables: 0,
      protein: 0,
      carbs: 0,
    },
    recipeItems: [],
    dailyCalorieTarget: 0,
  },
});
