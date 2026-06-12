import React from "react";
import { AssetIcon } from "./AssetIcon";
import type { ChapterConfig } from "./RecipeBook";

interface IngredientCategoryHeaderProps {
  activeChapter: ChapterConfig;
}

export const IngredientCategoryHeader: React.FC<IngredientCategoryHeaderProps> = ({
  activeChapter = {
    title: "",
    target: "",
    icon: "",
    description: "",
    hexColor: "",
  },
}) => {
  const { title, target, icon, description, hexColor } = activeChapter;

  return (
    <div
      id="ingredient-category-header-section"
      className="relative flex w-full max-w-5xl flex-col items-center justify-center gap-2 text-left
        select-none md:flex-row md:gap-6"
    >
      <header
        className="animate-fade-in mx-auto flex w-full flex-col items-center justify-center px-4
          py-8 text-center select-none"
        aria-labelledby="protein-category-title"
      >
        <div className="flex flex-row gap-8">
          <div
            className="flex items-center justify-center text-amber-700 transition-transform
              duration-200 hover:scale-[1.03]"
          >
            <AssetIcon
              name={icon || "laying-down-head-up-side-profile"}
              className="h-24 w-24 stroke-[1.5] object-contain text-amber-700"
              style={{ color: hexColor }}
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-3 flex w-full items-center justify-start gap-3 text-left">
              <h2
                id="protein-category-title"
                className="font-serif text-2xl leading-none font-black tracking-wide text-stone-900
                  sm:text-3xl"
              >
                {title}
              </h2>

              <span
                className="inline-flex items-center justify-center rounded-md border
                  border-amber-600/20 bg-amber-600/[0.08] px-2.5 py-1 text-[10px] leading-none
                  font-black tracking-wider text-amber-900 uppercase"
                aria-label="Target allocation: 40 percent"
              >
                {target}
              </span>
            </div>

            <p
              className="w-full max-w-2xl items-start justify-start text-left font-serif
                text-[13.5px] leading-relaxed font-medium tracking-wide text-stone-600/95 italic
                select-text sm:text-[14.5px]"
            >
              {description}
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};
