import { useCallback } from "react";
import cnBind from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import { IcArrowRight } from "@/assets/icon";
import { CompanyRating } from "@/components/CompanyRating";
import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
import { appRoute, MainAnchorType } from "@/routes";

import styles from "./BlockCompanyRating.module.scss";

const cx = cnBind.bind(styles);
export const BlockCompanyRating = () => {
    const needToOpenModal = useWindowSizeTo(850);
    const router = useRouter();
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);

    const handleClick = useCallback(() => {
        if (needToOpenModal) {
            openCreateOrderModal();
        } else {
            void router.push(appRoute.mainAnchor(MainAnchorType.ORDER), undefined, { scroll: false });
        }
    }, [needToOpenModal, openCreateOrderModal, router]);

    return (
        <SiteContentBlock className={cx("block-company-rates")}>
            <CompanyRating className={cx("item")} companyName="Яндекс" rate={9.7} />
            <CompanyRating className={cx("item")} companyName="Суточно.ру" rate={9.7} />
            <div className={cx("company-new-order", "item")} onClick={handleClick}>
                <Image
                    src="https://downloader.disk.yandex.ru/preview/2fb2b03797c0f6eae8e16dc3f637794c7a8d794c589d83b44c49707549024387/64780a9a/j1YhHhVRONsvZEMm7pV4-nPgLYSroeIMeHVR-T2dqFckIF8001eR0mojkpI5F3wFocqT1z6hNTL1AgB6py_EIw%3D%3D?uid=0&filename=room-grey-5.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048"
                    alt="Создание заказа"
                    width={900}
                    height={300}
                    className={cx("bg")}
                />
                <div className={cx("button-order")}>
                    <span>Заказать</span>
                    <IcArrowRight />
                </div>
            </div>
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </SiteContentBlock>
    );
};
