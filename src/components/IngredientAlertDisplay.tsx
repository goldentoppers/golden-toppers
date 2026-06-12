import React from "react";
import type { Ingredient } from "../types/nutrition";

interface IngredientAlertDisplayProps {
  ingredient: Ingredient;
}

export const IngredientAlertDisplay: React.FC<IngredientAlertDisplayProps> = ({ ingredient }) => {
  return (
    <div
      className="animate-fade-in relative z-10 flex w-fit max-w-87.5 items-center gap-3 self-start
        rounded-xl border border-amber-500/10 bg-amber-500/4 px-3.5 py-1.5 text-left select-text"
    >
      <div className="h-4 w-0.5 shrink-0 rounded-full bg-amber-500 opacity-65" aria-hidden="true" />
      <p className="text-[11px] leading-normal font-bold text-stone-800 select-text">
        {ingredient.preparationAlert && (
          <span className="inline">
            <strong className="mr-1 text-[9px] font-black tracking-wider text-stone-950 uppercase">
              Note:
            </strong>
            {ingredient.preparationAlert}
          </span>
        )}
        {ingredient.preparationAlert && ingredient.preparation && (
          <span className="mx-2 inline text-stone-400/80">•</span>
        )}
        {ingredient.preparation && (
          <span className="inline">
            <strong className="mr-1 text-[9px] font-black tracking-wider text-stone-950 uppercase">
              Prep:
            </strong>
            <span className="font-semibold text-stone-700">{ingredient.preparation}</span>
          </span>
        )}
      </p>
    </div>
  );
};
