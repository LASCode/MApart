import { ReactNode } from "react";

export interface PageLayoutProps {
    withHeader?: boolean;
    withFooter?: boolean;
    children: ReactNode;
}