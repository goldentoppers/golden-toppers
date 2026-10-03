import React from "react";
import { ExploreBreedsHeading } from "../components/explore/breeds/ExploreBreedsHeading";
import { ExploreBreedsSelectedDetails } from "../components/explore/breeds/ExploreBreedsSelectedDetails";
import { ExploreDataDisplay } from "../components/explore/ExploreBreedsDisplay";
import { ALL_BREEDS, type BreedHealthProfile } from "../data/breeds";
import { useBreed } from "../contexts/BreedContext";

export const BreedDetails: React.FC<{
    currentData?: BreedHealthProfile;
    breed?: BreedHealthProfile;
}> = ({ currentData, breed }) => {
    return <ExploreBreedsSelectedDetails breed={breed ?? currentData} />;
};

export const ExploreBreeds: React.FC = () => {
    const { selectedBreed, setSelectedBreed } = useBreed();

    return (
        <ExploreDataDisplay
            dataSet={ALL_BREEDS}
            heading={<ExploreBreedsHeading />}
            selectedId={selectedBreed?.id}
            onSelect={setSelectedBreed}
            itemLabel="Breeds"
            details={(currentData: BreedHealthProfile) => (
                <ExploreBreedsSelectedDetails breed={currentData} />
            )}
        />
    );
};
