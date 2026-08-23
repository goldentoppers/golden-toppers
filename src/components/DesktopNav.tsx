import { NavLink } from "react-router-dom";

export const DesktopNav = () => {
  return (
    <nav
      aria-label="Desktop View Selection"
      className="inline-flex items-center gap-3"
    >
      {/* --- SELECTION PILL 1: BUILD --- */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `rounded-lg px-6 py-3 text-[11px] font-black tracking-[0.2em] uppercase 
            transition-all duration-200 ease-out outline-none select-none ${isActive
            ? "bg-white text-stone-900 shadow-[0_2px_6px_rgba(28,25,23,0.06)] font-black"
            : "text-stone-500 text-stone-800 bg-white/30"
          }`
        }
      >
        Build
      </NavLink>

      {/* --- SELECTION PILL 2: ABOUT --- */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `rounded-lg px-6 py-3 text-[11px] font-black tracking-[0.2em] uppercase 
            transition-all duration-200 ease-out outline-none select-none ${isActive
            ? "bg-white text-stone-900 shadow-[0_2px_6px_rgba(28,25,23,0.06)] font-black"
            : "text-stone-500 text-stone-800 bg-white/30"
          }`
        }
      >
        About
      </NavLink>
    </nav>
  );
};
