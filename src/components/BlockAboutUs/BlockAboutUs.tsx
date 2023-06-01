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
                                src="https://downloader.disk.yandex.ru/preview/678304a98f3c8b9099a67eabfe872bcfd90feed7693ba92dd2af594d08bb7991/64782744/xAxN69xWCMnXMMu-oBq3MQkCfAoWj1eSU4sv3EHJOpGiFZRpYliAAMv_-zX6QUt0bl6bbmk6klzbYYVrdqe72g%3D%3D?uid=0&filename=room-template-about-us.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048"
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
                            src="https://downloader.disk.yandex.ru/preview/678304a98f3c8b9099a67eabfe872bcfd90feed7693ba92dd2af594d08bb7991/64782744/xAxN69xWCMnXMMu-oBq3MQkCfAoWj1eSU4sv3EHJOpGiFZRpYliAAMv_-zX6QUt0bl6bbmk6klzbYYVrdqe72g%3D%3D?uid=0&filename=room-template-about-us.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048"
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
