import React, { useMemo } from "react";
import { IngredientNameDisplay } from "./IngredientNameDisplay";
import { IngredientAlertDisplay } from "./IngredientAlertDisplay";
import type { Ingredient } from "../types/nutrition";
import { AMBER_700 } from "../data/color-scheme";

interface IngredientTableProps {
  onToggle: (id: string) => void;
  selectedIds: string[];
  options: Ingredient[];
  onClearCategory?: () => void;
  maxSlots?: number;
}

export const IngredientTable: React.FC<IngredientTableProps> = ({
  selectedIds,
  options,
  onToggle,
  maxSlots = 2,
  // onClearCategory, // TODO: Add clear button
}) => {
  const processedOptions = useMemo(() => {
    return [...options].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));
  }, [options]);

  return (
    <section
      className="animate-fade-in mx-auto flex max-w-3xl flex-col space-y-4 pb-16 font-sans
        select-none"
      aria-labelledby="pantry-grid-title"
    >
      <header
        className="mb-2 flex w-full items-baseline justify-between border-b border-stone-800/10
          pb-2"
      >
        <h2
          id="pantry-grid-title"
          className="text-[10px] font-black tracking-[0.22em] text-stone-500 uppercase"
        >
          Select Ingredients
        </h2>
        <span className="text-[10px] font-bold text-stone-400/90 italic" aria-live="polite">
          {selectedIds.length} items chosen
        </span>
      </header>

      <div className="grid grid-cols-2 gap-4">
        {processedOptions.map((item) => {
          const isChecked = selectedIds.includes(item.id);
          const isDisabled = !isChecked && selectedIds.length >= maxSlots;
          const hasAlert = item.preparationAlert || item.preparation;

          return (
            <article
              style={{
                borderWidth: isChecked ? "2px" : "1px",
                borderColor: isChecked ? AMBER_700 : "rgba(120, 113, 108, 0.2)",
                backgroundColor: isChecked ? `${AMBER_700}1A` : "#faf7f2",
              }}
              key={item.id}
              className={`overflow-hidden rounded-[24px] border text-left transition-all
              duration-300 ease-out ${
                !isChecked
                  ? `border-stone-400/20 bg-[#faf7f2]/70 shadow-[0_2px_8px_rgba(28,25,23,0.01)]
                    hover:border-stone-400/50`
                  : "border-amber-600 bg-amber-600/[0.04] shadow-[0_4px_16px_rgba(180,83,9,0.04)]"
              }`}
            >
              <button
                disabled={isDisabled}
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => onToggle(item.id)}
                className="flex cursor-pointer flex-row p-4 outline-none
                  focus-visible:bg-stone-950/[0.02] sm:p-4"
              >
                <div className="flex items-center gap-4 text-left">
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
                    transition-all duration-150 ${
                      !isChecked
                        ? "border-stone-400/50 bg-white"
                        : "border-amber-700 bg-amber-700 text-white"
                    }`}
                    aria-hidden="true"
                  >
                    {isChecked && <span className="text-[10px] leading-none font-black">✓</span>}
                  </div>
                  <div className="flex flex-col">
                    <IngredientNameDisplay ingredient={item} />
                    {hasAlert && <IngredientAlertDisplay ingredient={item} />}
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
};
