import React from "react";
import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";
import kitchenHero from "../assets/hero-woman-and-dog-in-kitchen.jpg";
import { PageHeading } from "../components/PageHeading";

export const About: React.FC = () => {
  const buyMeACoffeeUrl = import.meta.env.VITE_BUY_ME_A_COFFEE_URL?.trim();

  return (<>
    <PageHeading
      title="Enriching the daily bowl, safely."
      subtitle="The 10% Topper Philosophy"
      align="left"
      // adSlot="about-page-header"
      details={
        () => (<>
          <p>
            We love our Golden Retrievers unconditionally, but navigating the world of canine
            nutrition can feel overwhelming. While formulating a 100% raw or home-cooked diet carries
            complex mineral balancing risks, introducing fresh, living whole foods as an intentional
            supplemental mix-in is a simple, low-risk way to enhance their bowl.
          </p>

          <p>
            This tool was built to bridge that exact gap—giving you a beautiful, practical canvas to
            safely diversify your dog's daily bowl with vital nutrients and antioxidants, without
            unbalancing their core commercial diet.
          </p></>
        )} />
    <section
      className="w-full max-w-4xl pb-16 text-left font-sans select-none"
      aria-labelledby="about-philosophy-title"
    >
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

      <div className="mt-8 flex justify-end">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex flex-row items-center rounded-xl bg-amber-700 px-5 py-2.5 font-sans
            text-[10px] font-black tracking-[0.22em] text-white uppercase shadow-2xs transition-all
            duration-200 outline-none hover:scale-[1.02] hover:brightness-105 focus-visible:ring-2
            focus-visible:ring-stone-500 focus-visible:ring-offset-1 active:scale-[0.97]"
        >
          Build Topper Recipe
          <svg
            className="stroke-currentColor ml-2 h-3.5 w-3.5 transition-transform duration-200
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
      </div>

      <div
        className="mx-auto mt-10 max-w-[1180px] rounded-[2rem] border-2 border-stone-200 bg-white
          px-4 py-5 shadow-[0_2px_10px_rgba(28,25,23,0.06)] sm:px-6 sm:py-7"
      >
        <div className="flex items-center justify-center gap-3">
          <span
            className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#b05a2a]
              text-base text-white shadow-[0_2px_8px_rgba(176,90,42,0.35)]"
            aria-hidden="true"
          >
            ♥
          </span>
          <h3 className="font-serif text-[2.15rem] leading-none font-black italic tracking-tight text-stone-900 sm:text-[2.6rem]">
            Support the Mission
          </h3>
        </div>

        <div className="mx-auto mt-5 max-w-5xl space-y-4 text-center text-stone-700">
          <p className="mx-auto max-w-5xl text-[14px] leading-relaxed font-medium sm:text-[16px]">
            This project was created to help dog lovers like you build healthier, more intentional
            meals for their companions. If you've found value in this tool and want to support
            ongoing development and refinement, consider buying me a coffee. Every cup helps me
            dedicate more time to expanding features, adding new ingredients, and ensuring the most
            accurate nutritional guidance.
          </p>

          <p className="text-[14px] italic text-stone-700/90 sm:text-[17px]">
            Whether it's a $1 espresso or a $5 latte, your support means everything.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          {buyMeACoffeeUrl ? (
            <a
              href={buyMeACoffeeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-500/80
                bg-[#f9f5ee] px-5 py-2.5 text-[13px] font-black font-serif italic text-[#8b4a1e]
                shadow-[0_0_0_1px_rgba(214,153,93,0.3)] transition-transform duration-200
                hover:scale-[1.01] hover:bg-[#fffaf3] focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
            >
              <Coffee className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              Buy me a coffee
            </a>
          ) : (
            <div
              className="w-full max-w-5xl rounded-xl border border-dashed border-amber-500/80
                bg-[#f9f4ec] px-4 py-2.5 text-center text-[13px] font-black italic text-[#8b4a1e]
                shadow-[inset_0_0_0_1px_rgba(214,153,93,0.2)]"
            >
              Add VITE_BUY_ME_A_COFFEE_URL to your environment variables to enable donations.
            </div>
          )}
        </div>
      </div>
    </section>
  </>
  );
};
