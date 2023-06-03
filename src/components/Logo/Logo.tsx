import { useCallback } from "react";
import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import { IcSiteLogoHorizontal, IcSiteLogoVertical } from "@/assets/logo";

import type { LogoProps } from "./Logo.types";

import styles from "./Logo.module.scss";

const cx = cnBind.bind(styles);

export const Logo = ({ type = "vertical", className }: LogoProps) => {
    const router = useRouter();
    const handleClick = useCallback(() => {
        void router.push("/").then(() => router.reload());
    }, [router]);

    return (
        <div className={cx("logo", className)} onClick={handleClick}>
            {type === "vertical" && <IcSiteLogoVertical className={cx("image", "vertical")} />}
            {type === "horizontal" && <IcSiteLogoHorizontal className={cx("image", "horizontal")} />}
        </div>
    );
};
