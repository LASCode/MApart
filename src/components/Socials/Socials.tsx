import {useMemo} from "react";

import cnBind from 'classnames/bind';
import styles from './Socials.module.scss';
import Image from "next/image";
import {IcTelegramPath, IcVkontaktePath, IcWhatsUpPath} from "@/assets/icon";
import Link from "next/link";
import {SocialsProps} from "@/components/Socials/Socials.types";
const cx = cnBind.bind(styles);

export const Socials = ({ className }: SocialsProps) => {
    const items = useMemo(() => ([
        { icon: IcWhatsUpPath, title: 'WhatsUp', href: '' },
        { icon: IcTelegramPath, title: 'Телеграм', href: 'https://t.me/Pepeapu' },
        { icon: IcVkontaktePath, title: 'Вконтакте', href: '' },
    ]), [])

    return (
        <div className={cx('socials', className)}>
            {items.map(({icon, title, href}) => (
                <Link key={title} className={cx('social-item')} href={href} target="_blank">
                    <Image className={cx('social-item-icon')} src={icon} alt={title} />
                </Link>
            ))}
        </div>
    );
};