import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalControlOptionsContext, type SelectionsState } from "../contexts/GlobalControlOptionsContext";
import { chapterConfig } from "../data/chapter-config";
import type { Recipes } from "../data/recipes";

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

    console.log("Navigating to recipe:", recipe);

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
