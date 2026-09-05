import React, { useContext } from "react";
import { formatSmartWeight } from "../helpers/format-smart-weight";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";

interface IngredientFormattedWeightDisplayProps {
  ingredient: {
    id: string;
    grams: number;
    category: string;
    density?: "base" | "rainbow";
    role: string;
  };
}

export const IngredientFormattedWeightDisplay: React.FC<IngredientFormattedWeightDisplayProps> = ({
  ingredient,
}) => {
  const context = useContext(GlobalControlOptionsContext);
  const { formData } = context || { formData: { servingSize: 1 } };
  console.log("ingredient: ", ingredient);
  const formattedWeight = formatSmartWeight({
    grams: ingredient.grams,
    category: ingredient.category,
    densityType: ingredient.density,
    role: ingredient.role,
    servingSize: typeof formData.servingSize === 'number' ? formData.servingSize : 1,
    ingredientId: ingredient.id,
  });

  return (
    <div className="ingredients-end flex flex-col justify-center pr-2 text-center select-text">
      <span
        className="block rounded-md border border-stone-400/80 bg-stone-50 px-2.5 py-1 text-center
          font-mono text-sm leading-none font-black text-stone-950"
      >
        {formattedWeight.primary}

        {formattedWeight.subtext && (
          <span
            className="ingredients-center mt-1 block pr-0.5 text-center font-mono text-xs
              leading-none font-black tracking-tight text-stone-700 uppercase"
          >
            {formattedWeight.subtext}
          </span>
        )}
      </span>
    </div>
  );
};
