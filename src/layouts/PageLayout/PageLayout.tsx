import cnBind from "classnames/bind";

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
                <SiteContentBlock>
                    <Header className={cx("header")} />
                </SiteContentBlock>
            )}

            <main className={cx("main", className)}>{children}</main>

            {/* {withFooter && <Footer className={cx("footer")} />}*/}
        </div>
    );
};
