/* eslint-disable import/order */
/* eslint-disable simple-import-sort/imports */
import { useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";

import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { BLUR_IMAGE } from "@/constants/stubs";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
import { appRoute, MainAnchorType } from "@/routes";

import styles from "./BlockHero.module.scss";
import { HOMEPAGE_CONFIG } from "@/configs";

const cx = cnBind.bind(styles);

export const BlockHero = () => {
    const needToOpenModal = useWindowSizeTo(850);
    const router = useRouter();
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const title = HOMEPAGE_CONFIG.HERO_TITLE;
    const description = HOMEPAGE_CONFIG.HERO_DESCRIPTION;
    const items = HOMEPAGE_CONFIG.HERO_ITEMS;

    const handleClick = useCallback(() => {
        if (needToOpenModal) {
            openCreateOrderModal();
        } else {
            void router.push(appRoute.mainAnchor(MainAnchorType.ORDER), undefined, { scroll: false });
        }
    }, [needToOpenModal, openCreateOrderModal, router]);

    return (
        <SiteContentBlock className={cx("block-hero")}>
            <Carousel
                className={cx("carousel")}
                showThumbs={false}
                showIndicators={false}
                animationHandler="fade"
                infiniteLoop
                // autoPlay
                showStatus={false}
                swipeable={false}
                renderArrowNext={(callback) => (
                    <button type="button" className={cx("action", "next")} onClick={callback}>
                        <IcArrowRight />
                    </button>
                )}
                renderArrowPrev={(callback) => (
                    <button type="button" className={cx("action", "prev")} onClick={callback}>
                        <IcArrowLeft />
                    </button>
                )}
            >
                {items.map((el) => (
                    <Image
                        key={el}
                        src={el}
                        className={cx("image")}
                        alt="room image"
                        placeholder="blur"
                        blurDataURL={BLUR_IMAGE}
                        width={1200}
                        height={560}
                    />
                ))}
            </Carousel>
            <div className={cx("content")}>
                <h1 className={cx("title")}>{title}</h1>
                <h2 className={cx("description")}>{description}</h2>
            </div>
            <Button className={cx("button-order")} icon={IcArrowRight} onClick={handleClick}>
                Забронировать
            </Button>
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </SiteContentBlock>
    );
};
