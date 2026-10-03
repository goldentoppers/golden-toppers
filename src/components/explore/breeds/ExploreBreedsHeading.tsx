import React from "react";
import { PageHeading } from "../../PageHeading";

export const ExploreBreedsHeading: React.FC = () => {
    return (
        <PageHeading
            title="Breed Health"
            subtitle="Explore Canine Profiles"
            details={() => (
                <p>
                    Different breeds carry distinct physiological predispositions—from orthopedic wear to
                    oncological, cardiac, and digestive vulnerabilities. Explore how intentional whole-food toppers
                    can provide targeted nutritional defenses tailored to your dog's unique genetic profile.
                </p>
            )}
        />
    );
};
