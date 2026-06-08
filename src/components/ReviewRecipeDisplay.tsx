import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { AssetIcon } from "./AssetIcon";
import { formatSmartWeight } from "../helpers/format-smart-weight";
import { DogStaringAtBowlIcon } from "../assets/art/react-icons/dogs/dog-staring-at-bowl";
import { TopperOnlyWarning } from "./TopperOnlyWarning";

interface ReviewRecipeDisplayProps {
  goToStart: () => void;
}

export const ReviewRecipeDisplay: React.FC<ReviewRecipeDisplayProps> = ({ goToStart }) => {
  const context = useContext(GlobalControlOptionsContext);

  // Safe default structural fallbacks to protect layout rendering pipelines
  const { formData, nutritionResults, selectedIds } = context || {
    formData: { weight: 65, activity: "MODERATE", servingSize: 1 },
    nutritionResults: { dailyCalorieTarget: 142, recipeItems: [] },
    selectedIds: [],
  };

  // Filter out which items match our active selections list state array
  const activeSelectedItems = nutritionResults.recipeItems.filter((item) =>
    selectedIds.includes(item.id),
  );

  const hasNoIngredients = activeSelectedItems.length === 0;

  return (
    <div className="animate-fade-in w-full pt-6 text-left select-none md:px-8">
      {hasNoIngredients ? (
        <div
          className="animate-fade-in flex w-full flex-col items-center justify-center rounded-3xl
            border border-stone-900/2 border-b-white/30 bg-stone-900/4 p-8 text-center
            shadow-[inset_0_4px_12px_rgba(28,25,23,0.12)] select-none"
        >
          <div className="h-50 w-50 text-stone-700/90">
            <DogStaringAtBowlIcon />
          </div>
          <p className="font-serif text-[15px] leading-tight font-black text-stone-900 italic">
            Your Golden's bowl is waiting to be filled!
          </p>

          <span
            className="mt-2.5 block max-w-sm text-[10px] leading-relaxed font-black
              tracking-[0.16em] text-stone-700 uppercase select-text"
          >
            Add a few wholesome kitchen ingredients to get your personalized supplemental plan.
          </span>

          <button
            type="button"
            onClick={goToStart} /* Snaps the user straight back to Step 1 */
            className="mt-8 mb-6 flex cursor-pointer flex-row items-center justify-center gap-1.5
              rounded-xl bg-amber-800 px-6 py-2.5 font-sans text-[11px] font-black tracking-widest
              text-white uppercase shadow-md transition-all duration-150 outline-none
              focus-visible:ring-2 focus-visible:ring-stone-500 active:scale-95"
          >
            <svg
              className="stroke-currentColor h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Start
          </button>
        </div>
      ) : (
        <>
          <section className="animate-fade-in space-y-4 select-text">
            <header className="flex flex-col items-center pb-4 select-text">
              <h1
                className="font-serif text-3xl leading-none font-black text-stone-950 normal-case
                  italic"
              >
                Golden Topper Plan
              </h1>
              <div
                className="animate-fade-in mt-2 w-fit max-w-xl rounded-xl border border-amber-500/10
                  bg-amber-500/6 px-4 py-2 text-center select-none"
              >
                <p
                  className="text-[10px] leading-normal font-black tracking-widest text-amber-700/80
                    uppercase select-text"
                >
                  Dietary Strategy: 10% Fresh Food Supplemental Bowl Booster
                </p>
              </div>
            </header>

            <section
              className="mb-6 flex w-full flex-col items-center border-b border-stone-800/10 pb-6
                select-none"
            >
              <div
                className="xs:grid-cols-4 grid w-full max-w-2xl grid-cols-2 gap-x-8 gap-y-8 px-4
                  font-sans"
              >
                <div
                  className="xs:items-center xs:text-center flex w-full flex-col items-start
                    text-left leading-tight"
                >
                  <span
                    className="mb-2 text-[9.5px] font-black tracking-[0.18em] text-stone-500
                      uppercase"
                  >
                    Target Metrics
                  </span>
                  <div className="flex items-baseline gap-1 font-sans text-stone-800">
                    <span className="text-xl font-black tracking-tight text-stone-900">
                      {Math.round(nutritionResults.dailyCalorieTarget)}
                    </span>
                    <span
                      className="ml-0.5 text-[12px] font-bold tracking-normal text-stone-500/90
                        lowercase italic"
                    >
                      kcal / day
                    </span>
                  </div>
                </div>

                <div
                  className="xs:items-center xs:text-center flex w-full flex-col items-end
                    text-right leading-tight"
                >
                  <span
                    className="mb-2 text-[9.5px] font-black tracking-[0.18em] text-stone-500
                      uppercase"
                  >
                    Dog Weight
                  </span>
                  <div className="flex items-baseline gap-1 text-stone-800">
                    <span className="text-xl font-black tracking-tight text-stone-900">
                      {formData.weight || 65}
                    </span>
                    <span
                      className="ml-0.5 text-[12px] font-semibold tracking-normal text-stone-500/90
                        lowercase italic"
                    >
                      lbs
                    </span>
                  </div>
                </div>

                <div
                  className="xs:items-center xs:text-center flex w-full flex-col items-start
                    text-left leading-tight"
                >
                  <span
                    className="mb-3 text-[9.5px] font-black tracking-[0.18em] text-stone-500
                      uppercase"
                  >
                    Exercise Tier
                  </span>
                  <span className="text-[15px] font-black tracking-wide text-stone-800 capitalize">
                    {formData.activity}
                  </span>
                </div>

                <div
                  className="xs:items-center xs:text-center flex w-full flex-col items-end
                    text-right leading-tight"
                >
                  <span
                    className="mb-3 text-[9.5px] font-black tracking-[0.18em] text-amber-600
                      uppercase"
                  >
                    Serving Scale
                  </span>
                  <div className="flex items-baseline gap-1 font-sans text-amber-950">
                    <span className="text-[15px] font-black tracking-wide">
                      {formData.servingSize === 2 ? "2 Dogs" : "1 Dog"}
                    </span>
                    <span
                      className="ml-1 pt-0.5 font-serif text-[11px] font-normal tracking-normal
                        text-stone-500/90 lowercase italic"
                    >
                      ({formData.servingSize || 1}{" "}
                      {formData.servingSize === 2 ? "portions" : "portion"})
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <ul className="m-0 w-full list-none p-0" role="list">
              {activeSelectedItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between gap-6 p-2 py-3 transition-all
                    duration-300 select-none sm:p-5 print:break-inside-avoid"
                  role="listitem"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="mt-0.5 hidden h-4 w-4 shrink-0 rounded-md border-2 border-amber-400
                        sm:block"
                      aria-hidden="true"
                    />

                    <div className="h-12 w-12 shrink-0 text-stone-700" aria-hidden="true">
                      <AssetIcon name={item.icon} className="h-full w-full object-contain" />
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
                          className="mt-1.5 max-w-xl border-l-2 border-amber-400 bg-amber-50/50 py-1
                            pl-2.5 text-[9px] leading-normal font-bold tracking-wider text-amber-800
                            uppercase"
                          role="status"
                        >
                          Warning: {item.preparationAlert}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className="shadow-3xs text-stone-95 block flex-col items-center gap-2 rounded-md
                      border border-stone-200/80 bg-stone-50 px-2.5 py-1 text-center font-mono
                      text-xs leading-none font-black"
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
                      <span className="text-[9px] font-bold tracking-wider text-stone-500 uppercase">
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
            <div className="pt-4">
              <TopperOnlyWarning />
            </div>
          </section>
        </>
      )}
    </div>
  );
};
