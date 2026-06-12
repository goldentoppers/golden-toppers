import React, { useMemo } from "react";
import type { ChapterConfig } from "./RecipeBook";
import { IngredientButton } from "./IngredientButton";

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

  const categoryIsEmpty = selectedIds.length === 0;

  return (
    <div
      id="ingredient-pantry-section"
      className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center md:px-2"
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
        <div className="flex w-full max-w-5xl items-center justify-center gap-6">
          <ul
            className="xs:grid-cols-3 xxs:grid-cols-2 m-0 grid list-none grid-cols-1 justify-center
              gap-4 sm:grid-cols-3 sm:px-4 md:grid-cols-4 md:gap-6 lg:grid-cols-5"
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
                <li key={item.id} role="listitem" className="flex w-full justify-center">
                  <IngredientButton
                    ingredient={item}
                    isSelected={isSelected}
                    isDisabled={isDisabled}
                    onClick={handleItemClick}
                    isNoneItem={isNoneItem}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
