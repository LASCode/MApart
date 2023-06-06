import type { CSSProperties, ReactNode } from "react";

import type { HeaderProps } from "@/components/Header/Header.types";

export interface PageLayoutProps {
    withHeader?: boolean;
    withFooter?: boolean;
    className?: string;
    layoutClassName?: string;
    headerProps?: HeaderProps;
    children: ReactNode;
    layoutStyles?: CSSProperties;
}
