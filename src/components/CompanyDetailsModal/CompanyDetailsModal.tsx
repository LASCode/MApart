import { useMemo } from "react";
import cnBind from "classnames/bind";

import { Modal } from "@/components/Modal";
import { REQUISITES_CONFIG } from "@/configs/requisites";

import type { CompanyDetailsModalProps } from "./CompanyDetailsModal.types";

import styles from "./CompanyDetailsModal.module.scss";

const cx = cnBind.bind(styles);

export const CompanyDetailsModal = ({ className, ...props }: CompanyDetailsModalProps) => {
    const items = useMemo(() => Object.entries(REQUISITES_CONFIG).map((el) => ({ name: el[0], data: el[1] })), []);

    return (
        <Modal
            {...props}
            fullscreen
            hasHeader
            title="Реквизиты"
            className={cx("company-details-modal", className)}
            containerClassName={cx("modal-root")}
        >
            <div>
                {items.map((el) => (
                    <div key={el.name} className={cx("item")}>
                        <span className={cx("item-name")}>{el.name}:</span>
                        <span className={cx("item-data")}>{el.data}</span>
                    </div>
                ))}
            </div>
        </Modal>
    );
};
