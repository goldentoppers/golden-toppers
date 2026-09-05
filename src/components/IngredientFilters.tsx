import React, { useEffect, useMemo, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Ingredient } from "../types/nutrition";

const formatLabel = (value: string) => value.replace(/-/g, " ");

interface FilterOption {
  value: string;
  label: string;
}

interface FilterSelectProps {
  label: string;
  value: string | string[];
  onChange: (value: string) => void;
  options: FilterOption[];
  isMultiSelect?: boolean;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
  label,
  value,
  onChange,
  options,
  isMultiSelect = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedValues = Array.isArray(value) ? value : [value];
  const selectedLabel = isMultiSelect && selectedValues.length > 0
    ? `${selectedValues.length} ${selectedValues.length === 1 ? "item" : "items"} selected`
    : isMultiSelect
      ? options[0]?.label ?? ""
      : options.find((option) => option.value === value)?.label ?? "";

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
    if (isMultiSelect) {
      onChange(optionValue);
      return;
    }
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
          className={`absolute top-full z-20 mt-1.5 overflow-hidden rounded-xl border border-stone-800/10
            bg-white shadow-[0_8px_24px_rgba(28,25,23,0.12)] ${isMultiSelect
              ? "left-1/2 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 sm:left-0 sm:translate-x-0"
              : "left-0 w-max max-w-[calc(100vw-2rem)]"
            }`}
        >
          {isMultiSelect && selectedValues.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 border-b border-stone-800/10 bg-stone-900/[0.025] p-2">
              {selectedValues.map((selectedValue) => {
                const selectedOption = options.find((option) => option.value === selectedValue);
                if (!selectedOption) return null;

                return (
                  <button
                    key={selectedValue}
                    type="button"
                    onClick={() => onChange(selectedValue)}
                    className="inline-flex cursor-pointer items-center gap-1 rounded-md border border-amber-700/20 bg-amber-700/8 px-2 py-1 text-[9px] font-black tracking-wide text-amber-800 uppercase transition-colors hover:bg-amber-700/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700"
                    aria-label={`Remove ${selectedOption.label} filter`}
                  >
                    {selectedOption.label}
                    <XMarkIcon className="h-3 w-3" aria-hidden="true" />
                  </button>
                );
              })}
              <button
                type="button"
                onClick={() => onChange("")}
                className="ml-auto cursor-pointer px-1 text-[9px] font-black tracking-[0.12em] text-stone-500 uppercase transition-colors hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500"
              >
                Clear
              </button>
            </div>
          )}
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search…"
            autoFocus
            className="min-w-56 w-full border-b border-stone-800/10 bg-transparent px-3 py-2 font-sans
              text-xs text-stone-800 outline-none placeholder:text-stone-400"
          />
          <ul role="listbox" aria-label={label} className="max-h-52 list-none overflow-y-auto py-1">
            {filteredOptions.length === 0 ? (
              <li className="px-3 py-2 font-sans text-xs text-stone-400">No matches</li>
            ) : (
              filteredOptions.map((option) => (
                <li key={option.value} role="option" aria-selected={selectedValues.includes(option.value)}>
                  <button
                    type="button"
                    onClick={() => handleSelect(option.value)}
                    className={`flex w-full cursor-pointer items-center gap-2 whitespace-nowrap px-3 py-1.5 text-left font-sans text-xs
                      capitalize transition-colors hover:bg-stone-900/5 ${selectedValues.includes(option.value)
                        ? "font-black text-amber-800"
                        : "text-stone-700"
                      }`}
                  >
                    {isMultiSelect && option.value && (
                      <span
                        className={`inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border text-[10px] ${selectedValues.includes(option.value)
                          ? "border-amber-700 bg-amber-700 text-white"
                          : "border-stone-400 bg-white text-transparent"
                          }`}
                      >
                        ✓
                      </span>
                    )}
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
  selectedBenefits: string[];
  setSelectedBenefits: React.Dispatch<React.SetStateAction<string[]>>;
  selectedVitamins: string[];
  setSelectedVitamins: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const IngredientFilters: React.FC<IngredientFiltersProps> = ({
  options,
  selectedBenefits,
  setSelectedBenefits,
  selectedVitamins,
  setSelectedVitamins,
  selectedCategory,
  setSelectedCategory,
}) => {
  console.log("options: ", options)
  const toggleSelection = (
    value: string,
    setValues: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    if (!value) {
      setValues([]);
      return;
    }
    setValues((values) =>
      values.includes(value) ? values.filter((selected) => selected !== value) : [...values, value],
    );
  };

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
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-2">
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
          value={selectedBenefits}
          onChange={(value) => toggleSelection(value, setSelectedBenefits)}
          isMultiSelect
          options={[
            { value: "", label: "All Benefits" },
            ...uniqueBenefits.map((benefit) => ({ value: benefit, label: benefit })),
          ]}
        />

        {/* FILTER DROPDOWN: VITAMIN STREAMS MAP */}
        <FilterSelect
          label="Filter ingredients by vitamin compound profile"
          value={selectedVitamins}
          onChange={(value) => toggleSelection(value, setSelectedVitamins)}
          isMultiSelect
          options={[
            { value: "", label: "All Vitamins" },
            ...uniqueVitamins.map((vitamin) => ({ value: vitamin, label: vitamin })),
          ]}
        />
      </div>
    </div>
  );
};
