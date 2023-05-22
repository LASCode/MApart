import type { ReactNode } from "react";

export interface PageLayoutProps {
    withHeader?: boolean;
    withFooter?: boolean;
    className?: string;
    children: ReactNode;
}
