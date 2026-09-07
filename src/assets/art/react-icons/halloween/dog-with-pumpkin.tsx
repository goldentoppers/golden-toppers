import type { SVGProps } from "react";
import dogWithPumpkin from "../../halloween/dog-with-pumpkin.svg";

export const DogWithPumpkinIcon = ({ className, style, ...props }: SVGProps<SVGSVGElement>) => (
    <img
        src={dogWithPumpkin}
        alt=""
        className={className}
        style={style}
        aria-hidden={props["aria-hidden"]}
    />
);
