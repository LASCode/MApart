import type { ReactNode } from "react";

export interface PageLayoutProps {
    withHeader?: boolean;
    withFooter?: boolean;
    className?: string;
    layoutClassName?: string;
    children: ReactNode;
}
