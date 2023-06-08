import { useCallback, useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";
import Image from "next/image";

import { IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { HOMEPAGE_CONFIG } from "@/configs";
import { BLUR_IMAGE } from "@/constants/stubs";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MainAnchorType } from "@/routes";
import { makeNestedArray } from "@/utils";

import { PhotosBlock } from "./PhotosBlock/PhotosBlock";

import styles from "./BlockGallery.module.scss";

const cx = cnBind.bind(styles);

export const BlockGallery = () => {
    const isMobile = useIsMobile();

    const [numberBlock, setNumberBlock] = useState(1);

    const galleryBlocks = useMemo(() => {
        return makeNestedArray(HOMEPAGE_CONFIG.GALLERY, 6);
    }, []);

    const onShowMoreButtonClick = useCallback(() => {
        setNumberBlock(numberBlock + 1);
    }, [numberBlock]);

    return (
        <SiteContentBlock id={MainAnchorType.GALLERY}>
            <div className={cx("content")}>
                <h2 className={cx("title")}>Галерея</h2>
                <div className={cx("gallery")}>
                    {isMobile ? (
                        // <Fancybox>
                        <Carousel
                            showThumbs={false}
                            showArrows={false}
                            swipeable
                            showStatus={false}
                            showIndicators={false}
                            centerSlidePercentage={80}
                            centerMode
                            emulateTouch
                        >
                            {HOMEPAGE_CONFIG.GALLERY.map((image, index) => (
                                <a className={cx("mobile-slide")} key={index} data-fancybox="gallery" href={image}>
                                    <Image
                                        src={image}
                                        width={170}
                                        height={220}
                                        alt="room"
                                        placeholder="blur"
                                        blurDataURL={BLUR_IMAGE}
                                        style={{ objectFit: "cover", padding: "0 5px" }}
                                    />
                                </a>
                            ))}
                        </Carousel>
                    ) : (
                        // </Fancybox>
                        // <Fancybox>
                        galleryBlocks.map((images, index) => (
                            <PhotosBlock isVisible={index + 1 <= numberBlock} key={index} images={images} />
                        ))
                        // </Fancybox>
                    )}
                </div>

                {galleryBlocks.length > numberBlock && !isMobile && (
                    <Button className={cx("button")} onClick={onShowMoreButtonClick} icon={IcArrowRight}>
                        Показать еще
                    </Button>
                )}
            </div>
        </SiteContentBlock>
    );
};
