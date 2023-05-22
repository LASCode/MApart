import cnBind from "classnames/bind";

import type { CompanyRatingProps } from "@/components/CompanyRating/CompanyRating.types";

import styles from "./CompanyRating.module.scss";

const cx = cnBind.bind(styles);

export const CompanyRating = ({ rate, maxRate = 10, companyName, className }: CompanyRatingProps) => {
    return (
        <div className={cx("company-rating", className)}>
            <div className={cx("content")}>
                <span className={cx("text-company")}>{companyName}</span>

                <div className={cx("rate-container")}>
                    <span className={cx("text-rate-current")}>{rate.toString().replace(".", ",")}</span>
                    <span className={cx("text-rate-max")}>&nbsp;/&nbsp;{maxRate}</span>
                </div>
            </div>
        </div>
    );
};
