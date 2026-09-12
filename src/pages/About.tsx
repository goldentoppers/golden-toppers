import React from "react";
import { Link } from "react-router-dom";
import kitchenHero from "../assets/hero-woman-and-dog-in-kitchen.jpg";
import { PageHeading } from "../components/PageHeading";
import { AssetIcon } from "../components/AssetIcon";

const philosophySections = [
  {
    title: "01. Fresh Food Power",
    description:
      "Formulating full meals carries deficiency risks without a specialist. Swapping just 10% of standard kibble with living, whole ingredients is a simple, low-risk way to introduce powerful real-food nutrition:",
    points: ["Living food hydration", "Vital active antioxidants", "Metabolic phytonutrients"],
  },
  {
    title: "02. The 10% Ceiling Guard",
    description:
      "Our calculation engine acts as a strict guardrail to keep fresh additions inside a safe caloric envelope, tracking your dynamic portion sizes across five distinct groups:",
    points: [
      "Main Protein Tiers",
      "Wholesome Hearty Bases",
      "Fresh Colors",
      "Superfood Boosters & Toppers",
    ],
  },
] as const;

const PhilosophySection: React.FC<(typeof philosophySections)[number]> = ({
  title,
  description,
  points,
}) => (
  <article className="flex flex-col items-start">
    <h3
      className="w-full border-b-2 border-stone-900/10 pb-2 text-[11px] font-black tracking-[0.2em]
        text-stone-900 uppercase"
    >
      {title}
    </h3>
    <p
      className="mt-4 text-[13px] leading-relaxed font-medium text-stone-600 select-text
        md:text-[14px]"
    >
      {description}
    </p>
    <ul
      className="mt-5 space-y-3.5 pl-0.5 text-[10px] font-black tracking-[0.16em] text-stone-800
        uppercase"
    >
      {points.map((point) => (
        <li key={point} className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600/70" aria-hidden="true" />
          <span className="leading-none">{point}</span>
        </li>
      ))}
    </ul>
  </article>
);

export const About: React.FC = () => {
  const buyMeACoffeeUrl = import.meta.env.VITE_BUY_ME_A_COFFEE_URL?.trim();

  return (
    <>
      <div
        className="mx-auto flex w-full max-w-4xl flex-col gap-8 rounded-2xl border
          border-stone-900/10 bg-white/70 px-4 py-8 shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10
          sm:py-10"
      >
        <PageHeading
          title="Enriching the daily bowl, safely."
          subtitle="The 10% Topper Philosophy"
          details={() => (
            <>
              <p>
                We love our dogs unconditionally, but navigating the world of canine nutrition can
                feel overwhelming. While formulating a 100% raw or home-cooked diet carries complex
                mineral balancing risks, introducing fresh, living whole foods as an intentional
                supplemental mix-in is a simple, low-risk way to enhance their bowl.
              </p>
              <p>
                This tool was built to bridge that exact gap, giving you a beautiful, practical
                canvas to safely diversify your dog's daily bowl with vital nutrients and
                antioxidants, without unbalancing their core commercial diet.
              </p>
            </>
          )}
        />
        <section
          className="text-left font-sans select-none"
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
              className="h-full w-full object-cover object-[center_35%] transition-opacity
                duration-300"
            />

            <div
              className="absolute inset-0 h-full w-full bg-linear-to-t from-stone-950/5
                via-transparent to-transparent mix-blend-multiply"
              aria-hidden="true"
            />
          </div>

          <div
            className="grid grid-cols-1 gap-x-12 gap-y-10 p-8
              drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)] md:grid-cols-2"
          >
            {philosophySections.map((section) => (
              <PhilosophySection key={section.title} {...section} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="flex flex-row items-center rounded-xl bg-amber-700 px-6 py-3 font-sans
                text-[10px] font-black tracking-[0.22em] text-white uppercase shadow-2xs
                transition-all duration-200 outline-none hover:scale-[1.02] hover:brightness-105
                focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-1
                active:scale-[0.97]"
            >
              Build Topper Recipe
            </Link>
          </div>
        </section>
      </div>

      <div
        className="mx-auto w-full max-w-4xl rounded-2xl border border-stone-900/10 bg-white/70
          px-4 py-8 shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10 sm:py-10"
      >
        <div className="flex items-center justify-center gap-3">
          <AssetIcon name="dog-with-pumpkin" color="#b45309" className="h-16 w-16" />
          <h2 className="text-center font-serif text-3xl leading-tight font-black tracking-wide text-stone-900 italic">
            Support the Mission
          </h2>
        </div>

        <div className="mx-auto mt-5 max-w-5xl space-y-4 text-center text-stone-700">
          <p className="mx-auto max-w-5xl text-[14px] leading-relaxed font-medium sm:text-[16px]">
            This project was created to help dog lovers like you build healthier, more intentional
            meals for their companions. If you've found value in this tool and want to support
            ongoing development and refinement, consider buying me a coffee. Every cup helps me
            dedicate more time to expanding features, adding new ingredients, and ensuring the most
            accurate nutritional guidance.
          </p>

          <p className="text-[14px] text-stone-700/90 italic sm:text-[17px]">
            Whether it's a $1 espresso or a $5 latte, your support means everything.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          {buyMeACoffeeUrl ? (
            <a
              href={buyMeACoffeeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-700 px-6 py-3
                font-sans text-[10px] font-black tracking-[0.22em] text-white uppercase shadow-[0_2px_10px_rgba(120,53,15,0.18)]
                transition-all duration-200 outline-none hover:scale-[1.02] hover:brightness-105
                focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-1
                active:scale-[0.97]"
            >
              Buy me a coffee
            </a>
          ) : (
            <div
              className="w-full max-w-5xl rounded-xl border border-dashed border-amber-500/80
                bg-[#f9f4ec] px-4 py-2.5 text-center text-[13px] font-black text-[#8b4a1e] italic
                shadow-[inset_0_0_0_1px_rgba(214,153,93,0.2)]"
            >
              Add VITE_BUY_ME_A_COFFEE_URL to your environment variables to enable donations.
            </div>
          )}
        </div>
      </div>
    </>
  );
};
