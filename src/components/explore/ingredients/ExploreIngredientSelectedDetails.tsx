import React from "react";
import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
    NoSymbolIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid";
import { AssetIcon } from "../../icon/AssetIcon";
import type { Ingredient } from "../../../types/nutrition";

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

const formatLabel = (value: string) => value.replace(/-/g, " ");

interface ExploreIngredientSelectedDetailsProps {
    ingredient?: Ingredient | null;
}

export const ExploreIngredientSelectedDetails: React.FC<ExploreIngredientSelectedDetailsProps> = ({
    ingredient,
}) => {
    if (!ingredient) return null;

    const categoryColor = rawCategoryColors[ingredient.category] || "#b45309";
    const isForbidden =
        ingredient.isToxic ||
        ingredient.maxGramsCap === 0 ||
        ingredient.preparation?.toLowerCase().includes("avoid entirely") ||
        ingredient.preparation?.toLowerCase().includes("do not serve") ||
        ingredient.preparation?.toLowerCase().includes("prohibited");
    const isLimitedUse = ingredient.isHighRisk && !isForbidden;

    const statusConfig = isForbidden
        ? {
            label: "Not Safe for Dogs",
            badgeClass: "bg-red-50 text-red-900 border-red-200",
            icon: NoSymbolIcon,
            panelClass: "rounded-xl border border-red-900/15 bg-red-900/5 p-4 text-red-900",
            defaultReason: "This ingredient contains compounds that are toxic or hazardous to dogs.",
        }
        : isLimitedUse
            ? {
                label: "Use with Caution",
                badgeClass: "bg-amber-50 text-amber-900 border-amber-200",
                icon: ExclamationTriangleIcon,
                panelClass: "rounded-xl border border-amber-700/15 bg-amber-500/5 p-4 text-amber-950",
                defaultReason: "This ingredient carries potential digestive or physical risks; use strictly in tiny topper amounts.",
            }
            : {
                label: "Safe Whole Food Topper",
                badgeClass: "bg-emerald-50 text-emerald-900 border-emerald-200",
                icon: CheckCircleIcon,
                panelClass: "rounded-xl border border-emerald-800/15 bg-emerald-500/5 p-4 text-emerald-950",
                defaultReason: "Safe, nutritious supplemental addition to a balanced bowl.",
            };

    const StatusIcon = statusConfig.icon;

    return (
        <article
            className="flex flex-col gap-6 w-full"
            aria-label={`${ingredient.name} Ingredient Details`}
        >
            {/* Header */}
            <header className="flex flex-col gap-3 border-b border-stone-200 pb-5">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-amber-700/10 p-2">
                            <AssetIcon name={ingredient.icon} className="h-12 w-12 object-contain" />
                        </div>
                        <div>
                            <h2 className="font-serif text-2xl font-black text-stone-900">
                                {ingredient.name}
                            </h2>
                            <span
                                style={{ color: categoryColor }}
                                className="text-[10px] font-black uppercase tracking-wider"
                            >
                                {formatLabel(ingredient.category)}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                    <span
                        className={`inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-[10px] font-black uppercase tracking-wider ${statusConfig.badgeClass}`}
                    >
                        <StatusIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {statusConfig.label}
                    </span>
                    {ingredient.kcalPerGram > 0 && (
                        <span className="text-[11px] font-semibold text-stone-500">
                            ~{Math.round(ingredient.kcalPerGram * 100)} kcal / 100g
                        </span>
                    )}
                </div>
            </header>

            {/* Safety & Preparation Warnings */}
            {(ingredient.preparationAlert || isForbidden || isLimitedUse) && (
                <section aria-label="Safety warnings" className={statusConfig.panelClass}>
                    <div className="flex items-start gap-2.5">
                        <StatusIcon className="h-5 w-5 shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="space-y-1">
                            <h3 className="text-xs font-black uppercase tracking-wider">
                                Safety Notice
                            </h3>
                            <p className="text-xs leading-relaxed font-medium">
                                {ingredient.preparationAlert || statusConfig.defaultReason}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Preparation Instructions */}
            {ingredient.preparation && (
                <section aria-labelledby="prep-heading" className="space-y-1.5">
                    <h3
                        id="prep-heading"
                        className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                    >
                        Preparation Instructions
                    </h3>
                    <p className="rounded-xl border border-stone-900/5 bg-stone-50/50 p-3.5 text-xs leading-relaxed text-stone-700">
                        {ingredient.preparation}
                    </p>
                </section>
            )}

            {/* Benefits */}
            {ingredient.benefits && ingredient.benefits.length > 0 && (
                <section aria-labelledby="benefits-heading" className="space-y-2.5">
                    <div className="flex items-center gap-2">
                        <SparklesIcon className="h-4 w-4 text-emerald-700" aria-hidden="true" />
                        <h3
                            id="benefits-heading"
                            className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                        >
                            Nutritional & Functional Benefits
                        </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {ingredient.benefits.map((benefit) => (
                            <span
                                key={benefit}
                                className="inline-flex items-center rounded-lg border border-emerald-800/15 bg-emerald-500/5 px-3 py-1 text-xs font-semibold text-emerald-900"
                            >
                                {benefit}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* Vitamins & Minerals */}
            {ingredient.vitamins && ingredient.vitamins.length > 0 && (
                <section aria-labelledby="vitamins-heading" className="space-y-2.5 border-t border-stone-200 pt-5">
                    <h3
                        id="vitamins-heading"
                        className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                    >
                        Key Micronutrients
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                        {ingredient.vitamins.map((vitamin) => (
                            <span
                                key={vitamin}
                                className="inline-flex items-center rounded-md border border-stone-200 bg-stone-100 px-2 py-0.5 text-[11px] font-medium text-stone-700"
                            >
                                {vitamin}
                            </span>
                        ))}
                    </div>
                </section>
            )}
        </article>
    );
};
