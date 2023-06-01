import { useCallback, useMemo } from "react";
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
import { getGoogleImageUrl } from "@/utils/getGoogleImageUrl";

import styles from "./BlockHero.module.scss";

const cx = cnBind.bind(styles);

export const BlockHero = () => {
    const needToOpenModal = useWindowSizeTo(850);
    const router = useRouter();
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const items = useMemo<string[]>(
        () => [
            getGoogleImageUrl("1TTBgvOyRaL-8O5HFOkjWxay4yxFQwilB"),
            getGoogleImageUrl("12WNeEWe_v37kvN1f7oCYe78DVhz1lgnE"),
            // "https://downloader.disk.yandex.ru/preview/a201a3b34aee3a1348be1902a00ffab64ab1ead8e28c2febd1f83f914750e582/64780851/5_DJ46NDRt5PtNkNMC6p4OR5TC9y0otu0PsvxKwdRkUPtGIJSm0FkwvSfFCh1zHRm4NU916oa8SBk9WAtoPxvQ%3D%3D?uid=0&filename=room-yellow-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
            // "https://downloader.disk.yandex.ru/preview/abb9c9e5c58e097cf7bf60db76372972e316a1d326e3e2c8673b4c54ef7d35ff/6478099f/-lIHVA3YsbPsXJsU5PFDHj1T48MBkVl4JFjPporMH1jEQjGRA8dv0G3YYQA9VKw6yx0Uy0j63HgvXQC7JB2bIg%3D%3D?uid=0&filename=room-green-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
            // "https://downloader.disk.yandex.ru/preview/42b2eebd7d38d80a913146812a7c322f51e480d886bdbeee872da6dcb3f17242/647808b5/hT7-fG0_bAmg0PG7LOYLMriknQqigAwCw3AvcS7QXB1tfoa9dXODV-aYFkyFsupbG-lTdlgRgjJcwsvhhZ3f2A%3D%3D?uid=0&filename=room-blue-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
        ],
        [],
    );

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
                autoPlay
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
                <h1 className={cx("title")}>M Apart</h1>
                <h2 className={cx("description")}>Апарт отель в одном из уютнейших уголков Петербурга</h2>
            </div>
            <Button className={cx("button-order")} icon={IcArrowRight} onClick={handleClick}>
                Забронировать
            </Button>
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </SiteContentBlock>
    );
};
