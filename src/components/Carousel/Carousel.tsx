/* eslint-disable @next/next/no-img-element */
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";

import { useIsMobile } from "@/hooks/useIsMobile";

import type { CarouselProps } from "./Carousel.types";

import styles from "./Carousel.module.scss";

const cx = cnBind.bind(styles);

export const Carousel = ({ images, className, ...props }: CarouselProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={cx("carousel-container", className)}>
            <ReactCarousel
                {...props}
                showThumbs={false}
                showArrows={!isMobile}
                swipeable
                showStatus={false}
                infiniteLoop
                emulateTouch
            >
                {images.map((image) => (
                    <div className={cx("image-container")} key={image.src}>
                        <img className={cx("image")} src={image.src} alt={image.alt} />
                    </div>
                ))}
            </ReactCarousel>
        </div>
    );
};
