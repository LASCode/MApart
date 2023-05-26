import cnBind from "classnames/bind";
import Link from "next/link";

import type { FooterProps } from "@/components/Footer/Footer.types";
import { HEADER_TEL_NUMBER } from "@/components/Header/Header.constants";
import { Logo } from "@/components/Logo";
import { Socials } from "@/components/Socials";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsTablet } from "@/hooks/useIsTablet";

import styles from "./Footer.module.scss";

const cx = cnBind.bind(styles);

export const Footer = ({ className }: FooterProps) => {
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    return (
        <footer className={cx("footer", className)}>
            <Logo className={cx("logo")} />
            <Socials className={cx("socials")} />
            <div className={cx("credits")}>
                <Link className={cx("tel")} href={`tel:${HEADER_TEL_NUMBER.trim()}`}>
                    {HEADER_TEL_NUMBER}
                </Link>
                <span className={cx("address")}>Санкт-Петербург, пр. Центральный 25</span>
            </div>
        </footer>
    );
};
