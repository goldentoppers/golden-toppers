import React from 'react';
import { AssetIcon } from './AssetIcon';

interface PageHeadingProps {
  title?: string;
  details?: React.ComponentType;
  subtitle?: string;
  headingId?: string;
  align?: "left" | "center";
  className?: string;
  // adSlot?: string;
}

export const PageHeading: React.FC<PageHeadingProps> = ({
  title,
  subtitle,
  details: Details,
  headingId = 'about-philosophy-title',
  align = 'center',
  className = '',
  // adSlot,
}) => {
  const alignmentClass = align === 'left' ? 'text-left' : 'text-center';
  const sectionWidthClass = 'mx-auto w-full max-w-4xl px-4';

  return (
    <section className={`${sectionWidthClass} ${className} font-sans select-none`} aria-labelledby={headingId}>
      <div className="flex flex-col">
        {subtitle && (
          <div className="flex w-full items-center justify-center text-[9px] font-black tracking-[0.28em] text-amber-800/75 uppercase">
            <span className="mr-4 h-px w-16 shrink-0 bg-amber-700/25" />
            <span
              className="block text-[9.5px] leading-none font-black tracking-[0.25em] text-amber-700
                uppercase"
            >
              {subtitle}
            </span>
            <span className="ml-4 h-px w-16 shrink-0 bg-amber-700/25" />
          </div>
        )}

        <div className="flex flex-col">
          {title && (
            <header className="mt-3 flex flex-row items-center justify-start gap-4 sm:justify-center">
              <AssetIcon
                name="pumpkin-bundle"
                className="h-20 w-20 shrink-0 text-amber-700"
              />
              <h2
                id={headingId}
                className="text-left font-serif text-3xl leading-tight font-black tracking-wide text-stone-900 italic sm:text-center"
              >
                {title}
              </h2>
            </header>
          )}

          {Details && (
            <div className={`${alignmentClass} font-serif text-[14.5px] leading-relaxed font-medium p-y-5 text-stone-700/95 italic select-text sm:text-[16px]`}>
              <Details />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
