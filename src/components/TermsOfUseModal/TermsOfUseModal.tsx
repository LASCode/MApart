import cnBind from "classnames/bind";

import { Modal } from "@/components/Modal";
import { TERMS_OF_USE_CONFIG } from "@/configs/termsOfUse";

import type { TermsOfUseModalProps } from "./TermsOfUseModal.types";

import styles from "./TermsOfUseModal.module.scss";

const cx = cnBind.bind(styles);

export const TermsOfUseModal = ({ className, ...props }: TermsOfUseModalProps) => {
    return (
        <Modal
            {...props}
            fullscreen
            hasHeader
            title="Пользовательское Соглашение"
            className={cx("terms-of-use-modal", className)}
            containerClassName={cx("modal-root")}
        >
            <div className={cx("content")}>
                {TERMS_OF_USE_CONFIG.map(({ blockName, content }, i) => (
                    <div key={i} className={cx("item")}>
                        {blockName && <h2 className={cx("item-title")}>{blockName}</h2>}
                        {typeof content === "string" ? (
                            <div className={cx("item-data")}>{content}</div>
                        ) : (
                            content.map(({ title, items }, i) => (
                                <div key={title || `${i}`} className={cx("item-data")}>
                                    {title && <h3 className={cx("item-name")}>{title}</h3>}
                                    {items.map((item) => (
                                        <span key={item} className={cx("item-row")}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            ))
                        )}
                        <div className={cx("item-data")} />
                    </div>
                ))}
            </div>
        </Modal>
    );
};
