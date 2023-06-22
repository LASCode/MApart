import cnBind from "classnames/bind";
import parceToHtml from "html-react-parser";

import { IcInfo } from "@/assets/icon";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { GLOBAL_CONFIG } from "@/configs";

import styles from "./BlockInfo.module.scss";

const cx = cnBind.bind(styles);

export const BlockInfo = () => {
    return GLOBAL_CONFIG.BLOCK_INFO_CONTENT ? (
        <SiteContentBlock className={cx("block-Info")}>
            <div className={cx("content")}>
                <IcInfo className={cx("icon")} />
                <div className={cx("text")}>{parceToHtml(GLOBAL_CONFIG.BLOCK_INFO_CONTENT)}</div>
            </div>
        </SiteContentBlock>
    ) : null;
};
