import type { ModalProps } from "@/components/Modal";

export interface CreateOrderModalProps extends Omit<ModalProps, "children"> {
    className?: string;
}
