import React, { useMemo } from "react";
import { INGREDIENT_LIBRARY } from "../data/ingredients";
import type { Ingredient } from "../types/nutrition";
import { ExploreDataDisplay } from "../components/explore/ExploreBreedsDisplay";
import { ExploreIngredientsHeading } from "../components/explore/ingredients/ExploreIngredientsHeading";
import { ExploreIngredientSelectedDetails } from "../components/explore/ingredients/ExploreIngredientSelectedDetails";

export const IngredientSearch: React.FC = () => {
    // Sort ingredients alphabetically
    const alphabetizedIngredients = useMemo(
        () =>
            [...INGREDIENT_LIBRARY].sort((a, b) =>
                a.name.localeCompare(b.name, "en", { sensitivity: "base" })
            ),
        []
    );

    return (
        <ExploreDataDisplay
            dataSet={alphabetizedIngredients}
            heading={<ExploreIngredientsHeading />}
            details={(currentData: Ingredient) => (
                <ExploreIngredientSelectedDetails ingredient={currentData} />
            )}
            searchPlaceholder="Search by ingredient name, benefit (e.g. Joint, Coat), or vitamin..."
            filterLabel="Category:"
            itemLabel="Ingredients"
        />
    );
};
