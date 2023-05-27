import cnBind from "classnames/bind";

import { BlockAboutUs } from "@/components/BlockAboutUs";
import { BlockCompanyRating } from "@/components/BlockCompanyRating";
import { BlockHero } from "@/components/BlockHero";
import { BlockRoomAmenities } from "@/components/BlockRoomAmenities";
import { BlockRooms } from "@/components/BlockRooms/BlockRooms";
import { BlockWidget } from "@/components/BlockWidget/BlockWidget";
import { useIsMobile } from "@/hooks/useIsMobile";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/indexPage.module.scss";

const cx = cnBind.bind(styles);

const IndexPage = () => {
    const isMobile = useIsMobile();

    return (
        <PageLayout className={cx("index-page")} withHeader={false} withFooter>
            <div className={cx("top-test")} />
            <div className={cx("content")}>
                <BlockHero />
                <BlockCompanyRating />
                {!isMobile && <BlockWidget />}
                <BlockAboutUs />
                <BlockRooms />
                <BlockRoomAmenities withMap />
            </div>
        </PageLayout>
    );
};

export default IndexPage;
