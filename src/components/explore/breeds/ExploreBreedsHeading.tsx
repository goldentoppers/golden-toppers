import React from "react";
import { PageHeading } from "../../PageHeading";

export const ExploreBreedsHeading: React.FC = () => {
    return (
        <PageHeading
            title="Breed Health"
            subtitle="Explore Canine Profiles"
            details={() => (
                <p>
                    Explore how intentional whole-food toppers
                    can provide targeted nutritional defenses tailored to your dog's unique genetic profile.
                </p>
            )}
        />
    );
};
