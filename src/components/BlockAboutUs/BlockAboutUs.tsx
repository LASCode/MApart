import cnBind from "classnames/bind";
import Image from "next/image";

import { IcVideoPlay } from "@/assets/icon";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { HOMEPAGE_CONFIG } from "@/configs";
import { MainAnchorType } from "@/routes";

import styles from "./BlockAboutUs.module.scss";

const cx = cnBind.bind(styles);

export const BlockAboutUs = () => {
    const subtitle = HOMEPAGE_CONFIG.ABOUT_US_SUBTITLE;
    const description = HOMEPAGE_CONFIG.ABOUT_US_DESCRIPTION;
    const videoThumbnail = HOMEPAGE_CONFIG.ABOUT_US_VIDEO_THUMBNAIL;
    // const videoLink = HOMEPAGE_CONFIG.ABOUT_US_VIDEO_LINk;

    return (
        <SiteContentBlock
            className={cx("block-about-us")}
            containerClassName={cx("background")}
            id={MainAnchorType.ABOUT_US}
        >
            {/* <Fancybox>*/}
            <div className={cx("content")}>
                <div className={cx("header-text")}>
                    <h2 className={cx("title")}>О нас</h2>
                    {subtitle && <h4 className={cx("subtitle")}>{subtitle}</h4>}
                    {description && <span className={cx("description")}>{description}</span>}
                </div>
                <span className={cx("header-image")}>
                    {/* <a className={cx("header-image")} data-fancybox="gallery" href={videoLink}>*/}
                    <Image className={cx("image")} src={videoThumbnail} alt="1" height={600} width={600} />
                    <IcVideoPlay className={cx("button-play")} />
                    {/* </a>*/}
                </span>
            </div>
            {/* </Fancybox>*/}
        </SiteContentBlock>
    );
};
