import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeading } from "../components/PageHeading";
import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import { GlobalControlOptionsContext, type SelectionsState } from "../contexts/GlobalControlOptionsContext";
import { chapterConfig } from "../data/chapter-config";

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
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                window.scrollTo({ top: 0, left: 0, behavior: "auto" });
            });
        });
    };

    return (
        <main className="mx-auto w-full max-w-4xl pb-20" aria-labelledby="recipes-title">
            <div
                className="flex flex-col gap-8 rounded-2xl border border-stone-900/10 bg-white/70 px-4
                    py-8 shadow-[0_8px_28px_rgba(28,25,23,0.08)] sm:px-10 sm:py-10"
            >
                <PageHeading title="Whole Food Topper Recipes" subtitle="Kitchen Notes" headingId="recipes-title" />
                <section className="grid grid-cols-1 gap-5 lg:grid-cols-1" aria-label="Recipe posts">
                    {recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} onBuild={buildRecipe} />)}
                </section>
            </div>
        </main>
    );
};
