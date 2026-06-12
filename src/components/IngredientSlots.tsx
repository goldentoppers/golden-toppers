import React, { useContext } from "react";
import { AssetIcon } from "./AssetIcon";
import type { RecipeResultItem } from "../types/nutrition";
import { EmptyPantrySlots } from "./EmptyPantrySlots";
import { formatSmartWeight } from "../helpers/format-smart-weight";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { CloseButton } from "./common/CloseButton";
import { TopperOnlyWarning } from "./TopperOnlyWarning";
import type { ChapterConfig } from "../data/chapter-config";

interface IngredientSlotsProps {
  activeChapter: ChapterConfig;
  activeSelectedItems: RecipeResultItem[];
  onToggle: (id: string) => void;
}

export const IngredientSlots: React.FC<IngredientSlotsProps> = ({
  activeChapter,
  activeSelectedItems,
  onToggle,
}) => {
  const context = useContext(GlobalControlOptionsContext);
  const { formData } = context || { formData: { servingSize: 1 } };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col">
      <div className="w-full text-center select-text">
        <header
          className="mb-6 flex w-full flex-row flex-wrap items-center justify-between gap-y-3
            border-t border-stone-800/10 pt-3"
        >
          <h2
            className="mx-auto text-[12px] leading-none font-black tracking-[0.22em] text-stone-900
              uppercase select-text"
          >
            Selected Portions
          </h2>
        </header>
      </div>
      <ul role="list">
        <div className="flex flex-col gap-4 font-sans select-none md:flex-row">
          {activeSelectedItems.map((item) => {
            const hasAlert = item.preparationAlert || item.preparation;

            return (
              <li key={item.id} className="w-full shrink-0 grow basis-0">
                <div
                  className="relative h-37.5 rounded-3xl border border-stone-300 bg-white/80 p-5
                    shadow-sm transition-all duration-300 select-none"
                >
                  <div
                    className="pointer-events-none absolute top-1/2 right-0 z-0 mr-4
                      -translate-y-1/2 scale-100 transform"
                    aria-hidden="true"
                  >
                    <AssetIcon name={item.icon} className="h-28 w-28 object-contain opacity-80" />
                  </div>

                  <div className="relative z-10 flex flex-row items-center justify-between">
                    <div className="flex flex-row">
                      <div
                        className="flex flex-col items-end justify-center pr-2 text-center
                          select-text"
                      >
                        <span
                          className="block rounded-md border border-stone-400/80 bg-stone-50 px-2.5
                            py-1 text-center font-mono text-sm leading-none font-black
                            text-stone-950"
                        >
                          {
                            formatSmartWeight({
                              grams: item.grams,
                              category: item.category,
                              densityType: item.density,
                              role: item.role,
                              servingSize: formData.servingSize || 1,
                              ingredientId: item.id,
                            }).primary
                          }

                          {formatSmartWeight({
                            grams: item.grams,
                            category: item.category,
                            densityType: item.density,
                            role: item.role,
                            servingSize: formData.servingSize || 1,
                            ingredientId: item.id,
                          }).subtext && (
                            <span
                              className="mt-1 block items-center pr-0.5 text-center font-mono
                                text-xs leading-none font-black tracking-tight text-stone-700
                                uppercase"
                            >
                              {
                                formatSmartWeight({
                                  grams: item.grams,
                                  category: item.category,
                                  densityType: item.density,
                                  role: item.role,
                                  servingSize: formData.servingSize || 1,
                                  ingredientId: item.id,
                                }).subtext
                              }
                            </span>
                          )}
                        </span>
                      </div>
                      <div
                        className="flex max-w-50 flex-col justify-center pl-2 text-left
                          leading-tight select-text"
                      >
                        <h4
                          className="text-[13px] font-black tracking-wider text-stone-950 uppercase"
                        >
                          {item.name}
                        </h4>

                        <span
                          className="mt-1 block text-[8.5px] font-black tracking-wider
                            text-stone-500 uppercase"
                        >
                          {Array.isArray(item.vitamins)
                            ? item.vitamins.join(" / ")
                            : item.vitamins || "Nutrients"}
                          <span className="mx-1 text-stone-300/80">•</span>{" "}
                          <span
                            className="font-serif text-[10px] font-bold tracking-normal
                              text-emerald-800 normal-case italic"
                          >
                            {Array.isArray(item.benefits)
                              ? item.benefits.join(", ")
                              : item.benefits || "Wellness"}
                          </span>
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 flex shrink-0 items-center gap-6 pr-1">
                      <div className="-mt-8 -mr-2">
                        <CloseButton
                          onClick={() => onToggle(item.id)}
                          ariaLabel={`Remove ${item.name} from recipe`}
                        />
                      </div>
                    </div>
                  </div>

                  {hasAlert && (
                    <div
                      className="animate-fade-in relative z-10 mt-3 flex w-fit max-w-87.5
                        items-center gap-3 self-start rounded-xl border border-amber-500/10
                        bg-amber-500/4 px-3.5 py-1.5 text-left select-text"
                    >
                      <div
                        className="h-4 w-0.5 shrink-0 rounded-full bg-amber-500 opacity-65"
                        aria-hidden="true"
                      />
                      <p className="text-[11px] leading-normal font-bold text-stone-800 select-text">
                        {item.preparationAlert && (
                          <span className="inline">
                            <strong
                              className="mr-1 text-[9px] font-black tracking-wider text-stone-950
                                uppercase"
                            >
                              Note:
                            </strong>
                            {item.preparationAlert}
                          </span>
                        )}
                        {item.preparationAlert && item.preparation && (
                          <span className="mx-2 inline text-stone-400/80">•</span>
                        )}
                        {item.preparation && (
                          <span className="inline">
                            <strong
                              className="mr-1 text-[9px] font-black tracking-wider text-stone-950
                                uppercase"
                            >
                              Prep:
                            </strong>
                            <span className="font-semibold text-stone-700">{item.preparation}</span>
                          </span>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
          <EmptyPantrySlots
            title={activeChapter.label}
            maxSlots={activeChapter.max}
            activeIngredientsCount={activeSelectedItems?.length}
          />
        </div>
        <TopperOnlyWarning />
      </ul>
    </div>
  );
};
