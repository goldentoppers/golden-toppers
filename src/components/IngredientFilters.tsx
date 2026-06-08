import React, { useMemo } from "react";
import type { Ingredient } from "../types/nutrition";

interface PantryProps {
  selectedBenefit: string;
  setSelectedBenefit: React.Dispatch<React.SetStateAction<string>>;
  selectedVitamin: string;
  setSelectedVitamin: React.Dispatch<React.SetStateAction<string>>;
  options: (
    | Ingredient
    | {
        id: string;
        name: string;
        icon: string;
        isNonePlaceholder: boolean;
        benefits: string[];
        vitamins: string[];
      }
  )[];
}

export const IngredientFilters: React.FC<PantryProps> = ({
  options,
  selectedBenefit,
  setSelectedBenefit,
  selectedVitamin,
  setSelectedVitamin,
}) => {
  const uniqueBenefits = useMemo(() => {
    const benefitsSet = new Set<string>();
    options.forEach((item) => item.benefits.forEach((b) => benefitsSet.add(b)));
    return Array.from(benefitsSet).sort();
  }, [options]);

  const uniqueVitamins = useMemo(() => {
    const vitaminsSet = new Set<string>();
    options.forEach((item) => item.vitamins.forEach((v) => vitaminsSet.add(v)));
    return Array.from(vitaminsSet).sort();
  }, [options]);

  return (
    <div className="flex items-center gap-2">
      {/* FILTER DROPDOWN 1: HEALTH BENEFITS MAP */}
      <div className="relative">
        <select
          value={selectedBenefit}
          onChange={(e) => setSelectedBenefit(e.target.value)}
          aria-label="Filter ingredients by clinical health benefit"
          /* Softened to match your warm stone typography scale parameters */
          className="cursor-pointer appearance-none rounded-xl border border-stone-800/5
            bg-stone-900/[0.04] py-1.5 pr-8 pl-3 font-sans text-[10px] font-black tracking-wider
            text-stone-700 uppercase transition-all duration-150 outline-none
            hover:bg-stone-900/[0.08] focus-visible:ring-2 focus-visible:ring-stone-400"
        >
          <option value="">All Benefits</option>
          {uniqueBenefits.map((benefit) => (
            <option key={benefit} value={benefit}>
              {benefit}
            </option>
          ))}
        </select>
        {/* Custom line art indicator arrow */}
        <div
          className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-stone-500"
          aria-hidden="true"
        >
          <svg className="h-3 w-3 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* FILTER DROPDOWN 2: VITAMIN STREAMS MAP */}
      <div className="relative">
        <select
          value={selectedVitamin}
          onChange={(e) => setSelectedVitamin(e.target.value)}
          aria-label="Filter ingredients by vitamin compound profile"
          className="cursor-pointer appearance-none rounded-xl border border-stone-800/5
            bg-stone-900/[0.04] py-1.5 pr-8 pl-3 font-sans text-[10px] font-black tracking-wider
            text-stone-700 uppercase transition-all duration-150 outline-none
            hover:bg-stone-900/[0.08] focus-visible:ring-2 focus-visible:ring-stone-400"
        >
          <option value="">All Vitamins</option>
          {uniqueVitamins.map((vitamin) => (
            <option key={vitamin} value={vitamin}>
              {vitamin}
            </option>
          ))}
        </select>
        <div
          className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-stone-500"
          aria-hidden="true"
        >
          <svg className="stroke-currentColor h-3 w-3 stroke-[2.5]" viewBox="0 0 24 24" fill="none">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </div>
  );
};
