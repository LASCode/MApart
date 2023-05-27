import cnBind from "classnames/bind";
import Link from "next/link";

import { IcSiteLogoHorizontal, IcSiteLogoVertical } from "@/assets/logo";

import type { LogoProps } from "./Logo.types";

import styles from "./Logo.module.scss";

const cx = cnBind.bind(styles);

export const Logo = ({ type = "vertical", className }: LogoProps) => {
    return (
        <Link className={cx("logo", className)} href="/">
            {type === "vertical" && <IcSiteLogoVertical className={cx("image", "vertical")} />}
            {type === "horizontal" && <IcSiteLogoHorizontal className={cx("image", "horizontal")} />}
        </Link>
    );
};
