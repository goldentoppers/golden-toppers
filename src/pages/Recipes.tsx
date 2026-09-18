import { PageHeading } from "../components/PageHeading";
import { RecipeCard } from "../components/RecipeCard";
import { recipes } from "../data/recipes";
import { useRecipeBuilder } from "../hooks/useRecipeBuilder";

export const Recipes = () => {
    const buildRecipe = useRecipeBuilder();

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
