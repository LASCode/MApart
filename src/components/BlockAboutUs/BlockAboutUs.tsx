import cnBind from "classnames/bind";
import Image from "next/image";

import { IcVideoPlay } from "@/assets/icon";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MainAnchorType } from "@/routes";

import styles from "./BlockAboutUs.module.scss";

const cx = cnBind.bind(styles);

export const BlockAboutUs = () => {
    const isMobile = useIsMobile();

    return (
        <SiteContentBlock
            className={cx("block-about-us")}
            containerClassName={cx("background")}
            id={MainAnchorType.ABOUT_US}
        >
            <div className={cx("content")}>
                <div className={cx("block-text")}>
                    <div className={cx("block-text-header")}>
                        <div>
                            <h2 className={cx("title")}>О нас</h2>
                            <h4 className={cx("subtitle")}>Апарт отель в одном из уютнейших уголков Петербурга</h4>
                        </div>

                        {isMobile && (
                            <Image
                                className={cx("image-mobile")}
                                src="https://i.ibb.co/KLPycBz/room-template-about-us.png"
                                alt="1"
                                width={156}
                                height={216}
                            />
                        )}
                    </div>
                    <span className={cx("description")}>
                        MApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве
                        располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная
                        кровать, личный санузел и ТВ.
                    </span>
                </div>
                <div className={cx("block-video")}>
                    <IcVideoPlay />
                </div>
                {!isMobile && (
                    <div className={cx("block-image")}>
                        <Image
                            className={cx("image-desktop")}
                            src="https://i.ibb.co/KLPycBz/room-template-about-us.png"
                            alt="1"
                            width={500}
                            height={740}
                        />
                    </div>
                )}
            </div>
        </SiteContentBlock>
    );
};
