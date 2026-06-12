import React from "react";
import { AssetIcon } from "./AssetIcon";
import type { ChapterConfig } from "../data/chapter-config";

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
      className="relative flex w-full flex-col gap-2 text-left select-none md:flex-row md:gap-6"
    >
      <header
        className="animate-fade-in flex w-full flex-col items-start justify-start pt-8 pb-4
          select-none"
        aria-labelledby={`${title}-category-title`}
      >
        <div className="mb-4 flex w-full flex-row items-center justify-start gap-3">
          <h2
            id={`${title}-category-title`}
            className="flex shrink-0 flex-row font-serif text-2xl leading-none font-black
              tracking-wide text-stone-900 sm:text-3xl"
          >
            <div style={{ color: hexColor }}>{title.split(" ")[0]}</div>
            <div className="ml-2">{title.split(" ").slice(1).join(" ")}</div>
          </h2>

          <span
            style={{
              backgroundColor: `${hexColor}0c`,
              borderColor: `${hexColor}33`,
              color: hexColor,
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-md border px-2.5
              py-1 text-[10px] leading-none font-black tracking-wider uppercase"
          >
            {target}
          </span>
          <div
            className="pointer-events-none ml-2 h-[1px] flex-1 bg-stone-800/10"
            aria-hidden="true"
          />
        </div>

        <div className="w-full max-w-3xl text-left">
          <p
            className="w-full font-serif text-[13.5px] leading-relaxed font-medium tracking-wide
              text-stone-600/95 italic select-text sm:text-[14.5px]"
          >
            <span
              style={{ color: hexColor }}
              className="float-left mr-4 flex items-center justify-center"
              aria-hidden="true"
            >
              <AssetIcon name={icon} className="h-17 w-17" />
            </span>
            {description}
          </p>
        </div>
      </header>
    </div>
  );
};
