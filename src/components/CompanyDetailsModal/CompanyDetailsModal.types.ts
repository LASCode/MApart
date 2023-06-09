import type { ModalProps } from "@/components/Modal";

export interface CompanyDetailsModalProps extends Omit<ModalProps, "children"> {
    className?: string;
}
