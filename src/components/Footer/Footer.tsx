import {useIsMobile} from "@/hooks/useIsMobile";
import {FooterProps} from "@/components/Footer/Footer.types";

import cnBind from 'classnames/bind';
import styles from './Footer.module.scss';
import {Logo} from "@/components/Logo";
import {Socials} from "@/components/Socials";
import {HEADER_TEL_NUMBER} from "@/components/Header/Header.constants";
import Image from "next/image";
import {IcTelPath} from "@/assets/icon";
import Link from "next/link";
const cx = cnBind.bind(styles);

export const Footer = ({ className }: FooterProps) => {
    const isMobile = useIsMobile();

    return (
        <footer className={cx('footer', className)}>
            <Logo />
            <Socials />

            <div className={cx('additional')}>
                <Link href={`tel:${HEADER_TEL_NUMBER.trim()}`}>
                    {HEADER_TEL_NUMBER}
                </Link>
                <span>
                    Санкт-Петербург, пр. Центральный 25
                </span>
            </div>
        </footer>
    );
};