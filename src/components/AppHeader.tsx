import { Link } from "react-router-dom";

export const AppHeader = () => {
  return (
    <header className="relative flex w-full flex-col items-start select-none py-8" role="banner">
      <Link
        to="/"
        aria-label="Golden Toppers home"
        className="mx-auto flex w-full max-w-4xl flex-col items-start rounded-lg outline-none focus-visible:ring-2
          focus-visible:ring-white focus-visible:ring-offset-2"
      >
        <h1 className="font-serif text-5xl italic tracking-tight text-white drop-shadow-xl lg:text-6xl leading-[0.85]">
          Golden Toppers
        </h1>

        <span className="pl-2 mt-2 block font-sans text-[11px] font-black uppercase tracking-[0.26em] text-stone-800 drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
          Whole Food Bowl Enrichment
        </span>
      </Link>
    </header>
  );
};
