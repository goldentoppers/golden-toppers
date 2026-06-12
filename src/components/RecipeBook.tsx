import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { IngredientPantry } from "./IngredientPantry";
import { PrintButton } from "./PrintButton";
import { IngredientCategoryHeader } from "./IngredientCategoryHeader";
import { ReviewRecipeDisplay } from "./ReviewRecipeDisplay";
import { RestartButton } from "./RestartButton";
import { chapterConfig } from "../data/chapter-config";

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

              <div
                className="flex flex-col gap-2 px-6 transition-all duration-300 select-none
                  sm:px-12"
              >
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
                        setCurrentChapter(chapterConfig[currentIndex - 1].id);
                      setIsReviewOpen(false);
                    }}
                    disabled={currentIndex === 0}
                    style={{
                      borderColor: currentIndex === 0 ? "transparent" : activeChapter.hexColor,
                      color: currentIndex === 0 ? undefined : activeChapter.hexColor,
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

                  {currentIndex === chapterConfig.length - 1 && !isReviewOpen ? (
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
                          onClick={() => setCurrentChapter(chapterConfig[currentIndex + 1]?.id)}
                          style={{ backgroundColor: activeChapter.hexColor }}
                          className="flex cursor-pointer flex-row items-center justify-center
                            gap-1.5 rounded-xl border border-transparent px-6 py-2.5 font-sans
                            text-[11px] font-black tracking-widest text-white uppercase shadow-2xs
                            transition-all duration-200 outline-none hover:scale-[1.02]
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
                {currentIndex === chapterConfig.length - 1 && isReviewOpen && (
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
