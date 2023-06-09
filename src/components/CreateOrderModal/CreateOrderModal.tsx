import { useEffect, useRef } from "react";
import cnBind from "classnames/bind";

import type { CreateOrderModalProps } from "@/components/CreateOrderModal/CreateOrderModal.types";
import { Modal } from "@/components/Modal";
import { GLOBAL_CONFIG } from "@/configs";
import useScript from "@/hooks/useScript";

import styles from "./CreateOrderModal.module.scss";

const cx = cnBind.bind(styles);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

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
                    type: "vertical",
                    uid: GLOBAL_CONFIG.BNOVO_WIDGET_TOKEN,
                    onlyrooms: roomId ?? undefined,
                    lang: "ru",
                    width: "100%",
                    width_mobile: "100%",
                    background: "#ffffff",
                    background_mobile: "#ffffff",
                    bg_alpha: "100",
                    bg_alpha_mobile: "100",
                    border_color_mobile: "#C6CAD3",
                    padding: "0",
                    padding_mobile: "0",
                    border_radius: "8",
                    font_type: "inter",
                    without_title: "on",
                    without_title_mobile: "on",
                    title_color: "#242742",
                    title_color_mobile: "#242742",
                    title_size: "22",
                    title_size_mobile: "22",
                    inp_color: "#242742",
                    inp_bordhover: "#dedfe3",
                    inp_bordcolor: "#BCBCBC",
                    inp_alpha: "100",
                    btn_background: "#f4ca00",
                    btn_background_over: "#c09d00",
                    btn_textcolor: "#000000",
                    btn_textover: "#000000",
                    btn_bordcolor: "#f4ca00",
                    btn_bordhover: "#c09d00",
                    adults_default: "1",
                    dates_preset: "on",
                    dfrom_tomorrow: "on",
                    dto_custom: "on",
                    dto_value: "5",
                    cancel_color: "#FFFFFF",
                    switch_mobiles: "on",
                    switch_mobiles_width: "700",
                });
            });
        }
    }, [roomId, status]);

    return <div id="booking_iframe1" className={cx("iframe-container")} />;
};
