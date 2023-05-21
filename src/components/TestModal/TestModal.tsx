import {TestModalProps} from "@/components/TestModal/TestModal.types";
import {Portal} from "next/dist/client/portal";

export const TestModal = ({}: TestModalProps) => {


    return (
        <Portal type="s">
            <div>test</div>
        </Portal>
    );
}