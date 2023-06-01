import { useCallback, useEffect } from "react";
import cnBind from "classnames/bind";
import { noop } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";

import { IcMenuClose, IcMenuOpen, IcTel } from "@/assets/icon";
import { Button } from "@/components/Button/Button";
import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { HEADER_TEL_NUMBER } from "@/components/Header/Header.constants";
import { HeaderMenuMobile } from "@/components/Header/HeaderMenuMobile/HeaderMenuMobile";
import { HeaderNavigation } from "@/components/Header/HeaderNavigation";
import { Logo } from "@/components/Logo";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { Socials } from "@/components/Socials/Socials";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useWindowSizeFrom } from "@/hooks/useWindowSizeFrom";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
import { appRoute, MainAnchorType } from "@/routes";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = ({ onlyModal, className }: HeaderProps) => {
    const isMobile = useIsMobile();
    const showSocials = useWindowSizeFrom(1120);
    const showTelButton = useWindowSizeTo(1000);
    const needToOpenModal = useWindowSizeTo(850);
    const headerMobileView = useWindowSizeTo(820);
    const router = useRouter();
    const [isOpen, , close, toggle] = useBooleanState(false);
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const MenuImage = isOpen ? IcMenuClose : IcMenuOpen;

    const handleClick = useCallback(() => {
        if (onlyModal || needToOpenModal) {
            openCreateOrderModal();
        } else {
            void router.push(`/${appRoute.mainAnchor(MainAnchorType.ORDER)}`, undefined, { scroll: false });
        }
    }, [needToOpenModal, onlyModal, openCreateOrderModal, router]);

    useEffect(() => {
        document.body.style.overflow = isOpen && headerMobileView ? "hidden" : "auto";
    }, [headerMobileView, isMobile, isOpen]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [isOpen]);

    return (
        <header className={cx("header", className)}>
            <SiteContentBlock className={cx("header-inner")}>
                <div className={cx("content")}>
                    <div className={cx("header-container-left")}>
                        <Logo />
                        {headerMobileView && <MenuImage className={cx("image-menu")} onClick={toggle} />}
                        {!headerMobileView && <HeaderNavigation />}
                    </div>
                    {!isMobile && (
                        <div className={cx("header-container-right")}>
                            {showSocials && <Socials />}
                            <Link href={`tel:${HEADER_TEL_NUMBER.trim()}`} className={cx("link-tel")}>
                                {showTelButton ? <IcTel className={cx("button-tel-icon")} /> : HEADER_TEL_NUMBER}
                            </Link>
                        </div>
                    )}
                </div>
                {needToOpenModal ? (
                    <Link href={appRoute.mainAnchor(MainAnchorType.ORDER)} scroll={false}>
                        <Button className={cx("button")} onClick={noop}>
                            Забронировать
                        </Button>
                    </Link>
                ) : (
                    <Button className={cx("button")} onClick={handleClick}>
                        Забронировать
                    </Button>
                )}
            </SiteContentBlock>
            <HeaderMenuMobile isOpen={headerMobileView && isOpen} onClose={close} />
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </header>
    );
};
