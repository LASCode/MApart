import type { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    hasHeader?: boolean;
    className?: string;
    children: ReactNode;
}
