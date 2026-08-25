import React from "react";
import { AssetIcon } from "../AssetIcon";
import type { Ingredient } from "../../types/nutrition";
import { CheckIcon, NoSymbolIcon } from "@heroicons/react/24/solid";

interface IngredientButtonProps {
  ingredient:
  | {
    id: string;
    name: string;
    icon: string;
    isNonePlaceholder: boolean;
    benefits: string[];
    vitamins: string[];
  }
  | Ingredient;
  isSelected: boolean;
  isDisabled: boolean;
  onClick: () => void;
  isNoneItem: boolean;
  color: string;
}

export const IngredientButton: React.FC<IngredientButtonProps> = ({
  ingredient,
  isSelected,
  isDisabled,
  onClick,
  isNoneItem,
  color,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      aria-pressed={isSelected}
      aria-label={
        isNoneItem ? "Clear all selections" : `${isSelected ? "Remove" : "Add"} ${ingredient.name}`
      }
      className={`relative z-10 flex h-24 w-full flex-col items-center justify-center gap-1 border-0
        bg-transparent p-2 text-center shadow-none transition-all duration-200 outline-none
        select-none
        focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 ${!isSelected && !isDisabled
          ? "cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          : ""
        } ${isSelected ? "cursor-pointer font-black" : ""} ${isDisabled
          ? `cursor-not-allowed opacity-30 grayscale-60`
          : ""
        } `}
    >
      <div
        className={`flex shrink-0 items-center justify-center bg-transparent
          mix-blend-multiply transition-transform duration-200
          ${isSelected ? "scale-105 opacity-100" : "opacity-85"}`}
      >
        {isNoneItem ? (
          <NoSymbolIcon
            fill="none"
            stroke={color}
            strokeWidth={1.85}
            className={`pointer-events-none h-9 w-9 transition-transform duration-200
              ${isSelected ? "text-stone-950" : "text-stone-600/80"}`}
          />
        ) : (
          <AssetIcon
            name={ingredient.icon}
            className="pointer-events-none h-12 w-12 text-stone-950 saturate-100 transition-all duration-200"
          />
        )}
      </div>
      <h3
        className="line-clamp-2 max-w-full shrink-0 font-sans text-[10px] leading-[1.1] font-black
          tracking-wide text-stone-700/95 uppercase select-text"
      >
        {ingredient.name}
      </h3>

      {isSelected && (
        <span
          style={{ backgroundColor: color }}
          className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full
            text-white shadow-sm"
          aria-hidden="true"
        >
          <CheckIcon className="h-3 w-3" strokeWidth={3} />
        </span>
      )}

    </button>
  );
};
