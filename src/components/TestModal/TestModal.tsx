import { Portal } from "next/dist/client/portal";

import type { TestModalProps } from "@/components/TestModal/TestModal.types";

export const TestModal = ({}: TestModalProps) => {
    return (
        <Portal type="s">
            <div>test</div>
        </Portal>
    );
};
