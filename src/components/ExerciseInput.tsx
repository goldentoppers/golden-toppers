import { useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
import type { ActivityLevel } from "../types/nutrition";

export const ExerciseInput = () => {
  const context = useContext(GlobalControlOptionsContext);

  const [localActivity, setLocalActivity] = useState<ActivityLevel>("moderate");

  const hasContext = !!context;
  const currentActivity = hasContext ? context.formData.activity : localActivity;

  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [coords, setCoords] = useState({ top: 0, left: 0, width: 240 });

  const options: { value: ActivityLevel; label: string }[] = [
    { value: "low", label: "Low" },
    { value: "moderate", label: "Moderate" },
    { value: "high", label: "High" },
  ];

  const currentLabel = options.find((o) => o.value === currentActivity)?.label ?? "Moderate";

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.bottom + window.scrollY + 6,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (triggerRef.current && triggerRef.current.contains(event.target as Node)) {
        return;
      }

      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        const portalClick = (event.target as HTMLElement).closest("[data-dropdown-portal]");
        if (!portalClick) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOptionSelect = (e: React.MouseEvent, value: ActivityLevel) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasContext) {
      context.setFormData((p) => ({
        ...p,
        activity: value,
      }));
    } else {
      setLocalActivity(value);
    }

    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative flex w-full flex-col items-start font-sans select-none"
    >
      <label
        htmlFor="canine-exercise-trigger"
        className="mb-2 text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase
          transition-colors duration-200 group-hover:text-stone-950"
      >
        Exercise Level
      </label>

      <button
        id="canine-exercise-trigger"
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-50 cursor-pointer items-center justify-between rounded-full border
          border-white/40 bg-white/40 px-5 py-2.5 text-sm font-semibold text-stone-800 shadow-sm
          backdrop-blur-md transition-all duration-300 outline-none hover:border-stone-300/80
          hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-stone-400"
      >
        <span className="font-medium text-stone-700/90">{currentLabel}</span>

        <div
          className="flex items-center gap-2 border-l border-stone-400/40 pl-3 font-bold
            text-stone-900"
        >
          <span>Level</span>
          <svg
            className={`h-3 w-3 text-stone-600 transition-transform duration-300
              ${isOpen ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>

      {isOpen &&
        createPortal(
          <ul
            role="listbox"
            data-dropdown-portal
            aria-label="Exercise Level Options"
            style={{
              position: "absolute",
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              width: `${coords.width}px`,
            }}
            className="scrollbar-thin scrollbar-thumb-stone-200 pointer-events-auto fixed z-50 m-0
              max-h-48 list-none overflow-y-auto overscroll-contain rounded-2xl border
              border-stone-200/80 bg-white p-1.5 shadow-xl"
          >
            {options.map((opt) => {
              const isSelected = currentActivity === opt.value;
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseDown={(e) => handleOptionSelect(e, opt.value)}
                  className={`relative block w-full cursor-pointer rounded-xl px-4 py-2 text-left
                  text-sm font-medium transition-all duration-150 ${
                    isSelected
                      ? "bg-stone-950/10 font-bold text-stone-950"
                      : `text-stone-600 hover:bg-stone-50 hover:text-stone-950
                        active:bg-stone-950/10`
                  } `}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>,
          document.body,
        )}
    </div>
  );
};

// import { useContext, useState } from "react";
// import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";
// import type { ActivityLevel } from "../types/nutrition";
// import { AssetIcon } from "./AssetIcon";

// export const ExerciseInput = () => {
//   const context = useContext(GlobalControlOptionsContext);

//   const [localActivity, setLocalActivity] = useState<ActivityLevel>("moderate");

//   const hasContext = !!context;
//   const currentActivity = hasContext ? context.formData.activity : localActivity;

//   const options: { value: ActivityLevel; label: string; icon: string }[] = [
//     { value: "low", label: "Low", icon: "sleeping" },
//     { value: "moderate", label: "Med", icon: "standing" },
//     { value: "high", label: "High", icon: "running-dog" },
//   ];

//   const handleSelect = (value: ActivityLevel) => {
//     if (hasContext) {
//       context.setFormData((p) => ({
//         ...p,
//         activity: value,
//       }));
//     } else {
//       setLocalActivity(value);
//     }
//   };

//   return (
//     <div className="animate-fade-in relative flex w-full flex-col items-start font-sans select-none">
//       <span className="mb-4 text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase">
//         Activity Level
//       </span>

//       <div className="flex w-full flex-row items-center justify-start gap-4 sm:gap-6">
//         {options.map((opt) => {
//           const isSelected = currentActivity === opt.value;

//           return (
//             <button
//               key={opt.value}
//               type="button"
//               onClick={() => handleSelect(opt.value)}
//               aria-pressed={isSelected}
//               className={`relative flex aspect-square h-20 w-20 cursor-pointer flex-col items-center
//               justify-center rounded-full border p-2 text-center transition-all duration-150
//               outline-none sm:h-22 sm:w-22 ${
//                 !isSelected
//                   ? `border-stone-400/20 bg-[#faf7f2] text-stone-400
//                     shadow-[0_4px_12px_rgba(28,25,23,0.02)] hover:-translate-y-0.5
//                     hover:border-stone-400 hover:bg-white`
//                   : `scale-[0.96] border-amber-600 bg-amber-600/[0.05] font-black text-stone-900
//                     shadow-[inset_0_4px_10px_rgba(28,25,23,0.08)]`
//               }`}
//             >
//               <AssetIcon className="h-14 w-14" name={opt.icon} />
//               <span className="block text-[12px] leading-none font-black tracking-wide">
//                 {opt.label}
//               </span>

//               {isSelected && (
//                 <div
//                   className="animate-fade-in absolute -top-0.5 -right-0.5 flex h-4.5 w-4.5
//                     items-center justify-center rounded-full border-2 border-white bg-amber-600
//                     font-sans text-[8px] font-black text-white shadow-xs"
//                 >
//                   ✓
//                 </div>
//               )}
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
