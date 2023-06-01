/* eslint-disable @next/next/no-img-element */
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";
import Image from "next/image";

import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import { BLUR_IMAGE } from "@/constants/stubs";
import { useIsMobile } from "@/hooks/useIsMobile";

import type { DoubleCarouselProps } from "./DoubleCarousel.types";

import styles from "./DoubleCarousel.module.scss";

const cx = cnBind.bind(styles);

export const DoubleCarousel = ({ images, className, ...props }: DoubleCarouselProps) => {
    const isMobile = useIsMobile();

    return (
        <div className={cx("carousel-container", className)}>
            <ReactCarousel
                {...props}
                showThumbs={false}
                showIndicators={false}
                animationHandler="fade"
                infiniteLoop
                autoPlay
                swipeable={false}
                statusFormatter={(current, total) =>
                    isMobile
                        ? ((
                              <>
                                  <span className={cx("current-slide")}>{current}</span> / {total}
                              </>
                          ) as unknown as string)
                        : ""
                }
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    !isMobile && (
                        <button className={cx("button-prev")} type="button" onClick={onClickHandler} title={label}>
                            <IcArrowLeft />
                        </button>
                    )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    !isMobile && (
                        <button className={cx("button-next")} type="button" onClick={onClickHandler} title={label}>
                            <IcArrowRight />
                        </button>
                    )
                }
            >
                {images.map((image) => (
                    <div className={cx("img-container")} key={image.bigImageSrc}>
                        <Image
                            className={cx("image-big")}
                            src={image.bigImageSrc}
                            alt={image.bigImageAlt}
                            placeholder="blur"
                            blurDataURL={BLUR_IMAGE}
                            width={816}
                            height={400}
                        />
                        <Image
                            className={cx("image")}
                            src={image.smallImageSrc}
                            alt={image.smallImageAlt}
                            placeholder="blur"
                            blurDataURL={BLUR_IMAGE}
                            width={309}
                            height={120}
                        />
                    </div>
                ))}
            </ReactCarousel>
        </div>
    );
};
