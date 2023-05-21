import cnBind from "classnames/bind";
import Link from "next/link";

import { HEADER_TEL_NUMBER } from "@/components/Header/Header.constants";
import type { HeaderMenuMobileProps } from "@/components/Header/HeaderMenuMobile/HeaderMenuMobile.types";
import { HeaderNavigation } from "@/components/Header/HeaderNavigation";
import { Socials } from "@/components/Socials/Socials";

import styles from "./HeaderMenuMobile.module.scss";

const cx = cnBind.bind(styles);

export const HeaderMenuMobile = ({}: HeaderMenuMobileProps) => {
  return (
    <div className={cx("header-menu-mobile")}>
      <div className={cx("content")}>
        <HeaderNavigation className={cx("navigation")} vertical />
        <div className={cx("additional")}>
          <Link className={cx("tel")} href={`tel:${HEADER_TEL_NUMBER.trim()}`}>
            {HEADER_TEL_NUMBER}
          </Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};
