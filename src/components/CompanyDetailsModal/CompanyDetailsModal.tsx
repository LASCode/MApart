import { useMemo } from "react";
import cnBind from "classnames/bind";

import { Modal } from "@/components/Modal";

import type { CompanyDetailsModalProps } from "./CompanyDetailsModal.types";

import styles from "./CompanyDetailsModal.module.scss";

const cx = cnBind.bind(styles);

export const CompanyDetailsModal = ({ className, ...props }: CompanyDetailsModalProps) => {
    const items = useMemo(
        () => [
            { name: "Расчётный счёт", data: "4080 2810 7015 0037 9280" },
            { name: "Название банка", data: 'ООО "Банк Точка"' },
            { name: "БИК", data: "044 525 104" },
            { name: "Корр. счёт", data: "3010 1810 7453 7452 5104" },
            { name: "Дата открытия", data: "05 мая 2023" },
            { name: "Наименование", data: "Индивидуальный предприниматель Ризванов Марат Азатович" },
            { name: "ИНН", data: "0217 0255 8746" },
            { name: "ОГРНИП", data: "31402 80000 48058" },
            { name: "ОКПО", data: "0192 4019 12" },
            { name: "ОКТМО", data: "40 306 000 000" },
            {
                name: "Юридический адрес",
                data: "198095, РОССИЯ, г САНКТ-ПЕТЕРБУРГ, ул ШКАПИНА, ДОМ 22, корпус лит а, кв 32",
            },
            { name: "ОКВЭД основной", data: "62.09" },
            { name: "ОКВЭД дополнительные", data: "63.12, 73.11, 55.20" },
            { name: "ИНН банка", data: "9721 1944 61" },
            { name: "КПП банка", data: "997 950 001" },
            {
                name: "Юридический адрес банка",
                data: "109456, РОССИЯ, МОСКВА г.  1-Й ВЕШНЯКОВСКИЙ пр, ДОМ 1 СТР8, 1 этаж, пом.№43",
            },
            { name: "Контакты банка", data: "8 (800) 200-00-24, +7 (495) 258 33 50" },
        ],
        [],
    );

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
