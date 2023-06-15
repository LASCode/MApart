import { useEffect, useRef } from "react";
import cnBind from "classnames/bind";

import type { CreateOrderModalProps } from "@/components/CreateOrderModal/CreateOrderModal.types";
import { Modal } from "@/components/Modal";
import { WIDGET_SETTINGS } from "@/constants/widgetSettings";
import useScript from "@/hooks/useScript";

import styles from "./CreateOrderModal.module.scss";

const cx = cnBind.bind(styles);

export const CreateOrderModal = ({ roomId, ...props }: CreateOrderModalProps) => {
    return (
        <Modal {...props} hasHeader title="Заказать номер" className={cx("create-order-modal")}>
            <CreateOrderModalContent roomId={roomId} />
        </Modal>
    );
};

export const CreateOrderModalContent = ({ roomId }: { roomId?: string }) => {
    const status = useScript("https://widget.reservationsteps.ru/js/bnovo.js");
    const alreadyRendered = useRef(false);

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    useEffect(() => {
        if (status === "ready" && !alreadyRendered.current) {
            alreadyRendered.current = true;

            window.Bnovo_Widget.init(() => {
                window.Bnovo_Widget.open("booking_iframe1", {
                    ...WIDGET_SETTINGS,
                    type: "vertical",
                    onlyrooms: roomId ?? undefined,
                    lang: "ru",
                    width: "100%",
                    width_mobile: "100%",
                });
            });
        }
    }, [roomId, status]);

    return <div id="booking_iframe1" className={cx("iframe-container")} />;
};
