import React, { useContext } from "react";
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
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const resetToBeginning = () => {
    clearAllSelections();
    setIsReviewOpen(false);
    setCurrentChapter("proteins");
  };

  return (
    <>
      {!isReviewOpen && (
        <PageHeading
          title="Build a better bowl."
          subtitle="The 10% Topper Method"
          align="left"
          details={
            () => (
              <p>
                Swapping <span className="text-amber-700">10%</span> of your Golden’s daily
                kibble with living ingredients introduces vital hydration, raw antioxidants,
                and active nutrients. Browse our ingredient pantry to craft a safe, custom
                topping plan tailored perfectly for your kitchen scale.
              </p>
            )
          }
        />
      )}
      <div
        className="min-h-6xl flex flex-col gap-4 select-none"
        role="region"
        aria-label="Recipe Formulation"
      >
        {isReviewOpen && <ReviewRecipeDisplay goToStart={resetToBeginning} />}

        <div className="flex flex-col gap-4">
          {!isReviewOpen && (
            <IngredientPantry
              key={activeChapter.id}
              selectedIds={selections[activeChapter.id]}
              chapterConfig={activeChapter}
              onToggle={(id: string) => toggleIngredient(id, currentChapter)}
              details={<IngredientCategoryDetails activeChapter={activeChapter} />}
              action={
                <div className="flex w-full flex-col gap-2 xs:flex-row xs:justify-between [&>button]:w-full xs:[&>button]:w-auto">
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
                </div>
              }
            />
          )}
          {isReviewOpen && (
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

                {selectedIds.length > 0 && (
                  <div className="flex flex-row gap-2">
                    <RestartButton onRestart={resetToBeginning} />
                    <PrintButton disabled={false} />
                  </div>
                )}
              </div>
            </footer>
          )}
        </div>
      </div>
    </>
  );
};
