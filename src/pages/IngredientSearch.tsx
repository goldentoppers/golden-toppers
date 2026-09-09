import React, { useMemo, useState } from "react";
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    MagnifyingGlassIcon,
    NoSymbolIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import { AssetIcon } from "../components/AssetIcon";
import { IngredientFilters } from "../components/IngredientFilters";
import { PageHeading } from "../components/PageHeading";
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
    const details = [ingredient.preparationAlert, ingredient.preparation].filter(Boolean);
    const safetyReason =
        ingredient.preparationAlert ||
        (ingredient.isToxic
            ? "This ingredient contains compounds that are toxic to dogs."
            : "This ingredient carries a safety risk for dogs.");
    const categoryColor = rawCategoryColors[ingredient.category];
    // Toxic ingredients are strictly prohibited; high-risk ones are still usable in tiny topper amounts.
    const isForbidden = ingredient.isToxic;
    const isLimitedUse = ingredient.isHighRisk && !ingredient.isToxic;

    const statusConfig = isForbidden
        ? {
            badgeClass: "absolute right-3 top-3 z-10 flex shrink-0 flex-col items-center gap-1 rounded-md px-2 py-1 text-center text-red-900",
            labelClass: "text-[9px] leading-none font-black tracking-[0.08em] uppercase text-red-900",
            icon: NoSymbolIcon,
            iconClass: "h-5 w-5",
            label: "Not safe",
            panelClass: "rounded-lg border border-red-900/15 bg-red-900/5 px-3 py-3 text-red-900",
            textClass: "min-w-0 text-xs leading-relaxed font-semibold text-red-900/80",
        }
        : isLimitedUse
            ? {
                badgeClass: "absolute right-3 top-3 z-10 flex shrink-0 flex-col items-center gap-1 rounded-md px-2 py-1 text-center text-amber-900",
                labelClass: "text-[9px] leading-none font-black tracking-[0.08em] uppercase text-amber-700",
                icon: ExclamationTriangleIcon,
                iconClass: "h-5 w-5 text-amber-700",
                label: "Caution",
                panelClass: "rounded-lg border border-amber-700/15 bg-amber-500/5 px-3 py-3 text-amber-950",
                textClass: "min-w-0 text-xs leading-relaxed font-semibold text-amber-900/80",
            }
            : {
                badgeClass: "absolute right-3 top-3 z-10 flex shrink-0 flex-col items-center gap-1 rounded-md px-4 py-1 text-center text-emerald-800",
                labelClass: "text-[9px] font-black tracking-[0.08em] uppercase text-emerald-800",
                icon: CheckCircleIcon,
                iconClass: "h-5 w-5",
                label: "Safe",
                panelClass: "rounded-lg border border-emerald-800/15 bg-emerald-500/5 px-3 py-3",
                textClass: "min-w-0 text-[10px] leading-relaxed font-semibold text-emerald-900",
            };

    const StatusIcon = statusConfig.icon;

    return (
        <article className="relative flex h-full flex-col overflow-hidden rounded-xl border border-stone-900/10 bg-white/65 shadow-[0_3px_12px_rgba(28,25,23,0.04)]">
            <div className={statusConfig.badgeClass}>
                <StatusIcon className={statusConfig.iconClass} aria-hidden="true" />
                <strong className={statusConfig.labelClass}>{statusConfig.label}</strong>
            </div>
            <div className="relative flex items-center gap-3 p-3 text-left">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                    <AssetIcon name={ingredient.icon} className="h-11 w-11 object-contain" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                    <span
                        style={{ color: categoryColor }}
                        className="mt-1 inline-block text-[9px] font-black tracking-[0.14em] uppercase"
                    >
                        {formatLabel(ingredient.category)}
                    </span>
                    <h2 className="font-serif text-lg leading-tight font-black text-stone-900">
                        <HighlightedName name={ingredient.name} query={query} />
                    </h2>
                </div>
            </div>
            {isForbidden ? (
                <div id={`ingredient-details-${ingredient.id}`} className="px-3 pb-3">
                    <div className={statusConfig.panelClass}>
                        <p className={statusConfig.textClass}>{safetyReason}</p>
                    </div>
                </div>
            ) : isLimitedUse ? (
                <div id={`ingredient-details-${ingredient.id}`} className="px-3 pb-3">
                    <div className={statusConfig.panelClass}>
                        <p className={statusConfig.textClass}>{safetyReason}</p>
                    </div>
                </div>
            ) : (
                <div id={`ingredient-details-${ingredient.id}`} className="px-3 pb-3">
                    <div className="flex flex-1 flex-col gap-3 px-4 pb-3 text-emerald-950">
                        <div className="text-[10px] text-stone-600">
                            <div className="flex flex-wrap gap-2">
                                {ingredient.benefits.map((benefit) => (
                                    <span
                                        key={benefit}
                                        className="inline-flex items-center rounded-full border border-emerald-800/15 bg-emerald-500/5 px-2.5 py-1 font-semibold text-emerald-900"
                                    >
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {details.length > 0 && (
                            <div className={statusConfig.panelClass}>
                                <p className={statusConfig.textClass}>{details.join(" ")}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </article>
    );
};

export const IngredientSearch: React.FC = () => {
    const [query, setQuery] = useState("");
    const [selectedBenefits, setSelectedBenefits] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const normalizedQuery = normalizeSearchText(query.trim());

    const results = useMemo(
        () =>
            [...INGREDIENT_LIBRARY]
                .filter(
                    (ingredient) =>
                        normalizeSearchText(ingredient.name).includes(normalizedQuery) &&
                        (!selectedCategory || ingredient.category === selectedCategory),
                )
                .filter(
                    (ingredient) =>
                        selectedBenefits.length === 0 ||
                        selectedBenefits.some((benefit) => ingredient.benefits.includes(benefit)),
                )
                .sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" })),
        [normalizedQuery, selectedCategory, selectedBenefits],
    );

    return (
        <main className="mx-auto w-full max-w-6xl pb-20" aria-labelledby="ingredient-search-title">
            <PageHeading
                title="Find the right topper."
                subtitle="Ingredient Library"
                headingId="ingredient-search-title"
                className="pt-12 md:pt-0"
                // align="left"
                // adSlot="ingredient-library-page-header"
                details={() => (
                    <p>
                        Search the whole-food ingredient library for nutrition, benefits, and preparation notes.
                    </p>
                )}
            />
            <div className="mx-auto mt-10 flex w-full max-w-5xl flex-col items-stretch gap-6 lg:flex-row lg:items-start">
                <IngredientFilters
                    options={INGREDIENT_LIBRARY}
                    resultCount={results.length}
                    selectedBenefits={selectedBenefits}
                    setSelectedBenefits={setSelectedBenefits}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                <section
                    className="min-w-0 flex-1"
                    aria-live="polite"
                    aria-label="Ingredient search results"
                >
                    <div className="mb-4 flex items-center justify-between gap-4 border-b border-stone-900/10 pb-3">
                        <form
                            className="min-w-0 flex-1"
                            onSubmit={(event) => event.preventDefault()}
                            role="search"
                        >
                            <label className="sr-only" htmlFor="ingredient-search">
                                Search ingredients
                            </label>
                            <div className="flex items-center rounded-full border border-stone-900/15 bg-white/75 px-4 py-2 shadow-[0_5px_20px_rgba(28,25,23,0.08)] transition-shadow focus-within:border-amber-700/40 focus-within:shadow-[0_7px_24px_rgba(28,25,23,0.12)]">
                                <MagnifyingGlassIcon className="h-4 w-4 shrink-0 text-stone-500" aria-hidden="true" />
                                <input
                                    id="ingredient-search"
                                    type="search"
                                    value={query}
                                    onChange={(event) => setQuery(event.target.value)}
                                    placeholder="Search ingredients"
                                    className="min-w-0 flex-1 appearance-none bg-transparent px-3 font-sans text-sm text-stone-900 outline-none placeholder:text-stone-400 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
                                />
                                {query && (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        className="cursor-pointer rounded-full p-1 text-stone-500 transition-colors hover:bg-stone-900/8 hover:text-stone-900"
                                        aria-label="Clear ingredient search"
                                    >
                                        <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                                    </button>
                                )}
                            </div>
                        </form>
                        <span className="shrink-0 text-[10px] font-bold tracking-wider text-stone-500 uppercase">
                            {results.length} {results.length === 1 ? "result" : "results"}
                        </span>
                    </div>

                    {results.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2" role="list">
                            {results.map((ingredient) => (
                                <div key={ingredient.id} className="h-full" role="listitem">
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
            </div>
        </main>
    );
};
