import React from "react";

interface ShowAllButtonProps {
  isExpanded: boolean;
  setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  numberOfItems: number;
}

export const ShowAllButton: React.FC<ShowAllButtonProps> = ({
  isExpanded,
  setIsExpanded,
  numberOfItems,
}) => {
  return (
    <div className="animate-fade-in mt-10 flex w-full items-center justify-center select-none">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="group shadow-3xs flex cursor-pointer flex-row items-center justify-center gap-2
          rounded-full border border-amber-700/50 bg-white/60 px-5 py-2 font-sans text-[11px]
          font-black tracking-widest text-amber-700 uppercase transition-all duration-150
          outline-none hover:scale-[1.02] hover:bg-white hover:shadow-2xs focus-visible:ring-2
          focus-visible:ring-stone-500 active:scale-95"
      >
        {isExpanded ? "Show Less" : `Show All (${numberOfItems})`}

        <svg
          className={`h-3 w-3 stroke-current stroke-[3.5] transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  );
};
