import type { ReactNode } from "react";

export interface SiteContentBlockProps {
    withSafeArea?: boolean;
    className?: string;
    containerClassName?: string;
    id?: string;
    children: ReactNode;
}
