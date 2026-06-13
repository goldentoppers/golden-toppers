import { useContext, useState } from "react";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import type { ActivityLevel } from "../types/nutrition";
import { AssetIcon } from "./AssetIcon";
import { AMBER_700 } from "../data/color-scheme";

export const ExerciseInput = () => {
  const context = useContext(GlobalControlOptionsContext);

  const [localActivity, setLocalActivity] = useState<ActivityLevel>("moderate");

  const hasContext = !!context;
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
    <div className="animate-fade-in relative flex w-full flex-col font-sans select-none">
      <span className="mb-2 text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase">
        Activity Level
      </span>

      <div className="flex w-full flex-row items-center justify-start gap-4 sm:gap-6">
        {options.map((opt) => {
          const isSelected = currentActivity === opt.value;

          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => handleSelect(opt.value)}
              aria-pressed={isSelected}
              style={{
                borderWidth: isSelected ? "2px" : "1px",
                borderColor: isSelected ? AMBER_700 : "rgba(120, 113, 108)",
                backgroundColor: isSelected ? `${AMBER_700}1A` : "#faf7f2",
                color: isSelected ? AMBER_700 : "#44403b",
              }}
              className={`relative flex aspect-square h-20 w-20 cursor-pointer flex-col items-center
              justify-center rounded-full border p-2 text-center transition-all duration-150
              outline-none sm:h-22 sm:w-22 ${
                !isSelected
                  ? `border-stone-400 bg-[#faf7f2] text-stone-400
                    shadow-[0_4px_12px_rgba(28,25,23,0.02)] hover:-translate-y-0.5
                    hover:border-stone-400 hover:bg-white`
                  : `scale-[0.96] border-amber-600 bg-amber-600/[0.05] font-black text-stone-900
                    shadow-[inset_0_4px_10px_rgba(28,25,23,0.08)]`
              }`}
            >
              <AssetIcon className="h-14 w-14" name={opt.icon} />
              <span className="block text-[12px] leading-none font-black tracking-wide">
                {opt.label}
              </span>

              {isSelected && (
                <div
                  className="animate-fade-in absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5
                    items-center justify-center rounded-full border-2 border-white bg-amber-600
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
