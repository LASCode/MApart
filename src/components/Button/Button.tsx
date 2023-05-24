import cnBind from "classnames/bind";

import type { ButtonProps } from "@/components/Button/Button.types";

import styles from "./Button.module.scss";

const cx = cnBind.bind(styles);

export const Button = ({ icon: Icon, children, className, ...props }: ButtonProps) => {
    return (
        <button type="button" className={cx("button", className)} {...props}>
            {children}
            {Icon && <Icon className={cx("image")} />}
        </button>
    );
};
