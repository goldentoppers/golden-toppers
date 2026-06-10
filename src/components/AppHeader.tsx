import { DesktopNav } from "./DesktopNav";

export const AppHeader = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <header className="flex w-full flex-row items-start justify-between" role="banner">
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 sm:flex-row">
            <h1
              className="font-serif text-5xl leading-none tracking-tight text-white italic
                drop-shadow-lg lg:text-6xl"
            >
              Golden
            </h1>
            <h1
              className="font-serif text-5xl leading-none tracking-tight text-white italic
                drop-shadow-lg lg:text-6xl"
            >
              Toppers
            </h1>
          </div>
          <span
            className="mt-3 ml-2 block font-sans text-[10.5px] leading-none font-black
              tracking-[0.26em] text-stone-700/95 uppercase
              drop-shadow-[0_1.5px_4px_rgba(255,255,255,0.95)] select-none sm:mt-1.5"
          >
            Whole food Bowl Enrichment
          </span>
        </div>

        <DesktopNav />
      </header>
    </div>
  );
};
