import { useMemo } from "react";
import * as React from "react";
import cnBind from "classnames/bind";
import Link from "next/link";

import { IcTelegram, IcVkontakte, IcWhatsUp } from "@/assets/icon";
import type { SocialsProps } from "@/components/Socials/Socials.types";
import { GLOBAL_CONFIG } from "@/configs";

import styles from "./Socials.module.scss";

const cx = cnBind.bind(styles);

export const Socials = ({ className }: SocialsProps) => {
    const items = useMemo<{ icon: React.FC<React.SVGAttributes<SVGElement>>; title: string; href: string }[]>(
        () =>
            [
                GLOBAL_CONFIG.SOCIALS_WHATSUP
                    ? { icon: IcWhatsUp, title: "WhatsUp", href: GLOBAL_CONFIG.SOCIALS_WHATSUP }
                    : undefined,
                GLOBAL_CONFIG.SOCIALS_TELEGRAM
                    ? { icon: IcTelegram, title: "Телеграм", href: GLOBAL_CONFIG.SOCIALS_TELEGRAM }
                    : undefined,
                GLOBAL_CONFIG.SOCIALS_VKONTAKTE
                    ? { icon: IcVkontakte, title: "Вконтакте", href: GLOBAL_CONFIG.SOCIALS_VKONTAKTE }
                    : undefined,
            ].filter(Boolean) as { icon: React.FC<React.SVGAttributes<SVGElement>>; title: string; href: string }[],
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
