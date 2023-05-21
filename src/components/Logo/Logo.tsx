import Link from "next/link";
import Image from "next/image";
import {IcSiteLogoPath} from "@/assets/logo";

import cnBind from 'classnames/bind';
import styles from './Logo.module.scss';
const cx = cnBind.bind(styles);

export const Logo = () => {

    return (
        <Link className={cx('logo')} href={'/'}>
            <Image className={cx('image')} src={IcSiteLogoPath} alt={'Logo'} />
        </Link>
    );
};