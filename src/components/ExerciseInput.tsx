import { useContext, useState } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import type { ActivityLevel } from "../types/nutrition";
import { AssetIcon } from "./AssetIcon";

export const ExerciseInput = () => {
  const context = useContext(GlobalControlOptionsContext);

  const [localActivity, setLocalActivity] = useState<ActivityLevel>("moderate");

  const hasContext = Boolean(context);
  const currentActivity = hasContext ? context.formData.activity : localActivity;

  const options: { value: ActivityLevel; label: string; icon: string }[] = [
    { value: "low", label: "Low", icon: "sleeping" },
    { value: "moderate", label: "Med", icon: "standing" },
    { value: "high", label: "High", icon: "running-dog" },
  ];

  const handleSelect = (value: ActivityLevel) => {
    if (hasContext) {
      context.setFormData((p) => ({
        ...p,
        activity: value,
      }));
    } else {
      setLocalActivity(value);
    }
  };

  return (
    <div className="animate-fade-in relative flex w-auto flex-col font-sans select-none">
      <span className="mb-2 text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase">
        Activity Level
      </span>

      <div className="flex flex-row items-center justify-start gap-1 md:gap-2">
        {options.map((opt) => {
          const isSelected = currentActivity === opt.value;

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              aria-pressed={isSelected}
              className={`relative flex aspect-square h-16 w-16 cursor-pointer flex-col items-center justify-center gap-1 rounded-md p-1
                text-center transition-colors duration-150 outline-none focus-visible:ring-2
                focus-visible:ring-amber-700 focus-visible:ring-offset-2 md:h-24 md:w-24 md:p-2 ${isSelected
                  ? "bg-amber-700/10 text-amber-700"
                  : "text-stone-600 hover:bg-stone-900/5 hover:text-stone-900"
                }`}
            >
              <AssetIcon className="h-10 w-10" name={opt.icon} />
              <span className="block text-[11px] leading-none font-black tracking-wide">
                {opt.label}
              </span>

              {isSelected && (
                <div
                  className="animate-fade-in absolute top-0 right-0 flex h-3.5 w-3.5
                    items-center justify-center rounded-full border border-white bg-amber-600
                    font-sans text-[8px] font-black text-white shadow-xs"
                >
                  ✓
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
