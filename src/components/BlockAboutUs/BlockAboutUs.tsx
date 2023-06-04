import cnBind from "classnames/bind";
import Image from "next/image";

import { IcVideoPlay } from "@/assets/icon";
import { Fancybox } from "@/components/Fancy";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { MainAnchorType } from "@/routes";

import styles from "./BlockAboutUs.module.scss";

const cx = cnBind.bind(styles);

export const BlockAboutUs = () => {
    return (
        <SiteContentBlock
            className={cx("block-about-us")}
            containerClassName={cx("background")}
            id={MainAnchorType.ABOUT_US}
        >
            <Fancybox>
                <div className={cx("content")}>
                    <div className={cx("header-text")}>
                        <h2 className={cx("title")}>О нас</h2>
                        <h4 className={cx("subtitle")}>Апарт отель в одном из уютнейших уголков Петербурга</h4>
                        <span className={cx("description")}>
                            MApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом
                            пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная
                            двуспальная кровать, личный санузел и ТВ.
                        </span>
                    </div>
                    <a
                        className={cx("header-image")}
                        data-fancybox="gallery"
                        href="https://images2.imgbox.com/8c/69/1uPNnic9_o.jpg"
                    >
                        <Image
                            className={cx("image")}
                            src="https://images2.imgbox.com/8c/69/1uPNnic9_o.jpg"
                            alt="1"
                            height={600}
                            width={600}
                        />
                        <IcVideoPlay className={cx("button-play")} />
                    </a>
                </div>
            </Fancybox>
        </SiteContentBlock>
    );
};
