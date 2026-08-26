import React, { useMemo, type ReactNode } from "react";
import { IngredientButton } from "./buttons/IngredientButton";
import type { ChapterConfig } from "../data/chapter-config";

interface PantryProps {
    onToggle: (id: string) => void;
    selectedIds: string[];
    chapterConfig: ChapterConfig;
    onClearCategory?: () => void;
    details?: ReactNode;
    action?: ReactNode;
}

export const IngredientPantry: React.FC<PantryProps> = ({
    selectedIds,
    chapterConfig,
    onToggle,
    onClearCategory,
    details,
    action,
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
        <div id="ingredient-pantry-section" className="flex min-w-0 w-full flex-col">
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
                <div
                    className="xs:block pointer-events-none ml-2 hidden h-[1px] flex-1 bg-stone-800/10"
                    aria-hidden="true"
                />
            </div>

            <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:items-start">
                <div className="flex flex-col gap-8">
                    {details}
                </div>
                <ul
                    className="xxs:grid-cols-3 xs:grid-cols-4 grid list-none grid-cols-2 gap-1.5 sm:grid-cols-5
            md:grid-cols-5 lg:grid-cols-6"
                    role="list"
                    aria-label={chapterConfig.label}
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
                {action && (
                    <div className="flex w-full flex-col gap-2 xs:flex-row xs:justify-between md:col-start-2 md:row-start-2">
                        {action}
                    </div>
                )}
            </div>
        </div>
    );
};
