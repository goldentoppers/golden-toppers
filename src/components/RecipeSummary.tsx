import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import { AssetIcon } from "./AssetIcon";

interface BookSummaryViewProps {
  onRestartBook: () => void;
}

export const BookSummaryView: React.FC<BookSummaryViewProps> = ({ onRestartBook }) => {
  const context = useContext(GlobalControlOptionsContext);

  if (!context) {
    return (
      <p className="p-8 text-xs text-stone-400 italic">Loading master journal data states...</p>
    );
  }

  // ✅ SCHEMA ALIGNED: Destructuring your exact context properties from your context interface
  const { selections, nutritionResults } = context;

  // Combine selections from all 5 distinct structural buckets into a single flat array
  const compiledSelectedItems =
    nutritionResults?.recipeItems?.filter((item) => {
      return (
        selections.proteins?.includes(item.id) ||
        selections.heartyBases?.includes(item.id) ||
        selections.freshColors?.includes(item.id) ||
        selections.energyBoosts?.includes(item.id) ||
        selections.toppers?.includes(item.id)
      );
    }) || [];

  const handlePrintTrigger = () => {
    window.print();
  };

  return (
    <div
      className="animate-fade-in mx-auto w-full max-w-5xl space-y-8 px-4 select-none"
      role="region"
      aria-label="Final Daily Topper Recipe Review Dashboard"
    >
      {/* EDITORIAL MASTER SUMMARY HEADER */}
      <header className="mx-auto max-w-xl space-y-2 text-center">
        <span className="block text-[10px] font-black tracking-[0.3em] text-amber-500 uppercase">
          Formulation Complete
        </span>
        <h2
          className="font-serif text-3xl leading-tight tracking-tight text-stone-900 italic
            md:text-4xl"
        >
          Review Your Golden's Recipe
        </h2>
        <p className="text-xs leading-relaxed font-medium text-stone-600">
          Verify your custom daily gram portions and calorie distributions. This mix is
          automatically clamped inside a safe 10% fresh food supplemental booster envelope [2.1].
        </p>
      </header>

      {/* THE MASTER TWO-PAGE SPREAD GLASS PLATE */}
      <div
        className="relative grid min-h-[520px] grid-cols-1 overflow-hidden rounded-[2.5rem] border
          border-stone-200 bg-[#faf9f6]/95 shadow-[0_24px_70px_rgba(0,0,0,0.04)] backdrop-blur-md
          transition-all duration-300 lg:grid-cols-2"
      >
        {/* 📘 LEFT SUMMARY LEAF: Comprehensive Kitchen Weight Tally Checklist */}
        <section
          className="flex flex-col justify-between border-b border-stone-200 bg-stone-50/10 p-6
            md:p-10 lg:border-r lg:border-b-0"
        >
          <div className="w-full space-y-6 text-left">
            <h3 className="block text-xs font-black tracking-[0.2em] text-stone-400 uppercase">
              The Master Ingredient Tally
            </h3>

            {compiledSelectedItems.length === 0 ? (
              <p className="text-xs text-stone-500 italic">
                Your topper journal is currently vacant. Navigate back to add selections.
              </p>
            ) : (
              <ul className="m-0 grid w-full list-none grid-cols-1 gap-3 p-0" role="list">
                {compiledSelectedItems.map((item) => (
                  <li
                    key={item.id}
                    className="shadow-3xs animate-fade-in flex items-center justify-between
                      rounded-2xl border border-stone-200 bg-white/60 p-4"
                    role="listitem"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-5 flex-shrink-0 text-stone-800">
                        <AssetIcon name={item.icon || item.id} className="h-full w-full" />
                      </div>
                      <span
                        className="text-[10px] font-black tracking-wider text-stone-900 uppercase"
                      >
                        {item.name}
                      </span>
                    </div>

                    {/* Highly precise structural weight values display from your recipe items */}
                    <span
                      className="border-stone-150 shadow-3xs rounded-md border bg-white px-2.5 py-1
                        font-mono text-xs font-black text-stone-950"
                    >
                      {item.grams ? `${item.grams.toFixed(1)} g` : "0.0 g"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <footer className="border-stone-150 mt-6 border-t pt-6 text-left">
            <button
              type="button"
              onClick={onRestartBook}
              className="cursor-pointer border-none bg-transparent text-[9px] font-black font-bold
                tracking-widest text-stone-400 uppercase transition-colors outline-none
                hover:text-stone-900"
            >
              🔄 Wipe Selections & Restart Journal
            </button>
          </footer>
        </section>

        {/* INTERNAL GRADIENT BINDING SPINE */}
        <div
          className="pointer-events-none absolute top-0 bottom-0 left-1/2 z-20 hidden w-[1px]
            bg-stone-200/80 shadow-[inset_0_0_12px_rgba(0,0,0,0.02)] lg:block"
          aria-hidden="true"
        />

        {/* 📙 RIGHT SUMMARY LEAF: Real-Time Metric Energy Allocations */}
        <section
          className="relative flex flex-col items-center justify-between bg-white/40 p-6 text-left
            md:p-10"
        >
          <div
            className="absolute top-0 right-10 h-10 w-8 rounded-b bg-amber-500 opacity-80 shadow-xs"
            aria-hidden="true"
          />

          <div className="flex w-full flex-col items-center space-y-8 pt-4">
            <div className="w-full space-y-1 text-center">
              <span
                className="block text-[9px] font-black tracking-[0.2em] text-stone-400 uppercase"
              >
                Total Supplemental Energy Target
              </span>
              {/* ✅ SCHEMA ALIGNED: Updated from .total to your exact .dailyCalorieTarget key */}
              <div className="text-4xl font-black tracking-tighter text-stone-950">
                {nutritionResults?.dailyCalorieTarget || 0}{" "}
                <span className="ml-1 text-xs font-black tracking-widest text-amber-600 uppercase">
                  kcal / day
                </span>
              </div>
            </div>

            {/* HIGH-CONTRAST STRUCTURED CUMULATIVE MACRO BAR TILES */}
            <div className="w-full max-w-sm space-y-3" role="status" aria-live="polite">
              <div
                className="shadow-3xs flex items-center justify-between rounded-xl border
                  border-stone-200 bg-white/60 px-4 py-3 text-xs font-bold text-stone-700"
              >
                <span className="tracking-wider uppercase">🌿 Vegetables & Fiber (50%)</span>
                <span className="font-mono font-black text-stone-900">
                  {nutritionResults?.macros?.vegetables || 0} kcal
                </span>
              </div>
              <div
                className="shadow-3xs flex items-center justify-between rounded-xl border
                  border-stone-200 bg-white/60 px-4 py-3 text-xs font-bold text-stone-700"
              >
                <span className="tracking-wider uppercase">🥩 Protein Allotment (40%)</span>
                <span className="font-mono font-black text-stone-900">
                  {nutritionResults?.macros?.protein || 0} kcal
                </span>
              </div>
              <div
                className="shadow-3xs flex items-center justify-between rounded-xl border
                  border-stone-200 bg-white/60 px-4 py-3 text-xs font-bold text-stone-700"
              >
                <span className="tracking-wider uppercase">🌾 Starch & Lipids (10%)</span>
                <span className="font-mono font-black text-stone-900">
                  {nutritionResults?.macros?.carbs || 0} kcal
                </span>
              </div>
            </div>
          </div>

          <div
            className="mt-6 flex w-full flex-col items-center space-y-3 border-t border-stone-200/60
              pt-6"
          >
            <button
              type="button"
              onClick={handlePrintTrigger}
              className="group flex w-full max-w-xs cursor-pointer items-center justify-center gap-2
                rounded-xl bg-stone-900 px-6 py-3 text-center text-xs font-black tracking-widest
                text-white uppercase shadow-sm transition-all duration-200 hover:bg-stone-800
                active:scale-[0.98]"
            >
              <span>🖨️ Print Pastel Kitchen Sheet</span>
            </button>
            <span className="block text-[9px] font-bold tracking-wider text-stone-400 uppercase">
              Outputs a scale-ready weight list format
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
