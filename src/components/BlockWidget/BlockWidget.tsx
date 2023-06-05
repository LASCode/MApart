import { useEffect, useRef } from "react";
import cnBind from "classnames/bind";

import { SiteContentBlock } from "@/components/SiteContentBlock";
import useScript from "@/hooks/useScript";
import { MainAnchorType } from "@/routes";

import styles from "./BlockWidget.module.scss";

const cx = cnBind.bind(styles);

export const BlockWidget = () => {
    const status = useScript("https://widget.reservationsteps.ru/js/bnovo.js");
    const alreadyRendered = useRef(false);

    useEffect(() => {
        if (status === "ready" && !alreadyRendered.current) {
            alreadyRendered.current = true;
            window.Bnovo_Widget.init(() => {
                window.Bnovo_Widget.open("_test", {
                    type: "horizontal",
                    uid: "3a67f48f-c5a6-400f-b77a-f6a6a20d5e12",
                    lang: "ru",
                    width: "100%",
                    width_mobile: "500",
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
                    cancel_color: "#FFFFFF",
                    switch_mobiles: "on",
                    switch_mobiles_width: "700",
                });
            });
        }
    }, [status]);

    return (
        <SiteContentBlock className={cx("block-widget")} id={MainAnchorType.ORDER}>
            <span className={cx("title")}>Забронировать</span>
            <div id="_test" />
        </SiteContentBlock>
    );
};
