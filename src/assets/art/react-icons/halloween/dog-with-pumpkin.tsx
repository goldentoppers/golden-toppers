import type { SVGProps } from "react";
import dogWithPumpkin from "../../halloween/dog-with-pumpkin.svg";

export const DogWithPumpkinIcon = ({ className, color, style, ...props }: SVGProps<SVGSVGElement>) => (
    <span
        className={className}
        style={{
            ...style,
            display: "inline-block",
            backgroundColor: color ?? style?.color ?? "currentColor",
            maskImage: `url(${dogWithPumpkin})`,
            maskPosition: "center",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskImage: `url(${dogWithPumpkin})`,
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
        }}
        {...props}
        aria-hidden={props["aria-hidden"]}
    />
);
