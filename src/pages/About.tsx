import React from "react";
import { Link } from "react-router-dom";
import kitchenHero from "../assets/hero-woman-and-dog-in-kitchen.jpg";
import { PageHeading } from "../components/PageHeading";
import { ContentCard } from "../components/ContentCard";

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
          align="left"
          title="Enriching the daily bowl, safely."
          subtitle="The 10% Topper Philosophy"
          details={() => (
            <div className="">
              <p>
                We love our dogs unconditionally, but navigating the world of canine nutrition can
                feel overwhelming. While formulating a 100% raw or home-cooked diet carries complex
                mineral balancing risks, introducing fresh, living whole foods as an intentional
                supplemental mix-in is a simple, low-risk way to enhance their bowl.
              </p>
              <br />
              <p>
                This tool was built to bridge that exact gap, giving you a beautiful, practical
                canvas to safely diversify your dog's daily bowl with vital nutrients and
                antioxidants, without unbalancing their core commercial diet.
              </p>
            </div>
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

      <ContentCard align="left">
        <section id="engineering" className="scroll-mt-8">
          <PageHeading
            title="Engineering the Platform"
            icon="build"
            subtitle="Behind the Code"
            iconSize="h-16 h-16 md:h-10 md:w-10"
            details={() => (
              <div className="text-left space-y-4">
                <p>
                  Golden Toppers was designed and engineered to demonstrate how highly responsive, production-ready frontend architectures can transform complex calculations into clean, elegant consumer utilities.
                </p>
                <p>
                  The engine couples programmatic dietary safety rules with an intuitive interface, keeping calculations lightweight, real-time, and securely managed across client runtimes. You can audit the full application architecture directly via the open-source repository on{" "}
                  <a
                    href="https://github.com/goldentoppers/golden-toppers"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-bold text-amber-700 underline hover:text-amber-800 transition-colors"
                  >
                    GitHub
                  </a>.
                </p>
              </div>
            )}
            align="left"
          />
        </section>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-stone-900/5 bg-stone-50/40 p-5">
            <h4 className="text-[11px] font-black tracking-[0.15em] text-stone-900 uppercase border-b border-stone-900/5 pb-2">
              Architecture & State
            </h4>
            <p className="mt-3 text-[13px] leading-relaxed text-stone-600">
              Built on a core stack of <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Vite</strong>. State lifecycles are decoupled into custom presentation hooks and specialized context containers, decoupling metric computation logic from layout rendering workflows.
            </p>
          </div>

          <div className="rounded-xl border border-stone-900/5 bg-stone-50/40 p-5">
            <h4 className="text-[11px] font-black tracking-[0.15em] text-stone-900 uppercase border-b border-stone-900/5 pb-2">
              Performance Guardrails
            </h4>
            <p className="mt-3 text-[13px] leading-relaxed text-stone-600">
              Optimized for fast client loading times. Implements lightweight asset packaging via automated SVGO configurations alongside strict, continuous layout optimization loops to achieve instantaneous page view transitions.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-xl border border-amber-600/10 bg-[#fdfaf4] p-6 text-left shadow-2xs">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold tracking-tight text-stone-900 italic">
                Looking for a Front-End Engineer?
              </h3>
              <p className="font-sans text-[13px] text-stone-600">
                I am actively seeking a <strong>full-time, fully remote frontend developer or software engineering</strong> role on teams focused on high-performance web products, type-safe clean code architectures, and smooth user experiences.
              </p>
            </div>
            <a
              href="https://github.com/goldentoppers/golden-toppers"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-stone-900 px-5 py-3
                font-sans text-[10px] font-black tracking-[0.2em] text-white uppercase transition-all 
                duration-200 hover:bg-stone-800 outline-none active:scale-[0.98]"
            >
              Review Source
            </a>
          </div>
        </div>
      </ContentCard>

      <ContentCard>
        <PageHeading
          align="left"
          title="Support the Mission"
          icon="dog-with-pumpkin"
          subtitle="Fueling Ongoing Development"
          iconSize="h-16 h-16 md:h-10 md:w-10"
          details={() => (
            <div className="text-left space-y-4">
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


              <div className="pt-2 justify-center flex">
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
                  null
                )}
              </div>
            </div>
          )}

        />


      </ContentCard>
    </>
  );
};
