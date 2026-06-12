import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { AssetIcon } from "./AssetIcon";
import { DogStaringAtBowlIcon } from "../assets/art/react-icons/dogs/dog-staring-at-bowl";
import { TopperOnlyWarning } from "./TopperOnlyWarning";
import { IngredientFormattedWeightDisplay } from "./IngredientFormattedWeightDisplay";
import { DailyTargetDisplay } from "./DailyTargetDisplay";
import ServingSelector from "./ServingSelector";
import { WeightInput } from "./WeightInput";
import { ExerciseInput } from "./ExerciseInput";

interface ReviewRecipeDisplayProps {
  goToStart: () => void;
}

export const ReviewRecipeDisplay: React.FC<ReviewRecipeDisplayProps> = ({ goToStart }) => {
  const context = useContext(GlobalControlOptionsContext);

  const { nutritionResults, selectedIds } = context || {
    formData: { weight: 65, activity: "MODERATE", servingSize: 1 },
    nutritionResults: { dailyCalorieTarget: 142, recipeItems: [] },
    selectedIds: [],
  };

  const activeSelectedItems = nutritionResults.recipeItems.filter((item) =>
    selectedIds.includes(item.id),
  );

  const hasNoIngredients = selectedIds.length === 0;

  return (
    <div className="animate-fade-in w-full pt-12 text-left select-none md:px-8 md:pt-32">
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
            onClick={goToStart}
            className="mt-8 mb-6 flex cursor-pointer flex-row items-center justify-center gap-1.5
              rounded-xl bg-amber-700 px-6 py-2.5 font-sans text-[11px] font-black tracking-widest
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
              <div className="flex w-full flex-col items-center justify-between gap-8 sm:flex-row">
                <div className="flex flex-row items-center justify-center gap-8">
                  <WeightInput />
                  <ExerciseInput />
                </div>
                <div className="flex w-full flex-row items-center justify-center gap-8">
                  <DailyTargetDisplay />
                  <ServingSelector />
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
                  <IngredientFormattedWeightDisplay ingredient={item} />
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
