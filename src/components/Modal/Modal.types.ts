import type { ReactNode } from "react";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    hasHeader?: boolean;
    className?: string;
    containerClassName?: string;
    children: ReactNode;
}
