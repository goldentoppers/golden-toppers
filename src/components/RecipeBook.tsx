import React, { useState, useMemo, useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import type { Ingredient } from "../types/nutrition";
import { IngredientPantry } from "./IngredientPantry";
import { PrintButton } from "./PrintButton";
import { IngredientSlots } from "./IngredientSlots";
import { IngredientCategoryHeader } from "./IngredientCategoryHeader";
import { WeightInput } from "./WeightInput";
import { ExerciseInput } from "./ExerciseInput";
import { ReviewRecipeDisplay } from "./ReviewRecipeDisplay";
import { DailyTargetDisplay } from "./DailyTargetDisplay";
import { AMBER_700 } from "../data/color-scheme";
import { RestartButton } from "./RestartButton";

export type BookCategory = "proteins" | "heartyBases" | "freshColors" | "energyBoosts" | "toppers";

export interface ChapterConfig {
  id: BookCategory;
  stepNumber: number;
  title: string;
  label: string;
  target: string;
  max: number;
  description: string;
  icon: string;
  options: Ingredient[];
  progressIcon: string;
}

export const RecipeBook: React.FC = () => {
  const { selections, nutritionResults, toggleIngredient, selectedIds, clearAllSelections } =
    useContext(GlobalControlOptionsContext);

  const [currentChapter, setCurrentChapter] = useState<BookCategory>("proteins");
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const chapters: ChapterConfig[] = useMemo(
    () => [
      {
        id: "proteins",
        icon: "downward-dog-tail-wagging",
        progressIcon: "fig",
        stepNumber: 1,
        title: "Main Proteins",
        label: "Proteins",
        target: "40%",

        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "protein" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Essential amino acids required to maintain lean muscle mass and tissue health.",
      },
      {
        id: "heartyBases",
        icon: "standing",
        progressIcon: "fig",
        stepNumber: 2,
        title: "Hearty Bases",
        label: "Bases",
        target: "10%",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "vegetable" && i.density === "base" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Complex whole grains serving as high-density calorie anchors to stabilize energy levels.",
      },
      {
        id: "freshColors",
        icon: "laying-down-head-up",
        progressIcon: "fig",
        stepNumber: 3,
        title: "Fresh Colors",
        label: "Colors",
        target: "35%",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "vegetable" && i.density !== "base" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Vibrant vegetables rich in live antioxidants and dietary fiber for digestive regularity.",
      },
      {
        id: "energyBoosts",
        icon: "playing-with-tennis-ball",
        progressIcon: "fig",
        stepNumber: 4,
        title: "Energy Boosts",
        label: "Boosts",
        target: "10%",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) =>
            (i.role === "carbohydrate" || i.category === "seeds-nuts") &&
            !i.isToxic &&
            !i.isHighRisk,
        ),
        description:
          "Therapeutic lipids tracking omega fatty acids to fuel healthy skin barrier hydration.",
      },
      {
        id: "toppers",
        icon: "running-dog",
        progressIcon: "fig",
        stepNumber: 5,
        title: "Golden Toppers",
        label: "Toppers",
        target: "5%",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "topper" && !i.isToxic && !i.isHighRisk,
        ),
        description: "Raw macro-booster supplements designed to supercharge immune vitality.",
      },
    ],
    [],
  );

  const currentIndex = chapters.findIndex((c) => c.id === currentChapter);
  const activeChapter = chapters[currentIndex];

  // Filters the master dataset down to the page category, then smoothly alphabetizes the array.
  const filteredCategoryItems = useMemo(() => {
    const baseItems = nutritionResults.recipeItems.filter((item) => {
      if (currentChapter === "proteins") return item.role === "protein";
      if (currentChapter === "heartyBases") return item.density === "base";
      if (currentChapter === "freshColors")
        return (
          item.role === "vegetable" && item.category !== "seeds-nuts" && item.density !== "base"
        );
      if (currentChapter === "energyBoosts")
        return (
          item.category === "seeds-nuts" || item.category === "oil" || item.role === "carbohydrate"
        );
      return item.role === "topper" && item.category !== "seeds-nuts" && item.category !== "oil";
    });

    return [...baseItems].sort((a, b) =>
      a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
    );
  }, [nutritionResults.recipeItems, currentChapter]);

  const activeSelectedItems = useMemo(() => {
    return filteredCategoryItems.filter((item) => selections[currentChapter].includes(item.id));
  }, [filteredCategoryItems, selections, currentChapter]);

  const resetToBeginning = () => {
    clearAllSelections();
    setIsReviewOpen(false);
    setCurrentChapter("proteins");
  };

  return (
    <div className="min-h-6xl mx-auto select-none" role="region" aria-label="Recipe Formulation">
      <div className="flex flex-col gap-8" role="region" aria-label="Recipe Formulation">
        {isReviewOpen && <ReviewRecipeDisplay goToStart={resetToBeginning} />}
        <div className="flex flex-col gap-4">
          {!isReviewOpen && (
            <>
              <header className="relative w-full overflow-hidden bg-cover bg-center">
                <section
                  className="relative z-10 flex max-w-3xl flex-col items-start px-6 pb-6 text-left
                    sm:px-12"
                  aria-labelledby="hero-main-headline"
                >
                  <h1
                    id="hero-main-headline"
                    className="mb-4 font-serif text-3xl leading-tight font-black tracking-wide
                      text-stone-900 italic"
                  >
                    <div className="text-amber-700">Real, living food.</div>
                    <div>Tailored for their bowl.</div>
                  </h1>

                  <div
                    className="max-w-2xl font-serif text-[14.5px] leading-relaxed font-medium
                      text-stone-700/95 italic select-text sm:text-[16px]"
                  >
                    <p>
                      Swapping <span className="text-amber-700">10%</span> of your Golden’s daily
                      kibble with living ingredients introduces vital hydration, raw antioxidants,
                      and active nutrients. Input their weight and activity level, then browse our
                      ingredient pantry to craft a safe, custom topping plan tailored perfectly for
                      your kitchen scale.
                    </p>
                  </div>
                </section>
              </header>

              <div className="flex w-full flex-col gap-8 transition-all duration-300 select-none">
                <div
                  className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center
                    gap-4 sm:items-center md:flex-row md:gap-8"
                >
                  <ExerciseInput />
                  <div className="flew-col flex justify-between gap-4 sm:flex-row">
                    <WeightInput />
                    <DailyTargetDisplay />
                  </div>
                </div>
                <div className="mx-auto items-center justify-center md:px-2">
                  <IngredientCategoryHeader activeChapter={activeChapter} />
                </div>

                <IngredientPantry
                  key={activeChapter.id}
                  selectedIds={selections[activeChapter.id]}
                  chapterConfig={activeChapter}
                  onToggle={(id: string) => toggleIngredient(id, currentChapter)}
                />

                <IngredientSlots
                  currentChapter={currentChapter}
                  setCurrentChapter={(ch) => setCurrentChapter(ch)}
                  activeChapter={activeChapter}
                  onToggle={(id) => toggleIngredient(id, currentChapter)}
                  activeSelectedItems={activeSelectedItems}
                />
              </div>
            </>
          )}
          <div
            className="mx-auto flex w-full max-w-4xl flex-row justify-between border-t
              border-stone-800/10 pt-8"
          >
            <footer className="flex w-full">
              <div className="xs:flex-row flex w-full flex-col gap-4">
                <div className="flex w-full flex-row justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (currentIndex > 0 && !isReviewOpen)
                        setCurrentChapter(chapters[currentIndex - 1].id);
                      setIsReviewOpen(false);

                      const categoryHeaderElement = document.getElementById(
                        "ingredient-category-header-section",
                      );
                      if (categoryHeaderElement) {
                        categoryHeaderElement.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                    disabled={currentIndex === 0}
                    style={{
                      borderColor: currentIndex === 0 ? "transparent" : AMBER_700,
                      color: currentIndex === 0 ? undefined : AMBER_700,
                    }}
                    className="shadow-3xs xs:w-auto flex w-full cursor-pointer flex-row items-center
                      justify-center gap-1.5 rounded-xl border bg-white/40 px-5 py-2.5 font-sans
                      text-[11px] font-black tracking-widest uppercase transition-all duration-200
                      outline-none hover:scale-[1.01] hover:bg-white focus-visible:ring-2
                      focus-visible:ring-stone-500 focus-visible:ring-offset-1 active:scale-95
                      disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-20"
                  >
                    <svg
                      className="stroke-currentColor h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Previous
                  </button>

                  {currentIndex === chapters.length - 1 && !isReviewOpen ? (
                    <button
                      type="button"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                        setIsReviewOpen(true);
                      }}
                      className="flex cursor-pointer flex-row items-center justify-center gap-2
                        rounded-xl border border-transparent bg-amber-700 px-6 py-2.5 font-sans
                        text-[11px] font-black tracking-widest text-white uppercase shadow-2xs
                        transition-all duration-200 outline-none hover:scale-[1.02]
                        hover:brightness-105 focus-visible:ring-2 focus-visible:ring-stone-500
                        active:scale-95"
                    >
                      Review Recipe
                      <BookOpenIcon
                        className={`pointer-events-none h-5 w-5 transition-transform duration-300
                          select-none group-hover/item:rotate-90`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <>
                      {isReviewOpen ? (
                        <>
                          <div className="xs:block hidden">
                            <RestartButton onRestart={resetToBeginning} />
                          </div>
                          {selectedIds.length > 0 && <PrintButton disabled={false} />}
                        </>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            setCurrentChapter(chapters[currentIndex + 1]?.id);

                            const categoryHeaderElement = document.getElementById(
                              "ingredient-category-header-section",
                            );
                            if (categoryHeaderElement) {
                              categoryHeaderElement.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }}
                          className="flex cursor-pointer flex-row items-center justify-center
                            gap-1.5 rounded-xl border border-transparent bg-amber-700 px-6 py-2.5
                            font-sans text-[11px] font-black tracking-widest text-white uppercase
                            shadow-2xs transition-all duration-200 outline-none hover:scale-[1.02]
                            hover:brightness-105 focus-visible:ring-2 focus-visible:ring-stone-500
                            focus-visible:ring-offset-1 active:scale-95 disabled:pointer-events-none
                            disabled:cursor-not-allowed disabled:opacity-25"
                        >
                          Next
                          <svg
                            className="stroke-currentColor h-4 w-4 transition-transform duration-200
                              group-hover:translate-x-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="9 18 15 12 9 6" />
                          </svg>
                        </button>
                      )}
                    </>
                  )}
                </div>
                {currentIndex === chapters.length - 1 && isReviewOpen && (
                  <div className="xs:hidden block">
                    <RestartButton onRestart={resetToBeginning} />
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
