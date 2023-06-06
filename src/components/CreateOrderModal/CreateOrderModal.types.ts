import type { ModalProps } from "@/components/Modal";

export interface CreateOrderModalProps extends Omit<ModalProps, "children"> {
    roomId?: string;
    className?: string;
}
