import { useCallback } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import { IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
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
                <div className={cx("button-order")}>
                    <span>Заказать</span>
                    <IcArrowRight />
                </div>
            </div>
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </SiteContentBlock>
    );
};
