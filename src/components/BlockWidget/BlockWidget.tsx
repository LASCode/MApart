import { useEffect, useRef } from "react";
import cnBind from "classnames/bind";

import { SiteContentBlock } from "@/components/SiteContentBlock";
import { WIDGET_SETTINGS } from "@/constants/widgetSettings";
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
                    ...WIDGET_SETTINGS,
                    type: "horizontal",
                    lang: "ru",
                    width: "100%",
                    width_mobile: "500",
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
