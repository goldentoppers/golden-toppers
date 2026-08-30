import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Ingredient } from "../types/nutrition";

const formatLabel = (value: string) => value.replace(/-/g, " ");

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: FilterOption[];
}

const FilterSelect: React.FC<FilterSelectProps> = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((option) => option.value === value)?.label ?? "";

  const filteredOptions = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();
    if (!query) return options;
    return options.filter((option) => option.label.toLocaleLowerCase().includes(query));
  }, [options, search]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-stone-800/5
          bg-stone-900/[0.04] py-1.5 pr-8 pl-3 font-sans text-[10px] font-black tracking-wider
          text-stone-700 uppercase transition-all duration-150 outline-none
          hover:bg-stone-900/[0.08] focus-visible:ring-2 focus-visible:ring-stone-400"
      >
        {selectedLabel}
      </button>
      <div
        className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 text-stone-500"
        aria-hidden="true"
      >
        <svg className="h-3 w-3 stroke-current stroke-[2.5]" viewBox="0 0 24 24" fill="none">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      {isOpen && (
        <div
          className="absolute top-full left-0 z-20 mt-1.5 w-48 overflow-hidden rounded-xl border
            border-stone-800/10 bg-white shadow-[0_8px_24px_rgba(28,25,23,0.12)]"
        >
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search…"
            autoFocus
            className="w-full border-b border-stone-800/10 bg-transparent px-3 py-2 font-sans
              text-xs text-stone-800 outline-none placeholder:text-stone-400"
          />
          <ul role="listbox" aria-label={label} className="max-h-52 list-none overflow-y-auto py-1">
            {filteredOptions.length === 0 ? (
              <li className="px-3 py-2 font-sans text-xs text-stone-400">No matches</li>
            ) : (
              filteredOptions.map((option) => (
                <li key={option.value} role="option" aria-selected={option.value === value}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`w-full cursor-pointer px-3 py-1.5 text-left font-sans text-xs
                      capitalize transition-colors hover:bg-stone-900/5 ${option.value === value
                        ? "font-black text-amber-800"
                        : "text-stone-700"
                      }`}
                  >
                    {option.label}
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

interface IngredientFiltersProps {
  options: Ingredient[];
  selectedBenefit: string;
  setSelectedBenefit: React.Dispatch<React.SetStateAction<string>>;
  selectedVitamin: string;
  setSelectedVitamin: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const IngredientFilters: React.FC<IngredientFiltersProps> = ({
  options,
  selectedBenefit,
  setSelectedBenefit,
  selectedVitamin,
  setSelectedVitamin,
  selectedCategory,
  setSelectedCategory,
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

  const uniqueCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    options.forEach((item) => categoriesSet.add(item.category));
    return Array.from(categoriesSet).sort();
  }, [options]);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* FILTER DROPDOWN: CATEGORY MAP */}
      <FilterSelect
        label="Filter ingredients by category"
        value={selectedCategory}
        onChange={setSelectedCategory}
        options={[
          { value: "", label: "All Categories" },
          ...uniqueCategories.map((category) => ({ value: category, label: formatLabel(category) })),
        ]}
      />

      {/* FILTER DROPDOWN: HEALTH BENEFITS MAP */}
      <FilterSelect
        label="Filter ingredients by clinical health benefit"
        value={selectedBenefit}
        onChange={setSelectedBenefit}
        options={[
          { value: "", label: "All Benefits" },
          ...uniqueBenefits.map((benefit) => ({ value: benefit, label: benefit })),
        ]}
      />

      {/* FILTER DROPDOWN: VITAMIN STREAMS MAP */}
      <FilterSelect
        label="Filter ingredients by vitamin compound profile"
        value={selectedVitamin}
        onChange={setSelectedVitamin}
        options={[
          { value: "", label: "All Vitamins" },
          ...uniqueVitamins.map((vitamin) => ({ value: vitamin, label: vitamin })),
        ]}
      />
    </div>
  );
};
