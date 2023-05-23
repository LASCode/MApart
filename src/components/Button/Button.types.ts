import type { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

export type ButtonProps = {
    children: ReactNode;
    ref?: React.Ref<HTMLButtonElement>;
    icon?: FC<React.SVGAttributes<SVGElement>>;
} & Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">;
