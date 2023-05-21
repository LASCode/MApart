import {HeaderNavigationProps} from "@/components/Header/HeaderNavigation/HeaderNavigation.types";
import Link from "next/link";
import {useMemo} from "react";
import {HEADER_NAVIGATION_ITEMS} from "@/components/Header/Header.constants";

import cnBind from 'classnames/bind';
import styles from './HeaderNavigation.module.scss';
const cx = cnBind.bind(styles);

export const HeaderNavigation = ({ vertical, className }: HeaderNavigationProps) => {
    const items = useMemo(() => HEADER_NAVIGATION_ITEMS, []);

    return (
        <nav className={cx('header-navigation', {vertical: vertical}, className)}>
            {items.map(({title, href}) => (
                <Link
                    key={title}
                    href={href}
                    className={cx('header-navigation-item')}
                >
                    {title.toUpperCase()}
                </Link>
            ))}
        </nav>
    );
};