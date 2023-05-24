import { useCallback } from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { IcArrowRight } from "@/assets/icon";

import { Button } from "../Button";
import { Carousel } from "../Carousel";

import type { RoomCardProps } from "./RoomCard.types";

import styles from "./RoomCard.module.scss";

const cx = cnBind.bind(styles);

export const RoomCard = ({
    images,
    name,
    price,
    onMoreButtonClick,
    className,
    onMouseEnter,
    onMouseLeave,
}: RoomCardProps) => {
    const handleMouseEnter = useCallback(() => {
        onMouseEnter?.(name);
    }, [name, onMouseEnter]);

    return (
        <div className={cx("room-card", name, className)} onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave}>
            <Carousel className={cx("carousel")} images={images} />
            <div className={cx("info")}>
                <div className={cx("name")}>{name}</div>
                <div className={cx("price")}>{`от ${price} руб.`}</div>
            </div>
            <div className={cx("buttons")}>
                <Button className={cx("button")} onClick={onMoreButtonClick} icon={IcArrowRight}>
                    Подробнее
                </Button>
                <Link href={`/${name}`} passHref>
                    Подробнее
                </Link>
            </div>
        </div>
    );
};
