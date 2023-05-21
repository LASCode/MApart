import cnBind from "classnames/bind";
import Link from "next/link";

import { IcSiteLogo } from "@/assets/logo";

import styles from "./Logo.module.scss";

const cx = cnBind.bind(styles);

export const Logo = () => {
  return (
    <Link className={cx("logo")} href="/">
      <IcSiteLogo className={cx("image")} />
    </Link>
  );
};
