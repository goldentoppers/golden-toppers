import React from 'react';

interface PageHeadingProps {
  title?: string;
  details?: React.ComponentType;
  subtitle?: string;
  headingId?: string;
  align?: "left" | "center";
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  subtitle,
  details: Details,
  headingId = 'about-philosophy-title',
  align = 'center',
}) => {
  const alignmentClass = align === 'left' ? 'text-left' : 'text-center';
  const detailsPositionClass = align === 'left' ? '' : 'mx-auto';
  const sectionWidthClass = align === 'left' ? 'w-full' : 'mx-auto w-full max-w-4xl px-4';

  return (
    <section
      className={`${sectionWidthClass} font-sans select-none`}
      aria-labelledby={headingId}
    >
      <header className={`${alignmentClass} drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]`}>
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
            id={headingId}
            className="mt-3 font-serif text-3xl leading-tight font-black tracking-wide text-stone-900
            italic"
          >
            {title}
          </h2>
        )}
      </header>

      <div
        className={`${detailsPositionClass} mt-6 max-w-2xl space-y-4 ${alignmentClass} font-serif text-[14.5px]
                  leading-relaxed font-medium p-y-5 text-stone-700/95 italic select-text sm:text-[16px]`}
      >
        {Details && <Details />}
      </div>
    </section >
  )
};
