import type { SVGProps } from "react";
import pumpkinSpiceLatte from "../../pumpkin-spice-latte.svg";

export const PumpkinSpiceLatteIcon = ({ className, style, ...props }: SVGProps<SVGSVGElement>) => (
    <img
        src={pumpkinSpiceLatte}
        alt=""
        className={className}
        style={style}
        aria-hidden={props["aria-hidden"]}
    />
);
