import { memo } from "react";
import cnBind from "classnames/bind";
import NextLink from "next/link";

import type { LinkProps } from "@/components/Link/Link.types";

import styles from "./Link.module.scss";

const cx = cnBind.bind(styles);

export const Link = memo(
    ({ icon: Icon, iconPosition = "end", iconClassName, className, label, ...linkProps }: LinkProps) => {
        return (
            <NextLink className={cx("link", className)} {...linkProps}>
                {Icon && iconPosition === "start" && <Icon className={cx("icon", iconClassName)} />}
                <span className={cx("content")}>{label}</span>
                {Icon && iconPosition === "end" && <Icon className={cx("icon", iconClassName)} />}
            </NextLink>
        );
    },
);
