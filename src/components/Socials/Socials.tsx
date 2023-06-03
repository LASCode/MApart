import { useMemo } from "react";
import * as React from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { IcTelegram, IcVkontakte, IcWhatsUp } from "@/assets/icon";
import type { SocialsProps } from "@/components/Socials/Socials.types";

import styles from "./Socials.module.scss";

const cx = cnBind.bind(styles);

export const Socials = ({ className }: SocialsProps) => {
    const items = useMemo(
        () => [
            { icon: IcWhatsUp, title: "WhatsUp", href: "https://wa.me/79313555551" },
            { icon: IcTelegram, title: "Телеграм", href: "https://t.me/m_apartments" },
            { icon: IcVkontakte, title: "Вконтакте", href: "https://vk.com/" },
        ],
        [],
    );

    return (
        <div className={cx("socials", className)}>
            {items.map(({ icon: Icon, title, href }) => (
                <Link key={title} className={cx("social-item")} href={href} target="_blank">
                    <Icon className={cx("social-item-icon")} />
                </Link>
            ))}
        </div>
    );
};
