import cnBind from "classnames/bind";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useAppWindowSize } from "@/hooks/useAppWindowSize";

import type { PageLayoutProps } from "./PageLayout.types";

import styles from "./PageLayout.module.scss";

const cx = cnBind.bind(styles);

export const PageLayout = ({
    children,
    withFooter = true,
    withHeader = true,
    className,
    layoutClassName,
}: PageLayoutProps) => {
    useAppWindowSize();

    return (
        <div className={cx("page-layout", layoutClassName)}>
            {withHeader && (
                <Header className={cx("header")} />
            )}

            <main className={cx("main", className)}>{children}</main>

            {withFooter && (
                <SiteContentBlock className={cx("footer-wrapper")}>
                    <Footer className={cx("footer")} />
                </SiteContentBlock>
            )}
        </div>
    );
};
