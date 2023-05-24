import type { CarouselProps } from "@/components//Carousel/Carousel.types";

export interface RoomCardProps {
    images: CarouselProps["images"];
    name: string;
    price: number;
    onMoreButtonClick: () => void;
}
