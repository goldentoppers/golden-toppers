import { useMemo, useState } from "react";
import { useNutrition } from "../hooks/useNutrition";
import { GlobalControlOptionsContext, type SelectionsState } from "./GlobalControlOptionsContext";
import type { BookCategory, Ingredient } from "../types/nutrition";

export const GlobalControlOptionsProvider: React.FC<{
  children: React.ReactNode;
  allIngredients: Ingredient[];
}> = ({ children, allIngredients }) => {
  const [formData, setFormData] = useState({
    weight: 65,
    activity: "moderate" as "low" | "moderate" | "high",
    servingSize: 1 as 1 | 2,
  });

  const [currentChapter, setCurrentChapter] = useState<BookCategory>("proteins");
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  // 2. INITIALIZE ALL 5 MARCO BUCKETS
  const [selections, setSelections] = useState<SelectionsState>({
    proteins: [],
    heartyBases: [],
    freshColors: [],
    energyBoosts: [],
    toppers: [],
  });

  // Combines all 5 bucket arrays into a flat string list for the useNutrition loop engine
  const flatSelectedIds = useMemo(
    () => [
      ...selections.proteins,
      ...selections.heartyBases,
      ...selections.freshColors,
      ...selections.energyBoosts,
      ...selections.toppers,
    ],
    [selections],
  );

  // Map selections back to full structural ingredient details
  const activeSelectedIngredients = allIngredients.filter((item) =>
    flatSelectedIds.includes(item.id),
  );

  const calculatedData = useNutrition(
    formData.weight,
    formData.activity,
    activeSelectedIngredients,
  );

  const toggleIngredient = (id: string, category: keyof SelectionsState) => {
    setSelections((prev) => {
      const targetCategoryList = prev[category];
      const isAlreadySelected = targetCategoryList.includes(id);

      return {
        ...prev,
        [category]: isAlreadySelected
          ? targetCategoryList.filter((itemId: string) => itemId !== id)
          : [...targetCategoryList, id],
      };
    });
  };

  const clearAllSelections = () => {
    setSelections({
      proteins: [],
      heartyBases: [],
      freshColors: [],
      energyBoosts: [],
      toppers: [],
    });
  };

  const selectedIds = useMemo(
    () => [
      ...selections.proteins,
      ...selections.heartyBases,
      ...selections.freshColors,
      ...selections.energyBoosts,
      ...selections.toppers,
    ],
    [selections],
  );

  return (
    <GlobalControlOptionsContext.Provider
      value={{
        formData,
        setFormData,
        selections,
        selectedIds,
        toggleIngredient,
        clearAllSelections,
        nutritionResults: {
          macros: calculatedData.macros,
          recipeItems: calculatedData.recipeItems,
          dailyCalorieTarget: calculatedData.dailyCalorieTarget,
        },
        currentChapter,
        setCurrentChapter,
        isReviewOpen,
        setIsReviewOpen,
      }}
    >
      {children}
    </GlobalControlOptionsContext.Provider>
  );
};
