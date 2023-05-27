import { useCallback, useEffect, useState } from "react";
import cnBind from "classnames/bind";

import { IcArrowUp } from "@/assets/icon";

import styles from "./ScrollToTopFab.module.scss";

const cx = cnBind.bind(styles);

export const ScrollToTopFab = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const showButton = scrollPosition > 500;
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = useCallback(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return showButton ? (
        <button type="button" className={cx("scroll-to-top-fab")} onClick={handleClick}>
            <IcArrowUp />
        </button>
    ) : null;
};
