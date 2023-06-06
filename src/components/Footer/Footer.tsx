import cnBind from "classnames/bind";
import Link from "next/link";

import type { FooterProps } from "@/components/Footer/Footer.types";
import { Logo } from "@/components/Logo";
import { Socials } from "@/components/Socials";
import { TEL_NUMBER } from "@/constants/other";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "./Footer.module.scss";

const cx = cnBind.bind(styles);

export const Footer = ({ className }: FooterProps) => {
    const isMobile = useIsMobile();

    return (
        <footer className={cx("footer", className)}>
            <div className={cx("content")}>
                <Logo className={cx("logo")} />
                <Socials className={cx("socials")} />

                <div className={cx("credits")}>
                    <Link className={cx("tel")} href={`tel:${TEL_NUMBER.trim()}`}>
                        {TEL_NUMBER}
                    </Link>
                    <span className={cx("address")}>
                        Санкт-Петербург,{isMobile && <br />} Кременчугская улица, 13к1
                    </span>
                </div>
            </div>
            <div className={cx("source")}>
                <span>M-Apart © Все права защищены. 2023.</span>
                <span>
                    Разработка: Веб-студия <a href="https://levsha-web.ru/">Левша</a>
                </span>
            </div>
        </footer>
    );
};
