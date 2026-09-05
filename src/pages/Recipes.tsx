import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeading } from "../components/PageHeading";
import { recipes } from "../data/recipes";
import { AssetIcon } from "../components/AssetIcon";
import { GlobalControlOptionsContext, type SelectionsState } from "../contexts/GlobalControlOptionsContext";
import { chapterConfig } from "../data/chapter-config";

interface RecipeCardProps {
    recipe: (typeof recipes)[number];
    onBuild: (recipe: (typeof recipes)[number]) => void;
}

const RecipeCard = ({ recipe, onBuild }: RecipeCardProps) => {
    return (
        <article className="overflow-hidden rounded-lg border border-stone-900/10 bg-white/60 shadow-[0_3px_12px_rgba(28,25,23,0.06)]">
            <img src={recipe.image} alt={recipe.imageAlt} className="h-56 w-full object-cover" loading="lazy" />
            <div className="flex flex-col gap-4 p-6 text-center">
                <div className="flex items-start justify-between gap-4 px-6">
                    <div className="min-w-0 flex flex-1 flex-col items-center">
                        <h2 className="font-serif text-xl font-black text-stone-900">{recipe.title}</h2>
                        <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                            {recipe.tags.map((tag) => (
                                <span key={tag} className="rounded-md border border-amber-700/15 bg-amber-700/8 px-2 py-1 text-[9px] font-black tracking-[0.12em] text-amber-800 uppercase">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="flex shrink-0 items-center gap-2" aria-label="Recipe ingredients">
                        {recipe.ingredients.map((ingredient) => (
                            <span key={ingredient.id} title={ingredient.name}>
                                <AssetIcon name={ingredient.icon} className="h-10 w-10 object-contain" aria-hidden="true" />
                            </span>
                        ))}
                    </div>
                </div>

                <p className="px-6 text-sm leading-relaxed text-stone-700">{recipe.summary}</p>

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

export const Recipes = () => {
    const navigate = useNavigate();
    const { setSelections, setCurrentChapter, setIsReviewOpen } = useContext(GlobalControlOptionsContext);

    const buildRecipe = (recipe: (typeof recipes)[number]) => {
        const nextSelections: SelectionsState = {
            proteins: [],
            heartyBases: [],
            freshColors: [],
            energyBoosts: [],
            toppers: [],
        };

        recipe.ingredients.forEach((ingredient) => {
            const chapter = chapterConfig.find((config) => config.options.some((option) => option.id === ingredient.id));
            if (chapter && !nextSelections[chapter.id].includes(ingredient.id)) {
                nextSelections[chapter.id].push(ingredient.id);
            }
        });

        setSelections(nextSelections);
        setCurrentChapter("proteins");
        setIsReviewOpen(true);
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <main className="mx-auto w-full max-w-4xl pb-20" aria-labelledby="recipes-title">
            <div className="flex flex-col gap-8">
                <PageHeading title="Whole Food Topper Recipes" subtitle="Kitchen Notes" headingId="recipes-title" />
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-2" aria-label="Recipe posts">
                    {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onBuild={buildRecipe} />)}
                </section>
            </div>
        </main>
    );
};
