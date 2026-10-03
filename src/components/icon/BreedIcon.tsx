import React from "react";
import { getBreedSvgUrl } from "../../data/breed-svgs";
import { AssetIcon } from "./AssetIcon";

interface BreedIconProps {
    svgKey?: string;
    breedName?: string;
    fallbackIcon?: string;
    className?: string;
    color?: string;
    tint?: boolean;
}

export const BreedIcon: React.FC<BreedIconProps> = ({
    svgKey,
    breedName = "Dog breed",
    fallbackIcon = "standing",
    className = "h-8 w-8",
    color,
    tint = false,
}) => {
    const svgUrl = getBreedSvgUrl(svgKey || breedName);

    if (svgUrl) {
        if (tint && color) {
            return (
                <span
                    className={`inline-block shrink-0 ${className}`}
                    style={{
                        backgroundColor: color,
                        maskImage: `url(${svgUrl})`,
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: `url(${svgUrl})`,
                        WebkitMaskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                    }}
                    role="img"
                    aria-label={breedName}
                />
            );
        }

        return (
            <img
                src={svgUrl}
                alt={breedName}
                className={`inline-block shrink-0 object-contain ${className}`}
                loading="lazy"
            />
        );
    }

    return <AssetIcon name={fallbackIcon} color={color} className={className} />;
};
