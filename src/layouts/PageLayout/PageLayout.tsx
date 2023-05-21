import cnBind from "classnames/bind";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useAppWindowSize } from "@/hooks/useAppWindowSize";

import type { PageLayoutProps } from "./PageLayout.types";

import styles from "./PageLayout.module.scss";

const cx = cnBind.bind(styles);

export const PageLayout = ({
  children,
  withFooter = true,
  withHeader = true,
}: PageLayoutProps) => {
  useAppWindowSize();

  return (
    <div className={cx("page-layout")}>
      {withHeader && <Header className={cx("header")} />}

      <main className={cx("main")}>{children}</main>

      {withFooter && <Footer className={cx("footer")} />}
    </div>
  );
};
