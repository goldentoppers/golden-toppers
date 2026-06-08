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

  // Set initial width parameters to cleanly fit the capsule layout format
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
        width: rect.width, // Explicitly locks options menu width directly to the capsule bar shape
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
      className="relative flex w-full max-w-md flex-col items-start font-sans select-none"
    >
      {/* 1. HIGH-CONTRAST EDITORIAL TRACKED LABEL */}
      <label
        htmlFor="canine-exercise-trigger"
        className="mb-2 text-[10px] font-black tracking-[0.25em] text-stone-800 uppercase
          transition-colors duration-200 group-hover:text-stone-950"
      >
        Exercise Level
      </label>

      {/* 2. CAPSULE DROPDOWN TRIGGER BAR */}
      <button
        id="canine-exercise-trigger"
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between rounded-full border
          border-white/40 bg-white/40 px-5 py-2.5 text-sm font-semibold text-stone-800 shadow-sm
          backdrop-blur-md transition-all duration-300 outline-none hover:border-stone-300/80
          hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-stone-400"
      >
        {/* Active choice phrasing display layout */}
        <span className="font-medium text-stone-700/90">{currentLabel}</span>

        {/* Right flag style trailing divider layout */}
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

      {/* 3. CAPSULE ALIGNED FLOATING LIST PANEL */}
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
