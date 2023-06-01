/* eslint-disable @next/next/no-img-element */
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";
import Image from "next/image";

import { useIsMobile } from "@/hooks/useIsMobile";

import type { CarouselProps } from "./Carousel.types";

import styles from "./Carousel.module.scss";

const cx = cnBind.bind(styles);

export const Carousel = ({ images, className, ...props }: CarouselProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={cx("carousel-container", className)} onTouchStart={(e) => e.stopPropagation()}>
            <ReactCarousel
                {...props}
                showThumbs={false}
                showArrows={!isMobile}
                swipeable
                showStatus={false}
                infiniteLoop
                emulateTouch={!isMobile}
            >
                {images.map((image) => (
                    <div className={cx("image-container")} key={image.src}>
                        <Image
                            className={cx("image")}
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={300}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcXQ8AAbsBHLLDr5MAAAAASUVORK5CYII="
                        />
                    </div>
                ))}
            </ReactCarousel>
        </div>
    );
};
