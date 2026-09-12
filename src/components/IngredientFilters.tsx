import React, { useEffect, useMemo, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import type { Ingredient } from "../types/nutrition";

const formatLabel = (value: string) =>
  value
    .replace(/-/g, " ")
    .replace(/\b\w/g, (character) => character.toUpperCase());

interface IngredientFiltersProps {
  options: Ingredient[];
  resultCount: number;
  selectedBenefits: string[];
  setSelectedBenefits: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const IngredientFilters: React.FC<IngredientFiltersProps> = ({
  options,
  resultCount,
  selectedBenefits,
  setSelectedBenefits,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");
  const [benefitSearch, setBenefitSearch] = useState("");

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

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

  const uniqueCategories = useMemo(() => {
    const categoriesSet = new Set<string>();
    options.forEach((item) => categoriesSet.add(item.category));
    return Array.from(categoriesSet).sort();
  }, [options]);

  const activeFilterCount =
    (selectedCategory ? 1 : 0) + selectedBenefits.length;

  const clearAll = () => {
    setSelectedCategory("");
    setSelectedBenefits([]);
  };

  const filterGroup = (
    title: string,
    options: string[],
    selected: string[],
    onToggle: (value: string) => void,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
  ) => (
    <fieldset className="border-t border-stone-900/10 pt-4 first:border-t-0 first:pt-0">
      <legend className="mb-3 text-[10px] font-black tracking-[0.18em] text-stone-900 uppercase">
        {title}
      </legend>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={`Search ${title.toLocaleLowerCase()}`}
        className="mb-2 w-full rounded-md border border-stone-900/12 bg-white/70 px-2.5 py-2 text-xs text-stone-800 outline-none placeholder:text-stone-400 focus:border-amber-700/50 focus:ring-2 focus:ring-amber-700/10"
        aria-label={`Search ${title}`}
      />
      <div className="max-h-44 space-y-1 overflow-y-auto pr-1">
        {options
          .filter((option) => option.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
          .map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-2 rounded-md px-1.5 py-1.5 text-xs text-stone-700 transition-colors hover:bg-amber-50 hover:text-stone-900"
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => onToggle(option)}
                className="h-4 w-4 cursor-pointer accent-amber-700"
              />
              <span>{option}</span>
            </label>
          ))}
      </div>
    </fieldset>
  );

  const filterOptions = (
    <div id="ingredient-filter-options" className="space-y-5">
      <fieldset>
        <legend className="mb-3 text-[10px] font-black tracking-[0.18em] text-stone-900 uppercase">
          Categories
        </legend>
        <input
          type="search"
          value={categorySearch}
          onChange={(event) => setCategorySearch(event.target.value)}
          placeholder="Search categories"
          className="mb-2 w-full rounded-md border border-stone-900/12 bg-white/70 px-2.5 py-2 text-xs text-stone-800 outline-none placeholder:text-stone-400 focus:border-amber-700/50 focus:ring-2 focus:ring-amber-700/10"
          aria-label="Search categories"
        />
        <div className="space-y-1">
          <label
            className={`flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-xs font-bold transition-colors ${!selectedCategory ? "bg-stone-900/5 text-stone-900" : "text-stone-700 hover:bg-amber-50"}`}
          >
            <input
              type="radio"
              name="ingredient-category"
              checked={!selectedCategory}
              onChange={() => setSelectedCategory("")}
              className="sr-only"
            />
            <span
              className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 bg-white ${!selectedCategory ? "border-amber-700" : "border-stone-400"}`}
              aria-hidden="true"
            >
              {!selectedCategory && <span className="h-2.5 w-2.5 rounded-full bg-amber-700" />}
            </span>
            <span>All ingredients</span>
          </label>
          {uniqueCategories
            .filter((category) => formatLabel(category).toLocaleLowerCase().includes(categorySearch.trim().toLocaleLowerCase()))
            .map((category) => (
              <label
                key={category}
                className={`flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-2 text-xs transition-colors hover:bg-amber-50 ${selectedCategory === category ? "bg-amber-100 font-bold text-amber-950" : "text-stone-700"}`}
              >
                <input
                  type="radio"
                  name="ingredient-category"
                  checked={selectedCategory === category}
                  onChange={() => setSelectedCategory(category)}
                  className="sr-only"
                />
                <span
                  className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 bg-white ${selectedCategory === category ? "border-amber-700" : "border-stone-400"}`}
                  aria-hidden="true"
                >
                  {selectedCategory === category && <span className="h-2.5 w-2.5 rounded-full bg-amber-700" />}
                </span>
                <span className="capitalize">{formatLabel(category)}</span>
              </label>
            ))}
        </div>
      </fieldset>
      {filterGroup("Benefits", uniqueBenefits, selectedBenefits, (value) => toggleSelection(value, setSelectedBenefits), benefitSearch, setBenefitSearch)}
    </div>
  );

  const filterHeader = (showCloseButton = false) => (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <h2 className="font-serif text-xl font-black text-stone-900 italic">Filters</h2>
        {activeFilterCount > 0 && (
          <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-700 px-1.5 text-[10px] font-black text-white">
            {activeFilterCount}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={activeFilterCount === 0}
          onClick={clearAll}
          className="cursor-pointer text-[9px] font-black tracking-[0.12em] text-amber-800 uppercase hover:text-amber-950 disabled:cursor-not-allowed disabled:text-stone-400"
        >
          Clear all
        </button>
        {showCloseButton && (
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="cursor-pointer rounded-md p-1 text-stone-500 hover:bg-stone-900/5 hover:text-stone-900"
            aria-label="Close filters"
          >
            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="flex w-full cursor-pointer items-center justify-between rounded-xl border border-stone-900/10 bg-white/65 px-4 py-3 text-left shadow-[0_3px_12px_rgba(28,25,23,0.04)] lg:hidden"
        aria-expanded={isMobileOpen}
        aria-controls="ingredient-filter-dialog"
      >
        <span className="font-serif text-xl font-black text-stone-900 italic">Filters</span>
        <span className="text-xs font-black tracking-[0.12em] text-amber-800 uppercase">
          {activeFilterCount > 0 ? `${activeFilterCount} active` : "Open"}
        </span>
      </button>

      <aside className="hidden w-56 shrink-0 p-1 text-left lg:block">
        {filterHeader()}
        <div className="mt-5">{filterOptions}</div>
      </aside>

      {isMobileOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start bg-stone-950/35 p-3 backdrop-blur-sm sm:items-center sm:justify-center"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsMobileOpen(false);
          }}
        >
          <div
            id="ingredient-filter-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ingredient-filter-dialog-title"
            className="flex max-h-[85vh] w-full flex-col overflow-hidden rounded-2xl border border-stone-900/10 bg-stone-50 p-5 shadow-[0_12px_40px_rgba(28,25,23,0.2)] sm:max-w-md"
          >
            <div id="ingredient-filter-dialog-title">{filterHeader(true)}</div>
            <div className="mt-5 min-h-0 flex-1 overflow-y-auto">{filterOptions}</div>
            <div className="sticky bottom-0 -mx-5 -mb-5 mt-5 border-t border-stone-900/10 bg-stone-50/95 p-4 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                className="w-full cursor-pointer rounded-xl bg-amber-700 px-4 py-3 text-[11px] font-black tracking-[0.18em] text-white uppercase shadow-[0_3px_10px_rgba(120,53,15,0.2)] transition-colors hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2"
              >
                Apply filters · {resultCount} {resultCount === 1 ? "result" : "results"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
