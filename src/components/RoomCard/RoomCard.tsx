import { useCallback } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { useIsMobile } from "@/hooks/useIsMobile";

import type { RoomCardProps } from "./RoomCard.types";

import styles from "./RoomCard.module.scss";

const cx = cnBind.bind(styles);

export const RoomCard = ({
    images,
    name,
    price,
    color,
    onRentButtonCLick,
    className,
    onMouseEnter,
    onMouseLeave,
}: RoomCardProps) => {
    const isMobile = useIsMobile();

    const handleMouseEnter = useCallback(() => {
        onMouseEnter?.(name, color);
    }, [color, name, onMouseEnter]);

    const handleMouseLeave = useCallback(() => {
        onMouseLeave?.(name, color);
    }, [color, name, onMouseLeave]);

    return (
        <div
            className={cx("room-card", name, className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Carousel className={cx("carousel")} images={images} />
            <div className={cx("info")}>
                <div className={cx("name")}>{name}</div>
                <div className={cx("price")}>{`от ${price} руб.`}</div>
            </div>
            <div className={cx("buttons")}>
                <Button className={cx("button")} onClick={onRentButtonCLick} icon={isMobile ? undefined : IcArrowRight}>
                    Забронировать
                </Button>
                <Link className={cx("link")} href={`room/${name}`} passHref>
                    Подробнее
                </Link>
            </div>
        </div>
    );
};
