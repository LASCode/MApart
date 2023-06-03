import type { CarouselProps } from "@/components//Carousel/Carousel.types";

export interface RoomCardProps {
    images: CarouselProps["images"];
    name: string;
    price: number;
    onRentButtonCLick?: () => void;
    onMouseEnter?: (name: string) => void;
    onMouseLeave?: (name: string) => void;
    className?: string;
}
