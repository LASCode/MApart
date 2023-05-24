import type { ComponentProps } from "react";
import type { Carousel as ReactCarousel } from "react-responsive-carousel";

export interface CarouselProps extends Partial<ComponentProps<typeof ReactCarousel>> {
    className?: string;
    images: {
        href: string;
        alt: string;
    }[];
}
