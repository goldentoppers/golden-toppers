import React from "react";
import { AssetIcon } from "./AssetIcon";

interface EmptyPantrySlotsProps {
  title: string;
  activeIngredientsCount: number;
  maxSlots: number;
}

export const EmptyPantrySlots: React.FC<EmptyPantrySlotsProps> = ({
  activeIngredientsCount,
  maxSlots,
}) => {
  const emptySlotsCount = Math.max(0, maxSlots - activeIngredientsCount);

  return (
    <>
      {Array(emptySlotsCount)
        .fill(null)
        .map((_, idx) => {
          const currentSlotIndex = activeIngredientsCount + idx + 1;

          return (
            <li key={`empty-${idx}`} role="listitem" className="mb-4 w-full grow basis-0 list-none">
              <div
                className="relative flex h-37.5 w-full flex-row items-center justify-between
                  overflow-hidden rounded-3xl border border-dashed border-stone-400/60
                  bg-stone-900/3 p-6 shadow-[inset_0_2px_4px_rgba(28,25,23,0.03)] transition-all
                  duration-300 select-none"
              >
                <div className="flex flex-row">
                  <div
                    className="relative z-10 flex flex-col justify-center text-left leading-tight"
                  >
                    <div className="flex flex-row flex-wrap items-baseline gap-2">
                      <span
                        className="block text-[12px] font-black tracking-[0.16em] text-stone-800
                          uppercase"
                      >
                        Open Slot
                      </span>
                      <span
                        className="font-serif text-[11px] leading-none font-bold text-stone-500/80
                          normal-case italic"
                      >
                        (slot {currentSlotIndex} of {maxSlots})
                      </span>
                    </div>
                    <p
                      className="mt-1.5 block max-w-42.5 text-[10.5px] leading-normal font-medium
                        tracking-normal text-stone-500 select-text md:max-w-52.5"
                    >
                      Select an ingredient from the pantry to fill this slot.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const pantryElement = document.getElementById("ingredient-pantry-section");
                      if (pantryElement) {
                        pantryElement.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                    aria-label="Scroll up to the ingredient pantry selection area"
                    className="group relative z-10 flex h-11 w-11 shrink-0 cursor-pointer
                      items-center justify-center rounded-full border border-dashed
                      border-stone-400/40 bg-white/40 text-stone-800 shadow-md transition-all
                      duration-150 ease-out outline-none hover:scale-105 hover:border-stone-900/40
                      hover:bg-white hover:text-stone-900 hover:shadow-2xs focus-visible:ring-2
                      focus-visible:ring-amber-600 active:scale-95"
                  >
                    <svg
                      className="h-4 w-4 stroke-current stroke-[2.5] transition-transform
                        duration-150 group-hover:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <line x1="12" y1="19" x2="12" y2="6" />
                      <polyline points="17 11 12 6 7 11" />
                    </svg>
                  </button>
                </div>

                <div
                  className="pointer-events-none absolute right-0 -bottom-4 z-0 h-40 w-40 opacity-50
                    mix-blend-multiply transition-opacity duration-300"
                  aria-hidden="true"
                >
                  <AssetIcon
                    name="empty-dog-bowl"
                    className="h-full w-full object-contain text-stone-500"
                  />
                </div>
              </div>
            </li>
          );
        })}
    </>
  );
};
