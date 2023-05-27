import { useCallback, useEffect } from "react";
import cnBind from "classnames/bind";
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
import { useIsTablet } from "@/hooks/useIsTablet";
import { useWindowSizeFrom } from "@/hooks/useWindowSizeFrom";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
import { appRoute, MainAnchorType } from "@/routes";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = ({ className }: HeaderProps) => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();
    const showSocials = useWindowSizeFrom(1120);
    const needToOpenModal = useWindowSizeTo(850);
    const router = useRouter();
    const showTelButton = isMobile || isTablet;
    const [isOpen, open, close, toggle] = useBooleanState(false);
    const [createOrderModalIsOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const MenuImage = isOpen ? IcMenuClose : IcMenuOpen;

    const handleClick = useCallback(() => {
        if (needToOpenModal) {
            openCreateOrderModal();
        } else {
            void router.push(appRoute.mainAnchor(MainAnchorType.ORDER), undefined, { scroll: false });
        }
    }, [needToOpenModal, openCreateOrderModal, router]);

    useEffect(() => {
        document.body.style.overflow = isOpen && isMobile ? "hidden" : "auto";
    }, [isMobile, isOpen]);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [isOpen]);

    return (
        <header className={cx("header", className)}>
            <SiteContentBlock className={cx("header-inner")}>
                <div className={cx("content")}>
                    <div className={cx("header-container-left")}>
                        <Logo />
                        {(isMobile || isTablet) && <MenuImage className={cx("image-menu")} onClick={toggle} />}
                        {!isMobile && !isTablet && <HeaderNavigation />}
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
                <Button className={cx("button")} onClick={handleClick}>
                    Забронировать
                </Button>
            </SiteContentBlock>
            <HeaderMenuMobile isOpen={(isMobile || isTablet) && isOpen} onClose={close} />
            <CreateOrderModal isOpen={createOrderModalIsOpen} onClose={closeCreateOrderModal} />
        </header>
    );
};
