import cnBind from "classnames/bind";

import { Button } from "../Button";

import type { RentBannerProps } from "./RentBanner.types";

import styles from "./RentBanner.module.scss";

const cx = cnBind.bind(styles);

export const RentBanner = ({ className }: RentBannerProps) => {
    return (
        <div className={cx("rent-banner", className)}>
            <h4 className={cx("title")}>Цены</h4>
            <div className={cx("price")}>
                <div className={cx("price-item")}>
                    <div className={cx("price-item-name")}>Выходные</div>
                    <div className={cx("price-item-value")}>600 руб. / сутки</div>
                </div>
                <div className={cx("price-item")}>
                    <div className={cx("price-item-name")}>Будние</div>
                    <div className={cx("price-item-value")}>600 руб. / сутки</div>
                </div>
                <div className={cx("price-item")}>
                    <div className={cx("price-item-name")}>Неделя</div>
                    <div className={cx("price-item-value")}>4000 руб</div>
                </div>
            </div>
            <div className={cx("button-wrapper")}>
                <Button className={cx("button")}>Забронировать</Button>
            </div>
        </div>
    );
};
