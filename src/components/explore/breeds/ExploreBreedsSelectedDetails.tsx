import React from "react";
import {
    ArrowRightIcon,
    ShieldExclamationIcon,
    SparklesIcon,
} from "@heroicons/react/24/solid";
import { BreedIcon } from "../../icon/BreedIcon";
import type { BreedHealthProfile } from "../../../data/breeds";
import { useBreed } from "../../../contexts/BreedContext";
import { useBreedRecipeBuilder } from "../../../hooks/useRecipeBuilder";

interface ExploreBreedsSelectedDetailsProps {
    breed?: BreedHealthProfile | null;
}

export const ExploreBreedsSelectedDetails: React.FC<ExploreBreedsSelectedDetailsProps> = ({ breed: propBreed }) => {
    const { selectedBreed: contextBreed } = useBreed();
    const breed = propBreed ?? contextBreed;
    const buildBreedRecipe = useBreedRecipeBuilder();

    if (!breed) return null;

    const handleBuildRecipe = () => {
        buildBreedRecipe(breed);
    };

    return (
        <article
            className="flex flex-col gap-6 w-full"
            aria-label={`${breed.name} Medical Patterns`}
        >
            {/* Header */}
            <header>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                    <div className="flex h-36 w-36 sm:h-40 sm:w-40 shrink-0 items-center justify-center rounded-xl">
                        <BreedIcon
                            svgKey={breed.svgKey || breed.name}
                            breedName={breed.name}
                            fallbackIcon={breed.icon}
                            className="h-32 w-32 sm:h-36 sm:w-36"
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-2.5 text-center sm:text-left min-w-0">
                        <div>
                            <h2 className="font-serif text-2xl font-black text-stone-900">
                                {breed.name}
                            </h2>
                            <span className="text-[10px] font-black uppercase tracking-wider text-amber-800">
                                {breed.category} Group
                            </span>
                        </div>

                        <p className="text-xs leading-relaxed text-stone-600 font-medium">
                            {breed.overview}
                        </p>

                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-0.5 text-[11px] font-bold text-stone-600">
                            <div className="flex items-center gap-1.5">
                                <span className="text-stone-400 font-normal">Typical Weight:</span>
                                <span className="text-stone-800">{breed.weightRange}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-stone-400 font-normal">Average Lifespan:</span>
                                <span className="text-stone-800">{breed.lifespan}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Health & Medical Predispositions */}
            <section aria-labelledby="predispositions-heading" className="space-y-3">
                <div className="flex items-center gap-2">
                    <ShieldExclamationIcon className="h-4 w-4 text-amber-700" aria-hidden="true" />
                    <h3
                        id="predispositions-heading"
                        className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                    >
                        Clinical & Health Predispositions
                    </h3>
                </div>

                <div className="space-y-2.5">
                    {breed.healthPredispositions.map((item) => {
                        const riskBadge =
                            item.riskLevel === "High"
                                ? "bg-red-50 text-red-900 border-red-200"
                                : item.riskLevel === "Moderate"
                                    ? "bg-amber-50 text-amber-900 border-amber-200"
                                    : "bg-stone-100 text-stone-800 border-stone-200";

                        return (
                            <div
                                key={item.condition}
                                className="rounded-xl border border-stone-900/5 bg-stone-50/50 p-3.5 space-y-1.5"
                            >
                                <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-xs font-black text-stone-900">
                                        {item.condition}
                                    </h4>
                                    <span
                                        className={`rounded-md border px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider ${riskBadge}`}
                                    >
                                        {item.riskLevel} Risk
                                    </span>
                                </div>
                                <p className="text-[11px] leading-relaxed text-stone-600">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Recommended Fresh Toppers */}
            <section aria-labelledby="toppers-heading" className="space-y-2.5 border-t border-stone-200 pt-5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2.5 min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                            <SparklesIcon className="h-4 w-4 text-amber-700" aria-hidden="true" />
                            <h3
                                id="toppers-heading"
                                className="text-[11px] font-black uppercase tracking-widest text-stone-900"
                            >
                                Top Recommended Whole-Food Toppers
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {breed.recommendedToppers.map((topper) => (
                                <span
                                    key={topper}
                                    className="inline-flex items-center rounded-lg border border-amber-700/20 bg-amber-50/70 px-2.5 py-1 text-[11px] font-bold text-amber-900"
                                >
                                    {topper}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={handleBuildRecipe}
                        className="self-start sm:self-center shrink-0 inline-flex items-center justify-center gap-2 rounded-xl bg-amber-700 px-4 py-2.5 font-sans text-[11px] font-black tracking-widest text-white uppercase shadow-2xs hover:bg-amber-800 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                        title={`Build recipe with ${breed.name} recommended toppers`}
                    >
                        <span>Build Recipe</span>
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                    </button>
                </div>
            </section>
        </article>
    );
};
