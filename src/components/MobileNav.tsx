import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { WrenchScrewdriverIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import { AMBER_600, AMBER_700 } from "../data/color-scheme";

export const MobileNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const activeBackingTint = `${AMBER_600}14`;

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
        // style={{
        //   backgroundColor: currentPath === "/" ? activeBackingTint : "transparent",
        //   color: currentPath === "/" ? AMBER_700 : "#57534e",
        // }}
        className="group/tab relative flex h-full flex-1 cursor-pointer flex-col items-center
          justify-center overflow-hidden rounded-xl outline-none"
      >
        <div
          className="relative z-10 flex h-full w-full flex-col items-center justify-center pb-1.5
            leading-none select-none"
        >
          <WrenchScrewdriverIcon
            style={{ color: currentPath === "/" ? AMBER_700 : "#57534e" }}
            className={`h-5 w-5 stroke-[2.5] ${
              currentPath === "/" ? "scale-105 opacity-100" : "opacity-75 group-hover/tab:scale-105"
              }`}
          />

          <span
            className={`mt-1.5 text-[9.5px] font-black tracking-[0.2em] uppercase transition-colors
              duration-300
              ${currentPath === "/" ? "text-stone-900" : "font-bold text-stone-600 group-hover/tab:text-stone-800"}`}
          >
            Build
          </span>

          {currentPath === "/" && (
            <div
              className="animate-fade-in shadow-4xs absolute bottom-2 h-0.5 w-4 rounded-full
                bg-amber-700"
              aria-hidden="true"
            />
          )}
        </div>
      </button>

      {/* 🔘 VERTICAL FINE LINE COMPONENT SEPARATOR */}
      <div className="pointer-events-none h-10 w-px shrink-0 bg-stone-800/20" aria-hidden="true" />

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
          justify-center overflow-hidden rounded-xl outline-none"
      >
        <div
          className="relative z-10 flex h-full w-full flex-col items-center justify-center pb-1.5
            leading-none select-none"
        >
          <InformationCircleIcon
            style={{ color: currentPath === "/about" ? AMBER_700 : "#57534e" }}
            className={`h-5 w-5 stroke-[2.5] ${
              currentPath === "/about"
                ? "scale-105 opacity-100"
                : "opacity-75 group-hover/tab:scale-105"
              }`}
          />

          <span
            className={`mt-1.5 text-[9.5px] font-black tracking-[0.2em] uppercase transition-colors
              duration-300 ${
                currentPath === "/about"
                  ? "text-stone-900"
                  : "font-bold text-stone-600 group-hover/tab:text-stone-800"
              }`}
          >
            About
          </span>

          {currentPath === "/about" && (
            <div
              className="animate-fade-in shadow-4xs absolute bottom-2 h-0.5 w-4 rounded-full
                bg-amber-600"
              aria-hidden="true"
            />
          )}
        </div>
      </button>
    </nav>
  );
};
