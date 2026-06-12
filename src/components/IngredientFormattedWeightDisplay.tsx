import React, { useContext } from "react";
import type { RecipeResultItem } from "../types/nutrition";
import { formatSmartWeight } from "../helpers/format-smart-weight";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";

interface IngredientFormattedWeightDisplayProps {
  ingredient: RecipeResultItem;
}

export const IngredientFormattedWeightDisplay: React.FC<IngredientFormattedWeightDisplayProps> = ({
  ingredient,
}) => {
  const context = useContext(GlobalControlOptionsContext);
  const { formData } = context || { formData: { servingSize: 1 } };

  return (
    <div className="ingredients-end flex flex-col justify-center pr-2 text-center select-text">
      <span
        className="block rounded-md border border-stone-400/80 bg-stone-50 px-2.5 py-1 text-center
          font-mono text-sm leading-none font-black text-stone-950"
      >
        {
          formatSmartWeight({
            grams: ingredient.grams,
            category: ingredient.category,
            densityType: ingredient.density,
            role: ingredient.role,
            servingSize: formData.servingSize || 1,
            ingredientId: ingredient.id,
          }).primary
        }

        {formatSmartWeight({
          grams: ingredient.grams,
          category: ingredient.category,
          densityType: ingredient.density,
          role: ingredient.role,
          servingSize: formData.servingSize || 1,
          ingredientId: ingredient.id,
        }).subtext && (
          <span
            className="ingredients-center mt-1 block pr-0.5 text-center font-mono text-xs
              leading-none font-black tracking-tight text-stone-700 uppercase"
          >
            {
              formatSmartWeight({
                grams: ingredient.grams,
                category: ingredient.category,
                densityType: ingredient.density,
                role: ingredient.role,
                servingSize: formData.servingSize || 1,
                ingredientId: ingredient.id,
              }).subtext
            }
          </span>
        )}
      </span>
    </div>
  );
};
