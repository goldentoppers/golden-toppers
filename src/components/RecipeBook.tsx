import React, { useContext, useState, useEffect } from "react";
import { useRecipeBuilder } from "../hooks/useRecipeBuilder";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { IngredientPantry } from "./IngredientPantry";
import { PrintButton } from "./buttons/PrintButton";
import { IngredientCategoryDetails } from "./IngredientCategoryHeader";
import { ReviewRecipeDisplay } from "./ReviewRecipeDisplay";
import { RestartButton } from "./buttons/RestartButton";
import { chapterConfig } from "../data/chapter-config";
import { NextButton } from "./buttons/NextButton";
import { PreviousButton } from "./buttons/PreviousButton";
import { ReviewRecipeButton } from "./buttons/ReviewRecipeButton";
import { AMBER_700 } from "../data/color-scheme";
import { PageHeading } from "./PageHeading";
import { RecipeCard } from "./RecipeCard";
import { recipes, type Recipes } from "../data/recipes";

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

  const buildRecipe = useRecipeBuilder();

  const buildRecipeCallback = (recipe: Recipes) => {
    buildRecipe(recipe);
    setHasStartedBuilding(true);
  };

  const [hasStartedBuilding, setHasStartedBuilding] = useState(selectedIds.length > 0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentIndex = chapterConfig.findIndex((c) => c.id === currentChapter);
  const activeChapter = chapterConfig[currentIndex];

  // Auto-play the carousel every 4 seconds
  useEffect(() => {
    if (hasStartedBuilding) return;

    const interval = setInterval(() => {
      console.log("setting current image index to", (currentImageIndex + 1) % recipes.length);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hasStartedBuilding]);

  const resetToBeginning = () => {
    clearAllSelections();
    setIsReviewOpen(false);
    setCurrentChapter("proteins");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      });
    });
  };

  return (
    <>
      {!hasStartedBuilding && (
        <section
          className="mx-auto flex w-full max-w-4xl flex-col items-center rounded-2xl border border-stone-900/10 bg-white/70 px-5 py-10 shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10 sm:py-12"
          aria-labelledby="builder-intro-title"
        >
          <PageHeading
            title="Build a better bowl."
            subtitle="The 10% Topper Method"
            headingId="builder-intro-title"
            details={() => (
              <p>
                Swapping <span className="text-amber-700">10%</span> of your dog’s daily kibble with living ingredients introduces vital hydration, raw antioxidants, and active nutrients. Browse our ingredient pantry to craft a safe, custom topping plan tailored perfectly for your kitchen scale.
              </p>
            )}
          />
          <button
            type="button"
            onClick={() => setHasStartedBuilding(true)}
            className="mt-8 cursor-pointer rounded-lg bg-amber-700 px-6 py-3 text-[11px] font-black tracking-[0.2em] text-white uppercase shadow-[0_3px_8px_rgba(120,53,15,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 active:translate-y-0"
          >
            Start Building a Bowl
          </button>

          {/* New Preview Carousel Container */}
          <div className="mt-12 w-full">
            <div className="relative  w-full overflow-hidden rounded-xl bg-stone-100 shadow-md">
              <RecipeCard key={recipes[currentImageIndex].id} recipe={recipes[currentImageIndex]} onBuild={buildRecipeCallback} />

              {/* Left/Right Manual Controls */}
              <button
                type="button"
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev === 0 ? recipes.length - 1 : prev - 1))
                }
                className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-stone-800 hover:bg-white focus:outline-none"
                aria-label="Previous image"
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev + 1) % recipes.length)
                }
                className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 text-stone-800 hover:bg-white focus:outline-none"
                aria-label="Next image"
              >
                &rarr;
              </button>
            </div>

            {/* Pagination Indicators */}
            <div className="mt-4 flex justify-center gap-2">
              {recipes.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-2 w-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-amber-700 w-4" : "bg-stone-300"
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {hasStartedBuilding && (
        <div
          className="min-h-6xl flex flex-col gap-4 select-none"
          role="region"
          aria-label="Recipe Formulation"
        >
          {isReviewOpen && (
            <ReviewRecipeDisplay
              goToStart={resetToBeginning}
              actions={
                <>
                  <PreviousButton
                    disabled={currentIndex === 0}
                    color={currentIndex === 0 ? "transparent" : AMBER_700}
                    borderColor={currentIndex === 0 ? "transparent" : AMBER_700}
                    onPrevious={() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      setIsReviewOpen(false);
                    }}
                  />
                  {selectedIds.length > 0 && (
                    <div className="flex flex-row gap-2">
                      <RestartButton onRestart={resetToBeginning} />
                      <PrintButton disabled={false} />
                    </div>
                  )}
                </>
              }
            />
          )}

          <div className="flex flex-col gap-4">
            {!isReviewOpen && (
              <IngredientPantry
                selectedIds={selections[activeChapter.id]}
                chapterConfig={activeChapter}
                onToggle={(id: string) => toggleIngredient(id, currentChapter)}
                details={<IngredientCategoryDetails activeChapter={activeChapter} />}
                action={
                  <>
                    <PreviousButton
                      disabled={currentIndex === 0}
                      color={currentIndex === 0 ? "transparent" : activeChapter.hexColor}
                      borderColor={currentIndex === 0 ? "transparent" : activeChapter.hexColor}
                      onPrevious={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        if (currentIndex > 0) {
                          setCurrentChapter(chapterConfig[currentIndex - 1].id);
                        }
                      }}
                    />
                    {currentIndex === chapterConfig.length - 1 ? (
                      <ReviewRecipeButton
                        color={activeChapter.hexColor}
                        onReview={() => {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                          setIsReviewOpen(true);
                        }}
                      />
                    ) : (
                      <NextButton
                        color={activeChapter.hexColor}
                        onNext={() => {
                          setCurrentChapter(chapterConfig[currentIndex + 1]?.id);
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                      />
                    )}
                  </>
                }
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
