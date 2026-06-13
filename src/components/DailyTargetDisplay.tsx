import React, { useContext } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";

export const DailyTargetDisplay: React.FC = () => {
  const context = useContext(GlobalControlOptionsContext);
  const { nutritionResults } = context || { nutritionResults: { dailyCalorieTarget: 142 } };

  return (
    <div
      className="animate-fade-in flex h-16.25 flex-col items-center justify-between gap-1
        text-center select-none"
      role="region"
      aria-live="polite"
      aria-label="Caloric Target Metrics Monitor"
    >
      <span
        className="text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase
          transition-colors duration-200 group-hover:text-stone-950"
      >
        Daily Target
      </span>

      <div className="relative z-10 flex flex-row items-center justify-start pb-2 text-left sm:pb-4">
        <div className="flex flex-row items-baseline gap-1">
          <span
            className="inline-block text-left text-xl leading-none font-black tracking-tighter
              text-amber-600 md:text-2xl"
          >
            {Math.round(nutritionResults.dailyCalorieTarget || 0)}
          </span>
          <span
            className="pointer-events-none mt-2 block text-[11px] leading-none font-black
              tracking-wider text-stone-900 uppercase"
          >
            kcal
          </span>
        </div>
      </div>
    </div>
  );
};
