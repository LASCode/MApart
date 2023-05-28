import cnBind from "classnames/bind";

import { SiteContentBlock } from "@/components/SiteContentBlock";
import { MainAnchorType } from "@/routes";

import styles from "./BlockGallery.module.scss";

const cx = cnBind.bind(styles);

export const BlockGallery = () => {
    return (
        <SiteContentBlock
            className={cx("block-about-us")}
            containerClassName={cx("background")}
            id={MainAnchorType.ABOUT_US}
        >
            <div className={cx("content")} />
        </SiteContentBlock>
    );
};
