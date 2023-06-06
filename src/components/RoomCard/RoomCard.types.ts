import type { CarouselProps } from "@/components//Carousel/Carousel.types";

export interface RoomCardProps {
    images: CarouselProps["images"];
    name: string;
    price: number;
    color: string;
    onRentButtonCLick?: () => void;
    onMouseEnter?: (name: string, color: string) => void;
    onMouseLeave?: (name: string, color: string) => void;
    className?: string;
}
