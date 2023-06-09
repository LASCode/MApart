import type { ModalProps } from "@/components/Modal";

export interface TermsOfUseModalProps extends Omit<ModalProps, "children"> {
    className?: string;
}
