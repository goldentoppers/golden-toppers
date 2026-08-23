import React from "react";

interface PageHeadingProps {
  title?: string;
  details?: JSX.Element;
  subtitle?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({ title, subtitle, details: Details }) => {
  return (
    <section
      className="mx-auto w-full max-w-4xl px-4  text-left font-sans select-none"
      aria-labelledby="about-philosophy-title"
    >
      <header className="drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]">
        {subtitle && (
          <span
            className="block text-[9.5px] leading-none font-black tracking-[0.25em] text-amber-700
            uppercase"
          >
            {subtitle}
          </span>
        )}
        {title && (
          <h2
            id="about-philosophy-title"
            className="mt-3 font-serif text-3xl leading-tight font-black tracking-wide text-stone-900
            italic"
          >
            {title}
          </h2>
        )}
      </header>

      <div
        className="max-w-2xl space-y-4 font-serif text-[14.5px] leading-relaxed font-medium p-y-5
                  text-stone-700/95 italic select-text sm:text-[16px]"
      >
        {Details && <Details />}
      </div>
    </section >
  )
};
