import { useCallback, useMemo, useState } from "react";
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
import { valueInRange } from "@/utils";

import styles from "./BlockHero.module.scss";

const cx = cnBind.bind(styles);

export const BlockHero = () => {
    const needToOpenModal = useWindowSizeTo(850);
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter();
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const items = useMemo<string[]>(
        () => [
            "https://downloader.disk.yandex.ru/preview/7b978610ab8f3b59058f102baeedb9c14c289c93a2a42517abbf210bdca76394/64782997/svkfXO3DH5GdDSwtgCIRlaoPTkn3qksfooH6ulH9Cn7_pSb2IjOmnXo4wTfpaZDevQ8CDylsjuNtrMh1XOAt-g%3D%3D?uid=0&filename=room-template-hero.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=2048x2048",
            "https://downloader.disk.yandex.ru/preview/2fb2b03797c0f6eae8e16dc3f637794c7a8d794c589d83b44c49707549024387/64780a9a/j1YhHhVRONsvZEMm7pV4-nPgLYSroeIMeHVR-T2dqFckIF8001eR0mojkpI5F3wFocqT1z6hNTL1AgB6py_EIw%3D%3D?uid=0&filename=room-grey-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
            "https://downloader.disk.yandex.ru/preview/a201a3b34aee3a1348be1902a00ffab64ab1ead8e28c2febd1f83f914750e582/64780851/5_DJ46NDRt5PtNkNMC6p4OR5TC9y0otu0PsvxKwdRkUPtGIJSm0FkwvSfFCh1zHRm4NU916oa8SBk9WAtoPxvQ%3D%3D?uid=0&filename=room-yellow-3.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
            "https://downloader.disk.yandex.ru/preview/dcd3536fd4c18d7c1f5c0854c4ffa7ca4f0b5943e3173edd0872a0560995e9f8/64780641/vCjPCTYoGYmGCVs1hiDgWdWVGJX_sjfhYmXAZMjeUB-U1ryJ5WU8UfcQvSN_6GSlgQpXzFpJgW9FB-SYQsaBFg%3D%3D?uid=0&filename=room-rose-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
            "https://downloader.disk.yandex.ru/preview/abb9c9e5c58e097cf7bf60db76372972e316a1d326e3e2c8673b4c54ef7d35ff/6478099f/-lIHVA3YsbPsXJsU5PFDHj1T48MBkVl4JFjPporMH1jEQjGRA8dv0G3YYQA9VKw6yx0Uy0j63HgvXQC7JB2bIg%3D%3D?uid=0&filename=room-green-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
            "https://downloader.disk.yandex.ru/preview/42b2eebd7d38d80a913146812a7c322f51e480d886bdbeee872da6dcb3f17242/647808b5/hT7-fG0_bAmg0PG7LOYLMriknQqigAwCw3AvcS7QXB1tfoa9dXODV-aYFkyFsupbG-lTdlgRgjJcwsvhhZ3f2A%3D%3D?uid=0&filename=room-blue-2.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
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
                blurDataURL={BLUR_IMAGE}
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
