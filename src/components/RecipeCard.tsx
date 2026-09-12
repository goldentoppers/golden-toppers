import { AssetIcon } from "./AssetIcon";
import { recipes } from "../data/recipes";

export interface RecipeCardProps {
    recipe: (typeof recipes)[number];
    onBuild: (recipe: (typeof recipes)[number]) => void;
}

export const RecipeCard = ({ recipe, onBuild }: RecipeCardProps) => {
    return (
        <article className="flex flex-row overflow-hidden rounded-lg border border-stone-900/10 bg-white/60 shadow-[0_3px_12px_rgba(28,25,23,0.06)]">
            <div className="relative min-h-64 w-1/2 shrink-0">
                <img src={recipe.image} alt={recipe.imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-3 px-3 py-5 text-center">
                <div className="flex shrink-0 items-end justify-center gap-2" aria-label="Recipe ingredients">
                    {recipe.ingredients.map((ingredient) => (
                        <span key={ingredient.id} title={ingredient.name}>
                            <AssetIcon name={ingredient.icon} className="h-8 w-8 object-contain" aria-hidden="true" />
                        </span>
                    ))}
                </div>
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex flex-1 flex-col items-center">
                        <h2 className="font-serif text-lg font-black text-stone-900">{recipe.title}</h2>
                        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                            {recipe.tags.map((tag) => (
                                <span key={tag} className="rounded-md border border-amber-700/15 bg-amber-700/8 px-2 py-1 text-[9px] font-black tracking-[0.12em] text-amber-800 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>

                <p className="text-sm leading-relaxed text-stone-700">{recipe.summary}</p>

                <button
                    type="button"
                    onClick={() => onBuild(recipe)}
                    className="mx-6 inline-flex cursor-pointer items-center justify-center rounded-lg bg-amber-700 px-4 py-2.5 text-[10px] font-black tracking-[0.18em] text-white uppercase shadow-[0_3px_8px_rgba(120,53,15,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-700 focus-visible:ring-offset-2 active:translate-y-0"
                >
                    Build This Bowl
                </button>
            </div>
        </article>
    );
};