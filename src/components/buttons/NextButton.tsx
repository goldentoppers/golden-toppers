export const NextButton = ({ onNext, color }: { onNext: () => void; color: string }) => {
  return (
    <button
      type="button"
      onClick={onNext}
      style={{ backgroundColor: color }}
      className="flex cursor-pointer flex-row items-center justify-center gap-1.5 rounded-xl border
        border-transparent px-6 py-2.5 font-sans text-[11px] font-black tracking-widest text-white
        uppercase shadow-2xs transition-all duration-200 outline-none hover:scale-[1.02]
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
  );
};
