import cnBind from 'classnames/bind';
import styles from './Header.module.scss';
import Link from "next/link";
import {HeaderNavItem, HeaderProps} from "./Header.types";
import {useMemo} from "react";
import {appRoute, MainAnchorType} from "@/routes";
import {useIsMobile} from "@/hooks/useIsMobile";
import IcSiteLogo from '@/assets/logo/apart_vertical.svg';
import Image from "next/image";
import {Button} from "@/components/Button/Button";
import {Socials} from "@/components/Socials/Socials";
import {useBooleanState} from "@/hooks/useBooleanState";
import {IcMenuClose, IcMenuClosePath, IcMenuOpen, IcMenuOpenPath, IcTelPath} from "@/assets/icon";
import {Logo} from "@/components/Logo";
import {useWindowSizeTo} from "@/hooks/useWindowSizeTo";
import {HeaderMenuMobile} from "@/components/Header/HeaderMenuMobile/HeaderMenuMobile";
import {HeaderNavigation} from "@/components/Header/HeaderNavigation";
import {HEADER_TEL_NUMBER} from "@/components/Header/Header.constants";

const cx = cnBind.bind(styles);

export const Header = ({ className }: HeaderProps) => {
    const isMobile = useIsMobile();
    const showTelButton = useWindowSizeTo(1000);
    const [isOpen, open, close, toggle] = useBooleanState(false);

    return (
        <header className={cx('header', className)}>
            <div className={cx('header-inner')}>
                <div className={cx('content')}>
                    <div className={cx('header-container-left')}>
                        <Logo />
                        {isMobile && <Image src={isOpen ? IcMenuClosePath : IcMenuOpenPath} alt={'Меню'} onClick={toggle} />}
                        {!isMobile && <HeaderNavigation />}
                    </div>
                    {!isMobile && (
                        <div className={cx('header-container-right')}>
                            <Socials />
                            {}
                            <Link href={`tel:${HEADER_TEL_NUMBER.trim()}`}>
                                {showTelButton ? <Image className={cx('button-tel-icon')} src={IcTelPath} alt={''} /> : HEADER_TEL_NUMBER}
                            </Link>
                        </div>
                    )}
                </div>
                <Button>Забронировать</Button>
            </div>
            {isMobile && isOpen && (
                <HeaderMenuMobile isOpen={isOpen} onClose={close} />
            )}
        </header>
    );
};