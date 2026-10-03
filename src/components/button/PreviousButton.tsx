export interface PreviousButtonProps {
  onPrevious: () => void;
  color: string;
  borderColor: string;
  disabled?: boolean;
}

export const PreviousButton = ({
  onPrevious,
  color,
  borderColor,
  disabled = false,
}: PreviousButtonProps) => {
  return (
    <button
      type="button"
      onClick={onPrevious}
      style={{
        borderColor,
        color,
      }}
      disabled={disabled}
      className="shadow-3xs xs:w-auto flex w-full cursor-pointer flex-row items-center
        justify-center gap-1.5 rounded-xl border bg-white/40 px-5 py-2.5 font-sans text-[11px]
        font-black tracking-widest uppercase transition-all duration-200 outline-none
        hover:scale-[1.01] hover:bg-white focus-visible:ring-2 focus-visible:ring-stone-500
        focus-visible:ring-offset-1 active:scale-95 disabled:pointer-events-none
        disabled:cursor-not-allowed disabled:opacity-20"
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
  );
};
