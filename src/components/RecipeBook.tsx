import React, { useContext, useState } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { IngredientPantry } from "./IngredientPantry";
import { PrintButton } from "./buttons/PrintButton";
import {
  IngredientCategoryDetails,
} from "./IngredientCategoryHeader";
import { ReviewRecipeDisplay } from "./ReviewRecipeDisplay";
import { RestartButton } from "./buttons/RestartButton";
import { chapterConfig } from "../data/chapter-config";
import { NextButton } from "./buttons/NextButton";
import { PreviousButton } from "./buttons/PreviousButton";
import { ReviewRecipeButton } from "./buttons/ReviewRecipeButton";
import { AMBER_700 } from "../data/color-scheme";
import { PageHeading } from "./PageHeading";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { AssetIcon } from "./AssetIcon";

export const RecipeBook: React.FC = () => {
  const [hasStartedBuilding, setHasStartedBuilding] = useState(false);
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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const resetToBeginning = () => {
    clearAllSelections();
    setIsReviewOpen(false);
    setCurrentChapter("proteins");
  };

  return (
    <>
      {!hasStartedBuilding && (
        <section className="flex flex-col items-center" aria-labelledby="builder-intro-title">
          <AssetIcon name="fancy-chef-hat" className="h-40 w-40" />
          <PageHeading
            title="Build a better bowl."
            subtitle="The 10% Topper Method"
            headingId="builder-intro-title"
            details={
              () => (
                <p>
                  Swapping <span className="text-amber-700">10%</span> of your dog’s daily
                  kibble with living ingredients introduces vital hydration, raw antioxidants,
                  and active nutrients. Browse our ingredient pantry to craft a safe, custom
                  topping plan tailored perfectly for your kitchen scale.
                </p>
              )
            }
          />
          <button
            type="button"
            onClick={() => setHasStartedBuilding(true)}
            className="mt-8 cursor-pointer rounded-lg bg-amber-700 px-6 py-3 text-[11px] font-black
              tracking-[0.2em] text-white uppercase shadow-[0_3px_8px_rgba(120,53,15,0.2)]
              transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-800
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700
              focus-visible:ring-offset-2 active:translate-y-0"
          >
            Start Building a Bowl
          </button>
        </section>
      )}
      {hasStartedBuilding && <div
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
              key={activeChapter.id}
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
                      if (!isDesktop) window.scrollTo({ top: 0, behavior: "smooth" });
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
                        if (!isDesktop) window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                  )}
                </>
              }
            />
          )}
        </div>
      </div>}
    </>
  );
};
