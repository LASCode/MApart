import type { ComponentProps, FC } from "react";
import type Link from "next/link";

export interface LinkProps extends ComponentProps<typeof Link> {
    label?: string;
    iconClassName?: string;
    iconPosition?: "start" | "end";
    icon?: FC<React.SVGAttributes<SVGElement>>;
}
