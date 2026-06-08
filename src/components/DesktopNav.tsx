import { NavLink } from "react-router-dom";

export const DesktopNav = () => {
  return (
    /* 1. SEMANTIC LANDMARK: Explicitly declares this upper block as the main header link region */
    <nav aria-label="Main Desktop Navigation" className="hidden md:block">
      <ul
        className="m-0 flex w-full list-none gap-2 rounded-full border border-stone-900/[0.03]
          border-b-white/40 bg-stone-900/[0.04] p-1.5
          shadow-[inset_0_2px_6px_rgba(28,25,23,0.12),_inset_0_1px_2px_rgba(28,25,23,0.08)]
          backdrop-blur-md"
      >
        {/* --- TAB 1: BUILD KITCHEN ROUTE --- */}
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `inline-block rounded-full px-4 py-2 text-[10px] font-black tracking-[0.25em]
              uppercase transition-all outline-none focus-visible:ring-2
              focus-visible:ring-stone-400 focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-white text-stone-950 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              } `
            }
          >
            Build
          </NavLink>
        </li>

        {/* --- TAB 2: ABOUT MANIFESTO ROUTE --- */}
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `inline-block rounded-full px-4 py-2 text-[10px] font-black tracking-[0.25em]
              uppercase transition-all outline-none focus-visible:ring-2
              focus-visible:ring-stone-400 focus-visible:ring-offset-2 ${
                isActive
                  ? "bg-white text-stone-950 shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              } `
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
