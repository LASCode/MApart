import cnBind from "classnames/bind";

import { BlockAboutUs } from "@/components/BlockAboutUs";
import { BlockCompanyRating } from "@/components/BlockCompanyRating";
import { BlockHero } from "@/components/BlockHero";
import { BlockRooms } from "@/components/BlockRooms/BlockRooms";
import { BlockWidget } from "@/components/BlockWidget/BlockWidget";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/indexPage.module.scss";

const cx = cnBind.bind(styles);

const IndexPage = () => {
    return (
        <PageLayout className={cx("index-page")} withHeader={false}>
            <div className={cx("top-test")} />
            <div className={cx("content")}>
                <BlockHero />
                <BlockCompanyRating />
                <BlockWidget />
                <BlockAboutUs />
                <BlockRooms />
            </div>
        </PageLayout>
    );
};

export default IndexPage;
