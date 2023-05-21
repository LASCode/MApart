import {HeaderMenuMobileProps} from "@/components/Header/HeaderMenuMobile/HeaderMenuMobile.types";

import cnBind from 'classnames/bind';
import styles from './HeaderMenuMobile.module.scss';
import {useMemo} from "react";
import {HEADER_NAVIGATION_ITEMS, HEADER_TEL_NUMBER} from "@/components/Header/Header.constants";
import {Socials} from "@/components/Socials/Socials";
import Link from "next/link";
import {HeaderNavigation} from "@/components/Header/HeaderNavigation";
const cx = cnBind.bind(styles);

export const HeaderMenuMobile = ({}: HeaderMenuMobileProps) => {

    return (
        <div className={cx('header-menu-mobile')}>
            <div className={cx('content')}>
                <HeaderNavigation className={cx('navigation')} vertical />
                <div className={cx('additional')}>
                    <Link className={cx('tel')} href={`tel:${HEADER_TEL_NUMBER.trim()}`}>{HEADER_TEL_NUMBER}</Link>
                    <Socials />
                </div>
            </div>
        </div>
    );
};