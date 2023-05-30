import { useCallback, useMemo, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";
import Image from "next/image";

import { IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { galleryPhotos } from "@/constants/gallery";
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
        return makeNestedArray(galleryPhotos, 6);
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
                        <Carousel
                            showThumbs={false}
                            showArrows={false}
                            swipeable
                            showStatus={false}
                            showIndicators={false}
                            centerSlidePercentage={80}
                            centerMode
                        >
                            {galleryPhotos.map((image, index) => (
                                <div key={index}>
                                    <Image
                                        src={image}
                                        width={170}
                                        height={220}
                                        alt="room"
                                        style={{ objectFit: "cover", padding: "0 5px" }}
                                    />
                                </div>
                            ))}
                        </Carousel>
                    ) : (
                        galleryBlocks
                            .slice(0, numberBlock)
                            .map((images, index) => <PhotosBlock key={index} images={images} />)
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
