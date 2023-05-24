import { useEffect, useRef } from "react";
import cnBind from "classnames/bind";

import { SiteContentBlock } from "@/components/SiteContentBlock";
import useScript from "@/hooks/useScript";

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
                    uid: "92cc0b2a-ae45-4b0d-b362-30773c002258",
                    lang: "ru",
                    width: "100%",
                    width_mobile: "500",
                    background: "#ffffff",
                    background_mobile: "#ffffff",
                    bg_alpha: "100",
                    bg_alpha_mobile: "100",
                    border_color_mobile: "#C6CAD3",
                    padding: "24",
                    padding_mobile: "24",
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
                    btn_background: "#1875F0",
                    btn_background_over: "#1850D2",
                    btn_textcolor: "#FFFFFF",
                    btn_textover: "#FFFFFF",
                    btn_bordcolor: "#1875F0",
                    btn_bordhover: "#1850D2",
                    adults_default: "1",
                    cancel_color: "#FFFFFF",
                    switch_mobiles: "on",
                    switch_mobiles_width: "700",
                });
            });
        }
    }, [status]);

    return (
        <SiteContentBlock className={cx("block-widget")}>
            <div id="_test" />
        </SiteContentBlock>
    );
};