import cnBind from "classnames/bind";
import Link from "next/link";

import { IcMenuClose, IcMenuOpen, IcTel } from "@/assets/icon";
import { Button } from "@/components/Button/Button";
import { HEADER_TEL_NUMBER } from "@/components/Header/Header.constants";
import { HeaderMenuMobile } from "@/components/Header/HeaderMenuMobile/HeaderMenuMobile";
import { HeaderNavigation } from "@/components/Header/HeaderNavigation";
import { Logo } from "@/components/Logo";
import { Socials } from "@/components/Socials/Socials";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.module.scss";

const cx = cnBind.bind(styles);

export const Header = ({ className }: HeaderProps) => {
    const isMobile = useIsMobile();
    const showTelButton = useWindowSizeTo(1000);
    const [isOpen, open, close, toggle] = useBooleanState(false);
    const MenuImage = isOpen ? IcMenuClose : IcMenuOpen;

    return (
        <header className={cx("header", className)}>
            <div className={cx("header-inner")}>
                <div className={cx("content")}>
                    <div className={cx("header-container-left")}>
                        <Logo />
                        {isMobile && <MenuImage onClick={toggle} />}
                        {!isMobile && <HeaderNavigation />}
                    </div>
                    {!isMobile && (
                        <div className={cx("header-container-right")}>
                            <Socials />
                            {}
                            <Link href={`tel:${HEADER_TEL_NUMBER.trim()}`}>
                                {showTelButton ? <IcTel className={cx("button-tel-icon")} /> : HEADER_TEL_NUMBER}
                            </Link>
                        </div>
                    )}
                </div>
                <Button>Забронировать</Button>
            </div>
            {isMobile && isOpen && <HeaderMenuMobile isOpen={isOpen} onClose={close} />}
        </header>
    );
};
