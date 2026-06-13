import React, { useMemo } from "react";
import { IngredientButton } from "./buttons/IngredientButton";
import type { ChapterConfig } from "../data/chapter-config";

interface PantryProps {
  onToggle: (id: string) => void;
  selectedIds: string[];
  chapterConfig: ChapterConfig;
  onClearCategory?: () => void;
}

export const IngredientPantry: React.FC<PantryProps> = ({
  selectedIds,
  chapterConfig,
  onToggle,
  onClearCategory,
}) => {
  const { options, max: maxSlots } = chapterConfig;

  const processedOptions = useMemo(() => {
    const alphabetized = [...options].sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
    );

    const noneOption = {
      id: `${chapterConfig.id}-none`,
      name: "None",
      icon: "none-slash",
      isNonePlaceholder: true,
      benefits: [] as string[],
      vitamins: [] as string[],
    };

    return [noneOption, ...alphabetized];
  }, [options, chapterConfig.id]);

  const categoryIsEmpty = selectedIds.length === 0;

  return (
    <div id="ingredient-pantry-section" className="flex w-full flex-col">
      <div
        className="xxs:flex-row mt-2 mb-6 flex flex-col items-center justify-between gap-3
          text-center"
      >
        <h3
          className="shrink-0 text-[11px] leading-none font-black tracking-[0.22em] text-stone-900
            uppercase"
        >
          Choose Ingredients
        </h3>
        <div
          className="xs:block pointer-events-none flex hidden h-[1px] w-4 bg-stone-800/10"
          aria-hidden="true"
        />
        <span
          aria-live="polite"
          style={{
            color: selectedIds.length === chapterConfig.max ? chapterConfig.hexColor : undefined,
          }}
          className={`shrink-0 text-[10px] leading-none font-bold tracking-wider uppercase
            transition-colors duration-200
            ${selectedIds.length === chapterConfig.max ? "font-black opacity-100" : "text-stone-500/90"}`}
        >
          {selectedIds.length === chapterConfig.max
            ? `Max reached: ${selectedIds.length}/${chapterConfig.max}`
            : `Select up to ${chapterConfig.max} (${selectedIds.length} chosen)`}
        </span>

        {/* 📏 HORIZONTAL DIVIDER RULE EXTENSION LINE */}
        <div
          className="xs:block pointer-events-none ml-2 hidden h-[1px] flex-1 bg-stone-800/10"
          aria-hidden="true"
        />
      </div>
      <ul
        className="xs:grid-cols-3 xxs:grid-cols-2 grid list-none grid-cols-1 gap-4 sm:grid-cols-3
          sm:px-4 md:grid-cols-4 lg:grid-cols-5"
        role="list"
        aria-label={`${chapterConfig.label}`}
      >
        {processedOptions.map((item) => {
          const isNoneItem = "isNonePlaceholder" in item;
          const isSelected = isNoneItem ? categoryIsEmpty : selectedIds.includes(item.id);
          const isDisabled = !isNoneItem && !isSelected && selectedIds.length >= maxSlots;

          const handleItemClick = () => {
            if (isNoneItem) {
              if (onClearCategory) onClearCategory();
              else selectedIds.forEach((id) => onToggle(id));
            } else {
              onToggle(item.id);
            }
          };

          return (
            <li key={item.id} role="listitem">
              <IngredientButton
                ingredient={item}
                isSelected={isSelected}
                isDisabled={isDisabled}
                onClick={handleItemClick}
                isNoneItem={isNoneItem}
                color={chapterConfig.hexColor}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
