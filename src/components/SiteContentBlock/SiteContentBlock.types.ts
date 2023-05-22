import type { ReactNode } from "react";

export interface SiteContentBlockProps {
    withSafeArea?: boolean;
    className?: string;
    children: ReactNode;
}
