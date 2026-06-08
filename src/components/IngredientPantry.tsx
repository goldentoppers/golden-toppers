import React, { useMemo, useState } from "react";
import { NoSymbolIcon } from "@heroicons/react/24/solid";
import { AssetIcon } from "./AssetIcon";
import type { ChapterConfig } from "./RecipeBook";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ShowAllButton } from "./ShowAllButton";
import { AMBER_700 } from "../data/color-scheme";

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

  // ****** TODO: IMPLEMENT FILTERING ******* //
  // const [selectedBenefit, setSelectedBenefit] = useState<string>("");
  // const [selectedVitamin, setSelectedVitamin] = useState<string>("");

  // const filteredOptions = useMemo(() => {
  //   return options.filter((item) => {
  //     const matchesBenefit = !selectedBenefit || item.benefits.includes(selectedBenefit);
  //     const matchesVitamin = !selectedVitamin || item.vitamins.includes(selectedVitamin);
  //     return matchesBenefit && matchesVitamin;
  //   });
  // }, [options, selectedBenefit, selectedVitamin]);

  const isXXS = useMediaQuery("(min-width: 360px)"); // xxs - 6
  const isXS = useMediaQuery("(min-width: 480px)"); // xs - 8
  const isSM = useMediaQuery("(min-width: 640px)"); // sm - 10
  const isMD = useMediaQuery("(min-width: 768px)"); // md and up - 12

  // Set the unexpanded number dynamically based on screen size
  const unexpandedNumberOfDisplayedItems = isMD ? 12 : isSM ? 10 : isXS ? 8 : isXXS ? 6 : 4;

  // ✅ Controls whether the grid extends past 12 options
  const [isExpanded, setIsExpanded] = useState<boolean>(() => {
    if (!selectedIds || selectedIds.length === 0) return false;

    const hiddenOptionsPool = processedOptions.slice(unexpandedNumberOfDisplayedItems);
    const hasSelectionsHiddenInOverflow = hiddenOptionsPool.some((item) =>
      selectedIds.includes(item.id),
    );

    return hasSelectionsHiddenInOverflow;
  });

  // If not expanded, slice down to unexpanded number
  const visibleOptions = isExpanded
    ? processedOptions
    : processedOptions.slice(0, unexpandedNumberOfDisplayedItems);
  const hasMoreOptions = processedOptions.length > unexpandedNumberOfDisplayedItems;

  const categoryIsEmpty = selectedIds.length === 0;

  return (
    <div
      id="ingredient-pantry-section"
      className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center md:px-2"
    >
      <div className="w-full text-center select-text">
        <header
          className="mb-6 flex w-full flex-row flex-wrap items-center justify-between gap-y-3
            border-t border-stone-800/10 pt-3"
        >
          <h2
            className="mx-auto text-[12px] leading-none font-black tracking-[0.22em] text-stone-900
              uppercase select-text"
          >
            Choose Ingredients
          </h2>
        </header>
      </div>

      <div className="flex w-full flex-col items-center">
        <div
          className="flex w-full max-w-4xl items-center justify-center gap-6"
          style={{ paddingBottom: hasMoreOptions ? "none" : "54px" }}
        >
          <ul
            className="xs:grid-cols-4 xxs:grid-cols-3 m-0 grid w-full list-none grid-cols-2
              content-start items-start gap-4 sm:grid-cols-5 sm:px-4 md:grid-cols-6 md:gap-6"
            role="list"
            aria-label={`${chapterConfig.label}`}
          >
            {visibleOptions.map((item) => {
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
                <li key={item.id} role="listitem" className="flex w-full justify-center">
                  <button
                    type="button"
                    onClick={handleItemClick}
                    disabled={isDisabled}
                    aria-pressed={isSelected}
                    aria-label={
                      isNoneItem
                        ? "Clear all selections"
                        : `${isSelected ? "Remove" : "Add"} ${item.name}`
                    }
                    style={{
                      borderWidth: isSelected ? "2px" : "1px",
                      borderColor: isSelected ? AMBER_700 : "rgba(120, 113, 108, 0.2)",
                      backgroundColor: isSelected ? `${AMBER_700}1A` : "#faf7f2",
                    }}
                    className={`relative z-10 flex aspect-square h-26 w-26 flex-col items-center
                    justify-center rounded-2xl p-3 text-center shadow-md transition-all duration-200
                    outline-none select-none focus-visible:ring-2 focus-visible:ring-stone-500
                    focus-visible:ring-offset-2 ${
                      !isSelected && !isDisabled
                        ? "cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                        : ""
                    } ${isSelected ? "scale-[0.97] cursor-pointer font-black" : ""} ${
                      isDisabled
                        ? `cursor-not-allowed border-stone-200/40 bg-stone-100/50 opacity-30
                          shadow-none grayscale-60`
                        : ""
                    } `}
                  >
                    {/* INTERNAL CONTENT WRAPPER */}
                    <div
                      className="pointer-events-none relative flex h-full w-full flex-col
                        items-center justify-center text-center leading-tight"
                    >
                      {/* ICON CONTAINER */}
                      <div
                        className={`pointer-events-none mb-1 flex h-16 w-16 shrink-0 items-center
                        justify-center transition-transform duration-200 ${
                          isSelected ? "scale-105" : ""
                        }`}
                        aria-hidden="true"
                      >
                        {isNoneItem ? (
                          <NoSymbolIcon
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.85}
                            className={`pointer-events-none h-10 w-10 transition-transform
                              duration-200 ${isSelected ? "text-stone-950" : "text-stone-600/80"}`}
                          />
                        ) : (
                          <AssetIcon
                            name={item.icon}
                            className={`pointer-events-none h-full w-full transition-all
                              duration-200 ${
                                isSelected
                                  ? "text-stone-950 saturate-100"
                                  : "text-stone-800/75 saturate-[0.85]"
                              }`}
                          />
                        )}
                      </div>

                      {/* INGREDIENT TYPOGRAPHY LABEL */}
                      <span
                        className={`block w-full max-w-full px-0.5 text-center text-[9px]
                        leading-none tracking-wider wrap-break-word uppercase transition-colors
                        duration-200 ${
                          isSelected
                            ? "font-black text-stone-950"
                            : "font-extrabold text-stone-700/90"
                        }`}
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* ACTIVE CANCELLATION BADGE */}
                    {isSelected && !isNoneItem && (
                      <div
                        // style={{ backgroundColor: color }}
                        className="animate-fade-in shadow-3xs absolute -top-1 -right-1 flex h-4.5
                          w-4.5 cursor-pointer items-center justify-center rounded-full border
                          border-white/60 bg-amber-700 font-sans text-[9px] font-black text-white"
                        aria-hidden="true"
                      >
                        ✕
                      </div>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {hasMoreOptions && (
          <ShowAllButton
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
            numberOfItems={processedOptions.length}
          />
        )}
      </div>
    </div>
  );
};
