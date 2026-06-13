import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { IngredientPantry } from "./IngredientPantry";
import { PrintButton } from "./buttons/PrintButton";
import { IngredientCategoryHeader } from "./IngredientCategoryHeader";
import { ReviewRecipeDisplay } from "./ReviewRecipeDisplay";
import { RestartButton } from "./buttons/RestartButton";
import { chapterConfig } from "../data/chapter-config";
import { NextButton } from "./buttons/NextButton";
import { PreviousButton } from "./buttons/PreviousButton";
import { ReviewRecipeButton } from "./buttons/ReviewRecipeButton";
import { AMBER_700 } from "../data/color-scheme";

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

  const currentIndex = chapterConfig.findIndex((c) => c.id === currentChapter);
  const activeChapter = chapterConfig[currentIndex];

  const resetToBeginning = () => {
    clearAllSelections();
    setIsReviewOpen(false);
    setCurrentChapter("proteins");
  };

  return (
    <div
      className="min-h-6xl flex flex-col gap-4 pt-12 select-none sm:pt-24"
      role="region"
      aria-label="Recipe Formulation"
    >
      {isReviewOpen && <ReviewRecipeDisplay goToStart={resetToBeginning} />}
      <div className="flex flex-col gap-4">
        {!isReviewOpen && (
          <>
            {currentIndex === 0 && (
              <header className="relative w-full overflow-hidden bg-cover bg-center">
                <section
                  className="relative z-10 flex max-w-3xl flex-col items-start text-left"
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
            )}

            <div className="flex flex-col gap-4 transition-all duration-300 select-none">
              <IngredientCategoryHeader activeChapter={activeChapter} />

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
          className="pointer-events-none mt-4 mb-2 h-px w-full bg-stone-800/10"
          aria-hidden="true"
        />
        <footer className="flex flex-col gap-4">
          <div className="xs:flex-row flex flex-col justify-between gap-2">
            <PreviousButton
              disabled={currentIndex === 0}
              color={
                currentIndex === 0
                  ? "transparent"
                  : isReviewOpen
                    ? AMBER_700
                    : activeChapter.hexColor
              }
              borderColor={
                currentIndex === 0
                  ? "transparent"
                  : isReviewOpen
                    ? AMBER_700
                    : activeChapter.hexColor
              }
              onPrevious={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
                if (currentIndex > 0 && !isReviewOpen)
                  setCurrentChapter(chapterConfig[currentIndex - 1].id);
                setIsReviewOpen(false);
              }}
            />

            {currentIndex === chapterConfig.length - 1 && !isReviewOpen ? (
              <ReviewRecipeButton
                color={activeChapter.hexColor}
                onReview={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                  setIsReviewOpen(true);
                }}
              />
            ) : (
              <>
                {!isReviewOpen && (
                  <NextButton
                    color={activeChapter.hexColor}
                    onNext={() => {
                      setCurrentChapter(chapterConfig[currentIndex + 1]?.id);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  />
                )}
                {isReviewOpen && selectedIds.length > 0 && (
                  <div className="flex flex-row gap-2">
                    <RestartButton onRestart={resetToBeginning} />
                    {selectedIds.length > 0 && <PrintButton disabled={false} />}
                  </div>
                )}
              </>
            )}
          </div>
        </footer>
      </div>
    </div>
  );
};
