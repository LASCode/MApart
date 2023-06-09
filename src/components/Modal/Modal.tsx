import { useEffect } from "react";
import cnBind from "classnames/bind";
import { Portal } from "next/dist/client/portal";

import { IcClose } from "@/assets/icon";
import type { ModalProps } from "@/components/Modal/Modal.types";

import styles from "./Modal.module.scss";

const cx = cnBind.bind(styles);

export const Modal = ({
    isOpen,
    onClose,
    children,
    hasHeader,
    title,
    className,
    containerClassName,
    fullscreen,
}: ModalProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <Portal type="div">
            <div className={cx("modal")}>
                <div className={cx("backdrop")} onClick={onClose} />
                <div className={cx("container", containerClassName, { fullscreen })}>
                    {hasHeader && (
                        <div className={cx("header")}>
                            <h3 className={cx("title")}>{title}</h3>
                            <div className={cx("actions")}>
                                <button type="button" className={cx("action")} onClick={onClose}>
                                    <IcClose />
                                </button>
                            </div>
                        </div>
                    )}
                    <div className={cx("content", className, { fullscreen })}>{children}</div>
                </div>
            </div>
        </Portal>
    );
};
