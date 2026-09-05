import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  BookOpenIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid";
import { AMBER_600, AMBER_700 } from "../data/color-scheme";

export const MobileNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const activeBackingTint = `${AMBER_600}2E`;

  return (
    <nav
      aria-label="Primary Mobile View Switching"
      className="animate-fade-in fixed right-0 bottom-0 left-0 z-50 mx-auto flex h-20 max-w-full
        items-center justify-evenly border border-white/40 bg-white/70 p-1.5
        shadow-[0_8px_24px_rgba(28,25,23,0.1),0_2px_6px_rgba(28,25,23,0.04)] backdrop-blur-xl
        select-none print:hidden"
    >
      {/* ========================================================= */}
      {/* 🟢 TAB 1: THE INTERACTIVE BUILD RECIPE ROUTE               */}
      {/* ========================================================= */}
      <button
        type="button"
        onClick={() => {
          navigate("/");
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        aria-current={currentPath === "/" ? "page" : undefined}
        role="tab"
        style={{
          backgroundColor: currentPath === "/" ? activeBackingTint : "transparent",
          color: currentPath === "/" ? AMBER_700 : "#57534e",
        }}
        className="group/tab relative flex h-full flex-1 cursor-pointer flex-col items-center
          justify-center overflow-hidden rounded-xl shadow-none outline-none
          aria-[current=page]:shadow-[0_3px_10px_rgba(120,53,15,0.18)]"
      >
        <div
          className="relative z-10 flex h-full w-full flex-col items-center justify-center pb-1.5
            leading-none select-none"
        >
          <WrenchScrewdriverIcon
            style={{ color: currentPath === "/" ? AMBER_700 : "#57534e" }}
            className={`h-5 w-5 stroke-[2.5] ${currentPath === "/" ? "scale-105 opacity-100" : "opacity-75 group-hover/tab:scale-105"
              }`}
          />

          <span
            className={`mt-1.5 text-[9.5px] font-black tracking-[0.2em] uppercase transition-colors
              duration-300
              ${currentPath === "/" ? "text-stone-900" : "font-bold text-stone-600 group-hover/tab:text-stone-800"}`}
          >
            Build
          </span>

        </div>
      </button>

      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/ingredients");
        }}
        aria-current={currentPath === "/ingredients" ? "page" : undefined}
        role="tab"
        style={{
          backgroundColor: currentPath === "/ingredients" ? activeBackingTint : "transparent",
          color: currentPath === "/ingredients" ? AMBER_700 : "#57534e",
        }}
        className="group/tab relative flex h-full flex-1 cursor-pointer flex-col items-center
          justify-center overflow-hidden rounded-xl shadow-none outline-none
          aria-[current=page]:shadow-[0_3px_10px_rgba(120,53,15,0.18)]"
      >
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center pb-1.5 leading-none select-none">
          <MagnifyingGlassIcon
            className={`h-5 w-5 stroke-[2.5] ${currentPath === "/ingredients"
              ? "scale-105 opacity-100"
              : "opacity-75 group-hover/tab:scale-105"
              }`}
          />
          <span
            className={`mt-1.5 text-[9.5px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${currentPath === "/ingredients"
              ? "text-stone-900"
              : "font-bold text-stone-600 group-hover/tab:text-stone-800"
              }`}
          >
            Explore
          </span>
        </div>
      </button>

      <button
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          navigate("/recipes");
        }}
        aria-current={currentPath === "/recipes" ? "page" : undefined}
        role="tab"
        style={{
          backgroundColor: currentPath === "/recipes" ? activeBackingTint : "transparent",
          color: currentPath === "/recipes" ? AMBER_700 : "#57534e",
        }}
        className="group/tab relative flex h-full flex-1 cursor-pointer flex-col items-center
          justify-center overflow-hidden rounded-xl shadow-none outline-none
          aria-[current=page]:shadow-[0_3px_10px_rgba(120,53,15,0.18)]"
      >
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center pb-1.5 leading-none select-none">
          <BookOpenIcon
            className={`h-5 w-5 stroke-[2.5] ${currentPath === "/recipes"
              ? "scale-105 opacity-100"
              : "opacity-75 group-hover/tab:scale-105"
              }`}
          />
          <span
            className={`mt-1.5 text-[9.5px] font-black tracking-[0.2em] uppercase transition-colors duration-300 ${currentPath === "/recipes"
              ? "text-stone-900"
              : "font-bold text-stone-600 group-hover/tab:text-stone-800"
              }`}
          >
            Recipes
          </span>
        </div>
      </button>

      {/* ========================================================= */}
      {/* ⚙️ TAB 2: THE INTERACTIVE ABOUT GUIDANCE ROUTE              */}
      {/* ========================================================= */}
      <button
        type="button"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
          navigate("/about");
        }}
        aria-current={currentPath === "/about" ? "page" : undefined}
        role="tab"
        style={{
          backgroundColor: currentPath === "/about" ? activeBackingTint : "transparent",
          color: currentPath === "/about" ? AMBER_700 : "#57534e",
        }}
        className="group/tab relative flex h-full flex-1 cursor-pointer flex-col items-center
          justify-center overflow-hidden rounded-xl shadow-none outline-none
          aria-[current=page]:shadow-[0_3px_10px_rgba(120,53,15,0.18)]"
      >
        <div
          className="relative z-10 flex h-full w-full flex-col items-center justify-center pb-1.5
            leading-none select-none"
        >
          <InformationCircleIcon
            style={{ color: currentPath === "/about" ? AMBER_700 : "#57534e" }}
            className={`h-5 w-5 stroke-[2.5] ${currentPath === "/about"
              ? "scale-105 opacity-100"
              : "opacity-75 group-hover/tab:scale-105"
              }`}
          />

          <span
            className={`mt-1.5 text-[9.5px] font-black tracking-[0.2em] uppercase transition-colors
              duration-300 ${currentPath === "/about"
                ? "text-stone-900"
                : "font-bold text-stone-600 group-hover/tab:text-stone-800"
              }`}
          >
            About
          </span>

        </div>
      </button>
    </nav>
  );
};
