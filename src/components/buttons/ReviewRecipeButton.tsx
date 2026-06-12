import { BookOpenIcon } from "@heroicons/react/24/solid";

export interface ReviewRecipeButtonProps {
  onReview: () => void;
  color: string;
}

export const ReviewRecipeButton = ({ onReview, color }: ReviewRecipeButtonProps) => {
  return (
    <button
      type="button"
      onClick={onReview}
      style={{ backgroundColor: color }}
      className="flex cursor-pointer flex-row items-center justify-center gap-1.5 rounded-xl border
        border-transparent px-6 py-2.5 font-sans text-[11px] font-black tracking-widest text-white
        uppercase shadow-2xs transition-all duration-200 outline-none hover:scale-[1.02]
        hover:brightness-105 focus-visible:ring-2 focus-visible:ring-stone-500
        focus-visible:ring-offset-1 active:scale-95 disabled:pointer-events-none
        disabled:cursor-not-allowed disabled:opacity-25"
    >
      Review Recipe
      <BookOpenIcon
        className={`pointer-events-none h-5 w-5 transition-transform duration-300 select-none
          group-hover/item:rotate-90`}
        aria-hidden="true"
      />
    </button>
  );
};
