import React from "react";
import { AssetIcon } from "../AssetIcon";
import type { Ingredient } from "../../types/nutrition";
import { NoSymbolIcon } from "@heroicons/react/24/solid";

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
      style={{
        borderWidth: isSelected ? "2px" : "1px",
        borderColor: isSelected ? color : "rgba(120, 113, 108, 0.2)",
        backgroundColor: isSelected ? `${color}1A` : "#faf7f2",
      }}
      className={`relative z-10 flex aspect-square h-48 w-40 flex-col items-center justify-between
        rounded-2xl p-3 text-center shadow-md transition-all duration-200 outline-none select-none
        focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 ${
          !isSelected && !isDisabled
            ? "cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            : ""
        } ${isSelected ? "scale-[0.97] cursor-pointer font-black" : ""} ${
          isDisabled
            ? `cursor-not-allowed border-stone-200/40 bg-stone-100/50 opacity-30 shadow-none
              grayscale-60`
            : ""
        } `}
    >
      <div className="flex flex-col gap-1">
        <div className="flex w-full flex-col items-center gap-2">
          <h3
            className="mb-0.5 max-w-[110px] font-sans text-[11px] leading-[1.1] font-black
              tracking-wide text-stone-700/95 uppercase select-text"
          >
            {ingredient.name}
          </h3>
          <div className="mx-auto flex w-full flex-row justify-between border-t border-stone-800/10" />
        </div>
        <div
          className={`flex h-full w-full items-center justify-center bg-transparent
            mix-blend-multiply transition-transform duration-200
            ${isSelected ? "scale-105 opacity-100" : "opacity-85"}`}
        >
          {isNoneItem ? (
            <NoSymbolIcon
              fill="none"
              stroke={color}
              strokeWidth={1.85}
              className={`pointer-events-none mt-8 h-10 w-10 transition-transform duration-200
                ${isSelected ? "text-stone-950" : "text-stone-600/80"}`}
            />
          ) : (
            <AssetIcon
              name={ingredient.icon}
              className={`pointer-events-none h-16 w-16 text-stone-950 saturate-100 transition-all
                duration-200`}
            />
          )}
        </div>

        <div
          className="flex flex-col justify-center pb-2 text-[8.5px] font-black tracking-wider
            text-stone-500 uppercase"
        >
          {Array.isArray(ingredient.vitamins)
            ? ingredient.vitamins.join(" / ")
            : ingredient.vitamins || "Nutrients"}
          <span
            className="font-serif text-[10px] font-bold tracking-normal text-emerald-800 normal-case
              italic"
          >
            {Array.isArray(ingredient.benefits)
              ? ingredient.benefits.join(", ")
              : ingredient.benefits || "Wellness"}
          </span>
        </div>
      </div>

      {/* PINNED CHECKMARK BADGE CHIP INDICATOR */}
      {isSelected && (
        <div
          style={{ backgroundColor: color }}
          className="shadow-3xs animate-fade-in absolute top-2 right-2 flex h-4.5 w-4.5 items-center
            justify-center rounded-full font-sans text-[8px] font-black text-white"
          aria-hidden="true"
        >
          ✓
        </div>
      )}
    </button>
  );
};
