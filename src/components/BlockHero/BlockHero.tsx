import { useCallback, useMemo, useState } from "react";
import cnBind from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import R6 from "@/assets/rooms/room-blue-2.jpg";
import R5 from "@/assets/rooms/room-green-5.jpg";
import R2 from "@/assets/rooms/room-grey-5.jpg";
import R4 from "@/assets/rooms/room-rose-1.jpg";
import R1 from "@/assets/rooms/room-template-hero.png";
import R3 from "@/assets/rooms/room-yellow-3.jpg";
import { Button } from "@/components/Button";
import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
import { appRoute, MainAnchorType } from "@/routes";
import { valueInRange } from "@/utils";

import styles from "./BlockHero.module.scss";

const cx = cnBind.bind(styles);

export const BlockHero = () => {
    const needToOpenModal = useWindowSizeTo(850);
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const items = useMemo(() => [R1, R2, R3, R4, R5, R6], []);

    const handleClick = useCallback(() => {
        if (needToOpenModal) {
            openCreateOrderModal();
        } else {
            void router.push(appRoute.mainAnchor(MainAnchorType.ORDER), undefined, { scroll: false });
        }
    }, [needToOpenModal, openCreateOrderModal, router]);

    const setNextImage = useCallback(
        () =>
            setCurrentImage((prevState) =>
                prevState + 1 > items.length - 1 ? 0 : valueInRange(0, items.length - 1, prevState + 1),
            ),
        [items.length],
    );
    const setPrevImage = useCallback(
        () =>
            setCurrentImage((prevState) =>
                prevState - 1 < 0 ? items.length - 1 : valueInRange(0, items.length - 1, prevState - 1),
            ),
        [items.length],
    );

    return (
        <SiteContentBlock className={cx("block-hero")}>
            <Image
                className={cx("bg-image")}
                src={items[currentImage]}
                alt="room image"
                placeholder="blur"
                width={1200}
                height={560}
            />
            <div className={cx("content")}>
                <h1 className={cx("title")}>M Apart</h1>
                <h2 className={cx("description")}>Апарт отель в одном из уютнейших уголков Петербурга</h2>
            </div>
            <Button className={cx("button-order")} icon={IcArrowRight} onClick={handleClick}>
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
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </SiteContentBlock>
    );
};
