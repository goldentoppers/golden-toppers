import { NavLink, useLocation } from "react-router-dom";
import {
  BookOpenIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { AMBER_600, AMBER_700 } from "../data/color-scheme";

export const DesktopNav = () => {
  const currentPath = useLocation().pathname;

  return (
    <nav
      aria-label="Desktop View Selection"
      className="mx-auto hidden w-full max-w-4xl items-center gap-3 md:inline-flex"
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          `group/tab order-1 relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
            text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-200 ease-out
            outline-none select-none focus-visible:ring-2 focus-visible:ring-amber-700
            focus-visible:ring-offset-2 ${isActive
            ? "bg-white text-stone-900 shadow-[0_2px_6px_rgba(28,25,23,0.06)]"
            : "bg-white/40 text-stone-600 hover:-translate-y-0.5 hover:bg-white/50"
          }`
        }
      >
        <WrenchScrewdriverIcon
          style={{ color: currentPath === "/" ? AMBER_700 : "#57534e" }}
          className={`h-4 w-4 transition-transform duration-200 ${currentPath === "/" ? "" : "group-hover/tab:scale-110"
            }`}
          aria-hidden="true"
        />
        <span>Build</span>
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `group/tab order-4 relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
            text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-200 ease-out
            outline-none select-none focus-visible:ring-2 focus-visible:ring-amber-700
            focus-visible:ring-offset-2 ${isActive
            ? "bg-white text-stone-900 shadow-[0_2px_6px_rgba(28,25,23,0.06)]"
            : "bg-white/40 text-stone-600 hover:-translate-y-0.5 hover:bg-white/50"
          }`
        }
      >
        <InformationCircleIcon
          style={{ color: currentPath === "/about" ? AMBER_600 : "#57534e" }}
          className={`h-4 w-4 transition-transform duration-200 ${currentPath === "/about" ? "" : "group-hover/tab:scale-110"
            }`}
          aria-hidden="true"
        />
        <span>About</span>
      </NavLink>

      <NavLink
        to="/ingredients"
        className={({ isActive }) =>
          `group/tab order-2 relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
            text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-200 ease-out
            outline-none select-none focus-visible:ring-2 focus-visible:ring-amber-700
            focus-visible:ring-offset-2 ${isActive
            ? "bg-white text-stone-900 shadow-[0_2px_6px_rgba(28,25,23,0.06)]"
            : "bg-white/40 text-stone-600 hover:-translate-y-0.5 hover:bg-white/50"
          }`
        }
      >
        <MagnifyingGlassIcon
          style={{ color: currentPath === "/ingredients" ? AMBER_700 : "#57534e" }}
          className={`h-4 w-4 transition-transform duration-200 ${currentPath === "/ingredients" ? "" : "group-hover/tab:scale-110"
            }`}
          aria-hidden="true"
        />
        <span>Explore</span>
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          `group/tab order-3 relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3
            text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-200 ease-out
            outline-none select-none focus-visible:ring-2 focus-visible:ring-amber-700
            focus-visible:ring-offset-2 ${isActive
            ? "bg-white text-stone-900 shadow-[0_2px_6px_rgba(28,25,23,0.06)]"
            : "bg-white/40 text-stone-600 hover:-translate-y-0.5 hover:bg-white/50"
          }`
        }
      >
        <BookOpenIcon
          style={{ color: currentPath === "/recipes" ? AMBER_700 : "#57534e" }}
          className={`h-4 w-4 transition-transform duration-200 ${currentPath === "/recipes" ? "" : "group-hover/tab:scale-110"}`}
          aria-hidden="true"
        />
        <span>Recipes</span>
      </NavLink>
    </nav>
  );
};
