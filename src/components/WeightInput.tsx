import { useContext, useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { GlobalControlOptionsContext } from "../contexts/GlobalControlOptionsContext";

export const WeightInput = () => {
  const context = useContext(GlobalControlOptionsContext);

  const formData = context?.formData ?? { weight: 65 };
  const setFormData = context?.setFormData ?? (() => {});

  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Layout coordinate state to track button location
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 220 });

  const weightOptions = Array.from({ length: 9 }, (_, i) => 50 + i * 5);

  // Recalculate precisely where the button is on the screen when opened
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
        const portalClick = (event.target as HTMLElement).closest("[data-weight-portal]");
        if (!portalClick) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleOptionSelect = (e: React.MouseEvent, value: number) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData((p) => ({ ...p, weight: value }));
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
        Weight
      </label>

      <button
        id="canine-weight-trigger"
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-35 cursor-pointer items-center justify-between rounded-full border
          border-white/40 bg-white/40 px-5 py-2.5 text-sm font-semibold text-stone-800 shadow-sm
          backdrop-blur-md transition-all duration-300 outline-none hover:border-stone-300/80
          hover:bg-white/60 focus-visible:ring-2 focus-visible:ring-stone-400"
      >
        <span className="font-medium text-stone-700/90">
          {formData.weight ? `${formData.weight}` : "Select Weight"}
        </span>

        <div
          className="flex items-center gap-2 border-l border-stone-400/40 pl-3 font-bold
            text-stone-900"
        >
          <span>lbs</span>
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
            data-weight-portal
            aria-label="Weight Options"
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
            {weightOptions.map((wt) => {
              const isSelected = formData.weight === wt;
              return (
                <li
                  key={wt}
                  role="option"
                  aria-selected={isSelected}
                  // ✅ Fixes click fighting issues perfectly
                  onMouseDown={(e) => handleOptionSelect(e, wt)}
                  className={`block w-full cursor-pointer rounded-xl px-4 py-2 text-left text-sm
                  font-medium transition-colors duration-150 ${
                    isSelected
                      ? "bg-stone-950/10 font-bold text-stone-950"
                      : "text-stone-600 hover:bg-stone-900/5 hover:text-stone-900"
                  } `}
                >
                  {wt} lbs
                </li>
              );
            })}
          </ul>,
          document.body, // ✅ Mounts directly onto the HTML body to float over all components
        )}
    </div>
  );
};
