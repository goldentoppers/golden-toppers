import React from "react";
import type { Ingredient } from "../types/nutrition";
import { AssetIcon } from "./AssetIcon";

interface IngredientNameDisplayProps {
  ingredient: Ingredient;
}

export const IngredientNameDisplay: React.FC<IngredientNameDisplayProps> = ({ ingredient }) => {
  return (
    // <div className="flex max-w-50 flex-col justify-center pl-2 text-left leading-tight select-text">
    <div className="flex flex-row gap-2">
      <AssetIcon name={ingredient.icon} className="h-16 w-16" />
      <div className="flex flex-col justify-center">
        <h4 className="text-[13px] font-black tracking-wider text-stone-950 uppercase">
          {ingredient.name}
        </h4>

        <span
          className="mt-1 block justify-center text-[8.5px] font-black tracking-wider text-stone-500
            uppercase"
        >
          {Array.isArray(ingredient.vitamins)
            ? ingredient.vitamins.join(" / ")
            : ingredient.vitamins || "Nutrients"}
          <span className="mx-1 text-amber-700/80">•</span>{" "}
          <span
            className="font-serif text-[10px] font-bold tracking-normal text-emerald-800 normal-case
              italic"
          >
            {Array.isArray(ingredient.benefits)
              ? ingredient.benefits.join(", ")
              : ingredient.benefits || "Wellness"}
          </span>
        </span>
      </div>
    </div>
    // </div>
  );
};
