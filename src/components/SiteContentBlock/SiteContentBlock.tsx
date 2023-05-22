import cnBind from "classnames/bind";

import type { SiteContentBlockProps } from "@/components/SiteContentBlock/SiteContentBlock.types";

import styles from "./SiteContentBlock.module.scss";

const cx = cnBind.bind(styles);

export const SiteContentBlock = ({ withSafeArea = true, className, children }: SiteContentBlockProps) => {
    return (
        <div className={cx("site-content-block", { "safe-area": withSafeArea })}>
            <div className={cx("content", className)}>{children}</div>
        </div>
    );
};
