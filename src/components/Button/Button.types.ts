import type { FC, ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    icon?: FC<React.SVGAttributes<SVGElement>>;
    className?: string;
}
