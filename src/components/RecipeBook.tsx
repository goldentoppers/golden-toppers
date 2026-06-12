import React, { useMemo, useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import type { BookCategory, Ingredient } from "../types/nutrition";
import { IngredientPantry } from "./IngredientPantry";
import { PrintButton } from "./PrintButton";
import { IngredientCategoryHeader } from "./IngredientCategoryHeader";
import { ReviewRecipeDisplay } from "./ReviewRecipeDisplay";
import { AMBER_700 } from "../data/color-scheme";
import { RestartButton } from "./RestartButton";

export interface ChapterConfig {
  id: BookCategory;
  stepNumber: number;
  title: string;
  label: string;
  target: string;
  max: number;
  description: string;
  icon: string;
  hexColor: string;
  options: Ingredient[];
}

export const RecipeBook: React.FC = () => {
  const {
    selections,
    toggleIngredient,
    selectedIds,
    clearAllSelections,
    currentChapter,
    setCurrentChapter,
    isReviewOpen,
    setIsReviewOpen,
  } = useContext(GlobalControlOptionsContext);

  const chapters: ChapterConfig[] = useMemo(
    () => [
      // =========================================================
      // 🍖 CATEGORY 1: MAIN PROTEINS (CRIMSON REFACTOR)
      // =========================================================
      {
        id: "proteins",
        icon: "downward-dog-tail-wagging",
        stepNumber: 1,
        title: "Main Proteins",
        label: "Proteins",
        target: "40%",
        hexColor: "#991b1b", // Rich premium crimson red
        tailwindColor: "text-red-800 border-red-200 bg-red-50/30",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "protein" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Essential raw amino acids required to maintain lean muscle mass, support rapid cellular repair, and protect your Golden's structural tissue health. These complete protein building blocks form the nutritional baseline of your supplemental recipe bowl.",
      },

      // =========================================================
      // 🌾 CATEGORY 2: HEARTY BASES (OATMEAL CLAY)
      // =========================================================
      {
        id: "heartyBases",
        icon: "standing",
        stepNumber: 2,
        title: "Hearty Bases",
        label: "Bases",
        target: "10%",
        hexColor: "#c25d3d", // Warm earthen clay tone
        tailwindColor: "text-amber-800 border-amber-200 bg-amber-50/20",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "vegetable" && i.density === "base" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Complex whole grains and high-density starches serving as stabilizing calorie anchors. These clean, fibrous carbohydrate structures supply long-sustained glucose pathways to fuel daily energy cycles without overloading digestion.",
      },

      // =========================================================
      // 🥦 CATEGORY 3: FRESH COLORS (BOTANICAL EMERALD)
      // =========================================================
      {
        id: "freshColors",
        icon: "laying-down-head-up",
        stepNumber: 3,
        title: "Fresh Colors",
        label: "Colors",
        target: "35%",
        hexColor: "#065f46", // Natural deep emerald botanical green
        tailwindColor: "text-emerald-800 border-emerald-200 bg-emerald-50/30",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "vegetable" && i.density !== "base" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Vibrant, sun-ripened garden vegetables rich in raw plant antioxidants, living food hydration, and active phytonutrients. These colorful selection rows support intestinal regularity and guard long-term metabolic health.",
      },

      // =========================================================
      // 🥑 CATEGORY 4: ENERGY BOOSTS (OCEAN COBALT BLUE REFACTOR)
      // =========================================================
      {
        id: "energyBoosts",
        icon: "playing-with-tennis-ball",
        stepNumber: 4,
        title: "Energy Boosts",
        label: "Boosts",
        target: "10%",
        hexColor: "#1e40af", // Rich deep cobalt blue
        tailwindColor: "text-blue-800 border-blue-200 bg-blue-50/30",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) =>
            (i.role === "carbohydrate" || i.category === "seeds-nuts") &&
            !i.isToxic &&
            !i.isHighRisk,
        ),
        description:
          "Therapeutic whole lipids and concentrated fatty acids designed to fuel cellular metabolism. This functional tier is loaded with organic Omega-3 paths to nourish the skin barrier and maintain deep, glossy coat hydration.",
      },

      // =========================================================
      // 👑 CATEGORY 5: GOLDEN TOPPERS (DEEP AMETHYST PURPLE REFACTOR)
      // =========================================================
      {
        id: "toppers",
        icon: "running-dog",
        progressIcon: "fig",
        stepNumber: 5,
        title: "Golden Toppers",
        label: "Toppers",
        target: "5%",
        hexColor: "#6b21a8", // Royal amethyst purple accent
        tailwindColor: "text-purple-800 border-purple-200 bg-purple-50/30",
        max: 2,
        options: INGREDIENT_LIBRARY.filter(
          (i) => i.role === "topper" && !i.isToxic && !i.isHighRisk,
        ),
        description:
          "Elite, biological macro-booster supplements designed to supercharge immune vitality. Handpicked target enzymes and functional trace elements provide a final layer of protection to complete the perfect supplemental bowl blueprint.",
      },
    ],
    [],
  );

  const currentIndex = chapters.findIndex((c) => c.id === currentChapter);
  const activeChapter = chapters[currentIndex];

  // Filters the master dataset down to the page category, then smoothly alphabetizes the array.
  // const filteredCategoryItems = useMemo(() => {
  //   const baseItems = nutritionResults.recipeItems.filter((item) => {
  //     if (currentChapter === "proteins") return item.role === "protein";
  //     if (currentChapter === "heartyBases") return item.density === "base";
  //     if (currentChapter === "freshColors")
  //       return (
  //         item.role === "vegetable" && item.category !== "seeds-nuts" && item.density !== "base"
  //       );
  //     if (currentChapter === "energyBoosts")
  //       return (
  //         item.category === "seeds-nuts" || item.category === "oil" || item.role === "carbohydrate"
  //       );
  //     return item.role === "topper" && item.category !== "seeds-nuts" && item.category !== "oil";
  //   });

  //   return [...baseItems].sort((a, b) =>
  //     a.name.localeCompare(b.name, "en", { sensitivity: "base" }),
  //   );
  // }, [nutritionResults.recipeItems, currentChapter]);

  // console.log("nutritionResults: ", nutritionResults);

  const resetToBeginning = () => {
    clearAllSelections();
    setIsReviewOpen(false);
    setCurrentChapter("proteins");
  };

  return (
    <div className="min-h-6xl select-none" role="region" aria-label="Recipe Formulation">
      <div className="flex flex-col gap-8" role="region" aria-label="Recipe Formulation">
        {isReviewOpen && <ReviewRecipeDisplay goToStart={resetToBeginning} />}
        <div className="flex flex-col gap-4">
          {!isReviewOpen && (
            <>
              <header className="relative w-full overflow-hidden bg-cover bg-center">
                <section
                  className="relative z-10 flex max-w-3xl flex-col items-start px-6 text-left
                    sm:px-12"
                  aria-labelledby="hero-main-headline"
                >
                  <h1
                    id="hero-main-headline"
                    className="mb-5 font-serif text-2xl leading-tight font-bold tracking-wide
                      text-stone-800 italic sm:text-3xl"
                  >
                    <span className="mb-1 block text-amber-700/95">Real, living food.</span>
                    <span className="block text-stone-900/90">Tailored for their bowl.</span>
                  </h1>

                  <div
                    className="max-w-2xl font-serif text-[14.5px] leading-relaxed font-medium
                      text-stone-700/95 italic select-text sm:text-[16px]"
                  >
                    <p>
                      Swapping <span className="text-amber-700">10%</span> of your Golden’s daily
                      kibble with living ingredients introduces vital hydration, raw antioxidants,
                      and active nutrients. Browse our ingredient pantry to craft a safe, custom
                      topping plan tailored perfectly for your kitchen scale.
                    </p>
                  </div>
                </section>
              </header>

              <div className="flex w-full flex-col gap-8 transition-all duration-300 select-none">
                <div className="items-center justify-center md:px-2">
                  <IngredientCategoryHeader activeChapter={activeChapter} />
                </div>

                <IngredientPantry
                  key={activeChapter.id}
                  selectedIds={selections[activeChapter.id]}
                  chapterConfig={activeChapter}
                  onToggle={(id: string) => toggleIngredient(id, currentChapter)}
                />
              </div>
            </>
          )}
          <div
            className="mx-auto flex w-full max-w-5xl flex-row justify-between border-t
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
