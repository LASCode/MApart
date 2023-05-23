import type { ComponentProps } from "react";
import type { Carousel as ReactCarousel } from "react-responsive-carousel";

export interface DoubleCarouselProps extends Partial<ComponentProps<typeof ReactCarousel>> {
    className?: string;
    images: {
        bigImageSrc: string;
        bigImageAlt: string;
        smallImageSrc: string;
        smallImageAlt: string;
    }[];
}
