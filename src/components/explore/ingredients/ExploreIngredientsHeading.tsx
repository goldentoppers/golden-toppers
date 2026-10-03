import React from "react";
import { PageHeading } from "../../PageHeading";

export const ExploreIngredientsHeading: React.FC = () => {
    return (
        <PageHeading
            title="Finding the Right Ingredients"
            subtitle="Ingredient Library"
            details={() => (
                <p>Search the whole-food ingredient library for nutrition, benefits, and preparation notes.</p>
            )}
        />
    );
};
