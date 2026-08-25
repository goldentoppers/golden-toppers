import React, { useMemo, useState } from "react";
import {
    ExclamationTriangleIcon,
    MagnifyingGlassIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { AssetIcon } from "../components/AssetIcon";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import type { Ingredient } from "../types/nutrition";

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const normalizeSearchText = (value: string) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();

const HighlightedName: React.FC<{ name: string; query: string }> = ({ name, query }) => {
    if (!query.trim()) return <>{name}</>;

    const parts = name.split(new RegExp(`(${escapeRegExp(query.trim())})`, "ig"));

    return (
        <>
            {parts.map((part, index) =>
                normalizeSearchText(part) === normalizeSearchText(query.trim()) ? (
                    <strong key={`${part}-${index}`} className="font-black text-amber-800">
                        {part}
                    </strong>
                ) : (
                    <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
                ),
            )}
        </>
    );
};

const formatLabel = (value: string) => value.replace(/-/g, " ");

const rawCategoryColors: Record<Ingredient["category"], string> = {
    meat: "#991b1b",
    seafood: "#1e3a8a",
    fruit: "#be185d",
    vegetable: "#065f46",
    dairy: "#a16207",
    "seeds-nuts": "#1e3a8a",
    oil: "#581c56",
    grain: "#c25d3d",
};

const IngredientCard: React.FC<{ ingredient: Ingredient; query: string }> = ({
    ingredient,
    query,
}) => {
    const caution = ingredient.isToxic || ingredient.isHighRisk;
    const details = [ingredient.preparationAlert, ingredient.preparation].filter(Boolean);
    const safetyReason =
        ingredient.preparationAlert ||
        (ingredient.isToxic
            ? "This ingredient contains compounds that are toxic to dogs."
            : "This ingredient carries a safety risk for dogs.");
    const categoryColor = rawCategoryColors[ingredient.category];

    return (
        <article className="relative flex min-h-52 flex-col rounded-2xl border border-stone-900/10 bg-white/55 p-4 shadow-[0_3px_12px_rgba(28,25,23,0.04)]">
            <div className="flex items-start gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-stone-900/5">
                    <AssetIcon name={ingredient.icon} className="h-14 w-14" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                    <h2 className="font-serif text-xl leading-tight font-black text-stone-900">
                        <HighlightedName name={ingredient.name} query={query} />
                    </h2>
                    <div className="mt-2 flex flex-wrap gap-1.5 text-[9px] font-black tracking-[0.12em] text-stone-500 uppercase">
                        <span
                            style={{
                                backgroundColor: `${categoryColor}14`,
                                borderColor: `${categoryColor}40`,
                                color: categoryColor,
                            }}
                            className="rounded-md border px-2 py-1"
                        >
                            {formatLabel(ingredient.category)}
                        </span>
                    </div>
                </div>
            </div>

            {caution ? (
                <div className="mt-6 flex flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-red-900/15 bg-red-900/5 px-4 py-4 text-center text-red-900">
                    <ExclamationTriangleIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <strong className="text-sm font-black leading-relaxed">Not safe for dogs. Do not serve.</strong>
                    <p className="max-w-lg text-xs leading-relaxed font-semibold text-red-900/80">
                        {safetyReason}
                    </p>
                </div>
            ) : (
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-stone-900/8 pt-3 text-[10px] text-stone-600">
                    <div>
                        <dt className="font-black tracking-[0.12em] uppercase">Energy</dt>
                        <dd className="mt-0.5 font-semibold">{ingredient.kcalPerGram} kcal/g</dd>
                    </div>
                    {ingredient.allergens?.length ? (
                        <div>
                            <dt className="font-black tracking-[0.12em] uppercase">Allergens</dt>
                            <dd className="mt-0.5 font-semibold">{ingredient.allergens.join(", ")}</dd>
                        </div>
                    ) : null}
                    <div className="col-span-2">
                        <dt className="font-black tracking-[0.12em] uppercase">Benefits</dt>
                        <dd className="mt-0.5 font-semibold text-emerald-800">{ingredient.benefits.join(", ")}</dd>
                    </div>
                    <div className="col-span-2">
                        <dt className="font-black tracking-[0.12em] uppercase">Vitamins</dt>
                        <dd className="mt-0.5 font-semibold">{ingredient.vitamins.join(", ")}</dd>
                    </div>
                </dl>
            )}

            {!caution && details.length > 0 && (
                <div className={`mt-auto flex gap-2 border-t pt-3 text-[10px] leading-relaxed font-semibold ${caution ? "border-red-900/10 text-red-900" : "border-amber-700/10 text-stone-700"}`}>
                    <span>{details.join(" ")}</span>
                </div>
            )}
        </article>
    );
};

export const IngredientSearch: React.FC = () => {
    const [query, setQuery] = useState("");
    const normalizedQuery = normalizeSearchText(query.trim());

    const results = useMemo(
        () =>
            [...INGREDIENT_LIBRARY]
                .filter((ingredient) => normalizeSearchText(ingredient.name).includes(normalizedQuery))
                .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" })),
        [normalizedQuery],
    );

    return (
        <main className="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-8" aria-labelledby="ingredient-search-title">
            <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
                <span className="text-[10px] font-black tracking-[0.3em] text-amber-700 uppercase">Ingredient Library</span>
                <h1 id="ingredient-search-title" className="mt-3 font-serif text-4xl leading-tight font-black text-stone-900 italic sm:text-5xl">
                    Find the right topper.
                </h1>
                <p className="mt-3 max-w-xl font-serif text-base leading-relaxed text-stone-600 italic">
                    Search the whole-food ingredient library for nutrition, benefits, and preparation notes.
                </p>

                <form className="mt-8 w-full" onSubmit={(event) => event.preventDefault()} role="search">
                    <label className="sr-only" htmlFor="ingredient-search">
                        Search ingredients
                    </label>
                    <div className="flex items-center rounded-full border border-stone-900/15 bg-white/75 px-5 py-3 shadow-[0_5px_20px_rgba(28,25,23,0.08)] transition-shadow focus-within:border-amber-700/40 focus-within:shadow-[0_7px_24px_rgba(28,25,23,0.12)]">
                        <MagnifyingGlassIcon className="h-5 w-5 shrink-0 text-stone-500" aria-hidden="true" />
                        <input
                            id="ingredient-search"
                            type="search"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Search ingredients"
                            className="min-w-0 flex-1 appearance-none bg-transparent px-3 font-sans text-base text-stone-900 outline-none placeholder:text-stone-400 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                className="rounded-full p-1 text-stone-500 transition-colors hover:bg-stone-900/8 hover:text-stone-900 cursor-pointer"
                                aria-label="Clear ingredient search"
                            >
                                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        )}
                    </div>
                </form>
            </section>

            <section className="mt-10" aria-live="polite" aria-label="Ingredient search results">
                <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-stone-900/10 pb-3">
                    <h2 className="font-sans text-[11px] font-black tracking-[0.22em] text-stone-900 uppercase">
                        {normalizedQuery ? "Matching ingredients" : "All ingredients"}
                    </h2>
                    <span className="shrink-0 text-[10px] font-bold tracking-wider text-stone-500 uppercase">
                        {results.length} {results.length === 1 ? "result" : "results"}
                    </span>
                </div>

                {results.length > 0 ? (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="list">
                        {results.map((ingredient) => (
                            <div key={ingredient.id} role="listitem">
                                <IngredientCard ingredient={ingredient} query={query} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl border border-dashed border-stone-900/15 bg-white/35 px-6 text-center">
                        <MagnifyingGlassIcon className="h-8 w-8 text-stone-400" aria-hidden="true" />
                        <p className="mt-3 font-serif text-lg font-bold text-stone-700 italic">No ingredients found.</p>
                        <p className="mt-1 text-[11px] text-stone-500">Try a broader search.</p>
                    </div>
                )}
            </section>
        </main>
    );
};
