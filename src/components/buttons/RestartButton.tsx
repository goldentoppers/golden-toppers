import { ArrowPathIcon } from "@heroicons/react/24/solid";

export const RestartButton = ({ onRestart }: { onRestart: () => void }) => {
  return (
    <button
      type="button"
      onClick={onRestart}
      className="xs:w-auto flex w-full cursor-pointer flex-row items-center justify-center gap-2
        rounded-xl border border-transparent bg-amber-700 px-6 py-2.5 font-sans text-[11px]
        font-black tracking-widest text-white uppercase shadow-2xs transition-all duration-200
        outline-none hover:scale-[1.02] hover:brightness-105 focus-visible:ring-2
        focus-visible:ring-stone-500 active:scale-95"
    >
      Restart
      <ArrowPathIcon
        className={`pointer-events-none h-5 w-5 transition-transform duration-300 select-none
          group-hover/item:rotate-90`}
        aria-hidden="true"
      />
    </button>
  );
};
