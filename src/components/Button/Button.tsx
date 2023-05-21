import {ButtonProps} from "@/components/Button/Button.types";

import cnBind from 'classnames/bind';
import styles from './Button.module.scss';
import Image from "next/image";
const cx = cnBind.bind(styles);

export const Button = ({icon, children, className}: ButtonProps) => {

    return (
        <button className={cx('button', className)}>
            {children}
            {icon && (<Image className={cx('image')} src={icon} alt={'*'} />)}
        </button>
    );
}