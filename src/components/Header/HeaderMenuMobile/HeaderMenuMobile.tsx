import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import type { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import type { ArgumentArray } from "classnames";
import cnBind from "classnames/bind";
import Link from "next/link";

import { HEADER_TEL_NUMBER } from "@/components/Header/Header.constants";
import type { HeaderMenuMobileProps } from "@/components/Header/HeaderMenuMobile/HeaderMenuMobile.types";
import { HeaderNavigation } from "@/components/Header/HeaderNavigation";
import { Socials } from "@/components/Socials/Socials";

import styles from "./HeaderMenuMobile.module.scss";

const cx = cnBind.bind(styles);

const getClassNames = (cx: (...args: ArgumentArray) => string): CSSTransitionClassNames => ({
    enterDone: cx("enter-done"),
    enterActive: cx("enter-active"),
    exitDone: cx("exit-done"),
    exitActive: cx("exit-active"),
});

export const HeaderMenuMobile = ({ onClose, isOpen, className }: HeaderMenuMobileProps) => {
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <CSSTransition nodeRef={nodeRef} in={isOpen} timeout={3000} unmountOnExit classNames={getClassNames(cx)}>
            <div className={cx("header-menu-mobile", className)} ref={nodeRef}>
                <div className={cx("content")}>
                    <HeaderNavigation className={cx("navigation")} vertical onClick={onClose} />
                    <div className={cx("additional")}>
                        <Link className={cx("tel")} href={`tel:${HEADER_TEL_NUMBER.trim()}`}>
                            {HEADER_TEL_NUMBER}
                        </Link>
                        <Socials />
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};
