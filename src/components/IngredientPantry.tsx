import React, { useMemo, type ReactNode } from "react";
import { IngredientButton } from "./buttons/IngredientButton";
import { IngredientCategoryHeader } from "./IngredientCategoryHeader";
import { chapterConfig as allChapters, type ChapterConfig } from "../data/chapter-config";

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

    // Includes the "None" slot so every chapter grid pads out to the same tallest row count.
    const maxOptionsCount = useMemo(
        () => Math.max(...allChapters.map((c) => c.options.length + 1)),
        [],
    );

    const categoryIsEmpty = selectedIds.length === 0;

    return (
        <div id="ingredient-pantry-section" className="mx-auto flex min-w-0 w-full max-w-4xl flex-col">
            <div
                className="flex flex-col gap-4 rounded-2xl border border-stone-900/8 bg-white/60 p-10
            shadow-[0_3px_12px_rgba(28,25,23,0.06)]"
            >
                <div className="flex flex-col gap-1">
                    <IngredientCategoryHeader activeChapter={chapterConfig} />
                    {details}
                </div>
                <div className="flex flex-col items-center gap-1 px-1 pt-1 text-center">
                    <h3
                        className="shrink-0 text-[11px] leading-none font-black tracking-[0.22em] text-stone-900
            uppercase"
                    >
                        Choose Ingredients
                    </h3>
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
                </div>
                <ul
                    className="xxs:grid-cols-3 xs:grid-cols-4 grid list-none grid-cols-2 gap-1.5
            sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-7"
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
                    {Array.from({ length: maxOptionsCount - processedOptions.length }).map((_, idx) => (
                        <li key={`filler-${idx}`} aria-hidden="true" className="hidden h-24 md:block" />
                    ))}
                </ul>

                {action && (
                    <div className="flex w-full flex-col gap-2 xs:flex-row xs:justify-between">
                        {action}
                    </div>
                )}
            </div>
        </div>
    );
};
