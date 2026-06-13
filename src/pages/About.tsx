import React from "react";
import { Link } from "react-router-dom";
import kitchenHero from "../assets/hero-woman-and-dog-in-kitchen.jpg";

export const About: React.FC = () => {
  return (
    <section
      className="mx-auto w-full max-w-4xl px-4 pb-16 text-left font-sans select-none"
      aria-labelledby="about-philosophy-title"
    >
      <header className="mb-4 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] md:pt-24">
        <span
          className="block text-[9.5px] leading-none font-black tracking-[0.25em] text-amber-700
            uppercase"
        >
          The 10% Topper Philosophy
        </span>
        <h2
          id="about-philosophy-title"
          className="mt-3 font-serif text-3xl leading-tight font-black tracking-wide text-stone-900
            italic"
        >
          Enriching the daily bowl, safely.
        </h2>
      </header>

      <div
        className="max-w-2xl space-y-4 pb-6 font-serif text-[14.5px] leading-relaxed font-medium
          text-stone-700/95 italic select-text sm:text-[16px]"
      >
        {/* PARAGRAPH 1: THE CORE CONTEXT HOOK */}
        <p>
          We love our Golden Retrievers unconditionally, but navigating the world of canine
          nutrition can feel overwhelming. While formulating a 100% raw or home-cooked diet carries
          complex mineral balancing risks, introducing fresh, living whole foods as an intentional
          supplemental mix-in is a simple, low-risk way to enhance their bowl.
        </p>

        {/* PARAGRAPH 2: THE PRACTICAL APP SOLUTION */}
        <p>
          This tool was built to bridge that exact gap—giving you a beautiful, practical canvas to
          safely diversify your dog's daily bowl with vital nutrients and antioxidants, without
          unbalancing their core commercial diet.
        </p>
      </div>

      <div
        className="animate-fade-in pointer-events-none relative h-100 w-full overflow-hidden
          rounded-4xl border border-stone-900/4 border-b-white/60 bg-stone-900/2 opacity-90
          shadow-[0_4px_24px_rgba(28,25,23,0.02)] select-none print:hidden"
      >
        <img
          src={kitchenHero}
          alt="Woman in kitchen preparing wholesome food for her golden retriever"
          decoding="async"
          loading="lazy"
          className="h-full w-full object-cover object-[center_35%] transition-opacity duration-300"
        />

        <div
          className="absolute inset-0 h-full w-full bg-linear-to-t from-stone-950/5 via-transparent
            to-transparent mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div
        className="grid grid-cols-1 gap-x-12 gap-y-10 py-8
          drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] md:grid-cols-2"
      >
        {/* COLUMN 1: THE NUTRITIONAL POWER */}
        <article className="flex flex-col items-start justify-start">
          <h3
            className="w-full border-b-2 border-stone-900/10 pb-2 text-[11px] font-black
              tracking-[0.2em] text-stone-900 uppercase"
          >
            01. Fresh Food Power
          </h3>
          <p
            className="mt-4 text-[13px] leading-relaxed font-medium text-stone-600 select-text
              md:text-[14px]"
          >
            Formulating full meals carries deficiency risks without a specialist. Swapping just 10%
            of standard kibble with living, whole ingredients is a simple, low-risk way to introduce
            powerful real-food nutrition:
          </p>

          <ul
            className="mt-5 space-y-3.5 pl-0.5 text-[10px] font-black tracking-[0.16em]
              text-stone-800 uppercase"
          >
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Living food hydration</span>
            </li>
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Vital active antioxidants</span>
            </li>
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Metabolic phytonutrients</span>
            </li>
          </ul>
        </article>

        {/* COLUMN 2: THE BALANCED GROUPS */}
        <article className="flex flex-col items-start justify-start">
          <h3
            className="w-full border-b-2 border-stone-900/10 pb-2 text-[11px] font-black
              tracking-[0.2em] text-stone-900 uppercase"
          >
            02. The 10% Ceiling Guard
          </h3>
          <p
            className="mt-4 text-[13px] leading-relaxed font-medium text-stone-600 select-text
              md:text-[14px]"
          >
            Our calculation engine acts as a strict guardrail to keep fresh additions inside a safe
            caloric envelope, tracking your dynamic portion sizes across five distinct groups:
          </p>

          <ul
            className="mt-5 space-y-3.5 pl-0.5 text-[10px] font-black tracking-[0.16em]
              text-stone-800 uppercase"
          >
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Main Protein Tiers</span>
            </li>
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Wholesome Hearty Bases</span>
            </li>
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Fresh Colors</span>
            </li>
            <li className="flex flex-row items-center justify-start gap-3">
              <div
                className="shadow-4xs h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70"
                aria-hidden="true"
              />
              <span className="leading-none">Superfood Boosters & Toppers</span>
            </li>
          </ul>
        </article>
      </div>

      <footer
        className="flex flex-col items-center justify-center gap-4 border-t border-stone-200/60 pt-6
          sm:flex-row sm:justify-between"
      >
        <div className="font-mono text-[10px] text-stone-400">
          Golden Toppers Studio © {new Date().getFullYear()}
        </div>
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex flex-row items-center rounded-xl bg-amber-700 px-8 py-2.5 font-sans
            text-[11px] font-black tracking-widest text-white uppercase shadow-2xs transition-all
            duration-200 outline-none hover:scale-[1.02] hover:brightness-105 focus-visible:ring-2
            focus-visible:ring-stone-500 focus-visible:ring-offset-1 active:scale-[0.97]"
        >
          Build Topper Recipe
          <svg
            className="stroke-currentColor h-4 w-4 transition-transform duration-200
              group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      </footer>
    </section>
  );
};
