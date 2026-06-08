import { DesktopNav } from "./DesktopNav";

export const AppHeader = () => {
  return (
    <div className="relative flex flex-col gap-4">
      <header className="flex w-full flex-row items-start justify-between" role="banner">
        <div className="flex flex-col">
          <h1
            className="font-serif text-5xl leading-none tracking-tight text-white italic
              drop-shadow-lg lg:text-6xl"
          >
            Golden Toppers
          </h1>
          <span
            className="mt-1.5 ml-2 block font-sans text-[10.5px] leading-none font-black
              tracking-[0.26em] text-stone-700/95 uppercase
              drop-shadow-[0_1.5px_4px_rgba(255,255,255,0.95)] select-none"
          >
            Wholefood Bowl Enrichment
          </span>
        </div>

        <DesktopNav />
      </header>
    </div>
  );
};
