import { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { AssetIcon } from "./AssetIcon";
import { formatSmartWeight } from "../helpers/format-smart-weight";
import { DailyTargetDisplay } from "./DailyTargetDisplay";

export const PrintedRecipeTemplate = () => {
  const { formData, nutritionResults, selectedIds } = useContext(GlobalControlOptionsContext);

  return (
    <>
      {/* --- HIDDEN PRINT VIEW CONTAINER --- */}
      <div
        id="recipe-pdf-template"
        className="hidden bg-white text-left font-sans text-stone-900 print:m-0 print:block
          print:w-full print:p-0"
      >
        <div className="mx-auto max-w-[800px] p-12">
          <header className="mb-8 flex items-end justify-between border-b-2 border-amber-400 pb-6">
            <div>
              <h1
                className="font-serif text-4xl leading-tight font-black tracking-wide text-stone-900
                  italic"
              >
                <div className="text-amber-700">
                  {formData.dogName ? `${formData.dogName}'s` : "Golden"}
                </div>
                Topper Plan
              </h1>
              <div className="mt-1.5 flex items-center gap-2">
                <span
                  className="rounded-md border border-amber-200/60 bg-amber-50 px-2.5 py-1
                    text-[9px] font-black tracking-[0.2em] text-amber-800 uppercase"
                >
                  Dietary Strategy: 10% Fresh Food Supplemental Bowl Booster
                </span>
              </div>
            </div>
            <div className="text-right font-mono text-[10px] text-stone-400">
              Generated: {new Date().toLocaleDateString()}
            </div>
          </header>

          <section className="mb-8 flex gap-8 rounded-2xl border border-stone-100 bg-stone-50 p-6">
            <div
              className="flex w-full flex-row flex-wrap items-center justify-between gap-y-4
                font-sans select-none"
            >
              <DailyTargetDisplay />

              <div className="flex min-w-[80px] flex-col items-start leading-tight">
                <span
                  className="mb-1.5 text-[10px] font-black tracking-[0.2em] text-stone-500
                    uppercase"
                >
                  Dog Weight
                </span>
                <span className="text-lg font-black tracking-tight whitespace-nowrap text-stone-900">
                  {formData.weight || 65} lbs
                </span>
              </div>

              <div className="flex min-w-[100px] flex-col items-start leading-tight">
                <span
                  className="mb-1.5 text-[10px] font-black tracking-[0.2em] text-stone-500
                    uppercase"
                >
                  Exercise Tier
                </span>
                <span
                  className="text-lg font-black tracking-wide whitespace-nowrap text-stone-900
                    uppercase"
                >
                  {formData.activity}
                </span>
              </div>

              <div
                className="flex min-w-[130px] flex-col items-start border-l border-stone-200 pl-6
                  leading-tight md:pl-8"
              >
                <span
                  className="mb-1.5 text-[10px] font-black tracking-[0.2em] text-amber-600
                    uppercase"
                >
                  Serving Scale
                </span>
                <div
                  className="flex items-center gap-1.5 text-lg font-black whitespace-nowrap
                    text-amber-950"
                >
                  <span>
                    {formData.servingSize || 1}{" "}
                    {formData.servingSize === 2 ? "portions" : "portion"}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2
              className="border-b border-stone-200 pb-2 text-xs font-black tracking-widest
                text-stone-800 uppercase"
            >
              Selected Kitchen Ingredients
            </h2>

            <ul className="m-0 list-none space-y-4 p-0" role="list">
              {nutritionResults.recipeItems
                .filter((item) => selectedIds.includes(item.id))
                .map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start justify-between border-b border-stone-100 py-3
                      print:break-inside-avoid"
                    role="listitem"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="mt-0.5 h-4 w-4 flex-shrink-0 rounded-md border-2
                          border-amber-500/40"
                        aria-hidden="true"
                      />

                      <div className="h-8 w-8 flex-shrink-0 text-stone-700" aria-hidden="true">
                        <AssetIcon name={item.icon} className="h-full w-full" />
                      </div>

                      <div className="flex flex-col text-left">
                        <span className="text-xs font-black tracking-tight text-stone-900 uppercase">
                          {item.name}
                        </span>

                        {item.preparation && (
                          <span
                            className="mt-0.5 text-[9px] font-bold tracking-wider text-stone-500
                              uppercase"
                          >
                            Preparation: {item.preparation}
                          </span>
                        )}

                        {item.preparationAlert && (
                          <span
                            className="mt-1.5 max-w-xl border-l-2 border-amber-400 bg-amber-50/50
                              py-1 pl-2.5 text-[9px] leading-normal font-bold tracking-wider
                              text-amber-800 uppercase"
                            role="status"
                          >
                            <strong className="font-black text-amber-900">Warning:</strong>{" "}
                            {item.preparationAlert}
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className="flex min-w-[70px] flex-shrink-0 flex-col items-end justify-center
                        gap-1 text-right"
                    >
                      {/* 1. PRIMARY METRIC BADGE (Grams / Tsp) */}
                      <span
                        className="block rounded-md border border-stone-200 bg-white px-2.5 py-1
                          font-mono text-xs font-black text-stone-950 shadow-2xs"
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
                      </span>

                      {formatSmartWeight({
                        grams: item.grams,
                        category: item.category,
                        densityType: item.density,
                        role: item.role,
                        servingSize: formData.servingSize || 1,
                        ingredientId: item.id,
                      }).subtext && (
                        <span
                          className="mt-0.5 block pr-0.5 font-mono text-[10px] font-black
                            tracking-tight text-stone-500 uppercase"
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
                    </div>
                  </li>
                ))}
            </ul>
          </section>

          <footer
            className="mt-16 border-t border-stone-100 pt-8 text-[9px] leading-relaxed
              tracking-widest text-stone-400 uppercase"
          >
            * This document provides general nutritional estimates based on average values.
            Individual dog requirements vary. Always confirm long-term fresh dietary strategies with
            your primary care veterinarian.
          </footer>
        </div>
      </div>
    </>
  );
};
