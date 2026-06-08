import React from "react";
import { AssetIcon } from "./AssetIcon";
import type { ChapterConfig } from "./RecipeBook";
import ServingSelector from "./ServingSelector";

interface IngredientCategoryHeaderProps {
  activeChapter: ChapterConfig;
}

export const IngredientCategoryHeader: React.FC<IngredientCategoryHeaderProps> = ({
  activeChapter = {
    title: "",
    target: "",
    icon: "",
    description: "",
  },
}) => {
  const { title, target, icon, description } = activeChapter;

  return (
    <div
      id="ingredient-category-header-section"
      className="relative flex w-full max-w-4xl flex-col items-center justify-center gap-2 text-left
        select-none md:flex-row md:gap-6"
    >
      <div className="flex flex-row gap-6 md:w-[75%]">
        <div className="h-20 w-20 shrink-0 items-center justify-center" aria-hidden="true">
          <AssetIcon
            name={icon || "laying-down-head-up-side-profile"}
            className="h-full w-full object-contain text-amber-700 saturate-[0.95] filter"
          />
        </div>

        <div className="flex flex-1 flex-col justify-center leading-normal select-text">
          <div className="flex flex-row items-center gap-2.5">
            <h3
              className="text-[16px] leading-none font-black tracking-[0.2em] text-stone-950
                uppercase"
            >
              {title || "Main Proteins"}
            </h3>
            <span
              className="shadow-3xs block rounded-md border border-amber-700/30 bg-white/80 px-2
                py-0.5 font-mono text-[9.5px] leading-none font-black tracking-[0.15em]
                text-amber-700 uppercase"
            >
              {target || "40% Target"}
            </span>
          </div>
          <p
            className="mt-2 max-w-xl text-[12px] leading-relaxed font-medium tracking-normal
              text-stone-700 select-text"
          >
            {description ||
              "Essential amino acids required to maintain lean muscle mass and tissue health."}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-end sm:items-end sm:justify-end">
        <ServingSelector />
      </div>
    </div>
  );
};
