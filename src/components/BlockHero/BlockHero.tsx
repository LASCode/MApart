import { useCallback, useMemo, useState } from "react";
import cnBind from "classnames/bind";
import Image from "next/image";

import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import R2 from "@/assets/rooms/room-template-about-us.png";
import R3 from "@/assets/rooms/room-template-create-order.png";
import R1 from "@/assets/rooms/room-template-hero.png";
import { Button } from "@/components/Button";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useIsMobile } from "@/hooks/useIsMobile";
import { valueInRange } from "@/utils";

import styles from "./BlockHero.module.scss";

const cx = cnBind.bind(styles);

export const BlockHero = () => {
    const isMobile = useIsMobile();
    const [currentImage, setCurrentImage] = useState(0);
    const items = useMemo(() => [R1, R2, R3], []);

    const setNextImage = useCallback(
        () => setCurrentImage((prevState) => valueInRange(0, items.length - 1, prevState + 1)),
        [items.length],
    );
    const setPrevImage = useCallback(
        () => setCurrentImage((prevState) => valueInRange(0, items.length - 1, prevState - 1)),
        [items.length],
    );

    return (
        <SiteContentBlock className={cx("block-hero")}>
            <Image className={cx("bg-image")} src={items[currentImage]} alt="1" />
            <div className={cx("content")}>
                <h1 className={cx("title")}>M Apart</h1>
                <h2 className={cx("description")}>Апарт отель в одном из уютнейших уголков Петербурга</h2>
            </div>
            <Button className={cx("button-order")} icon={IcArrowRight}>
                Забронировать
            </Button>
            <div className={cx("actions")}>
                <button type="button" className={cx("action")} onClick={setPrevImage}>
                    <IcArrowLeft />
                </button>
                <button type="button" className={cx("action")} onClick={setNextImage}>
                    <IcArrowRight />
                </button>
            </div>
        </SiteContentBlock>
    );
};
