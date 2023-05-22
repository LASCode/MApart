import cnBind from "classnames/bind";

import { SiteContentBlock } from "@/components/SiteContentBlock";

import styles from "./BlockAboutUs.module.scss";

const cx = cnBind.bind(styles);

export const BlockAboutUs = () => {
    return (
        <SiteContentBlock className={cx("block-about-us")}>
            <div className={cx("content")} />
        </SiteContentBlock>
    );
};
