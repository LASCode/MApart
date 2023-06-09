import cnBind from "classnames/bind";

import { BlockAboutUs } from "@/components/BlockAboutUs";
import { BlockGallery } from "@/components/BlockGallery";
import { BlockHero } from "@/components/BlockHero";
import { BlockInfo } from "@/components/BlockInfo";
import { BlockRoomAmenities } from "@/components/BlockRoomAmenities";
import { BlockRooms } from "@/components/BlockRooms/BlockRooms";
import { BlockWidget } from "@/components/BlockWidget/BlockWidget";
import { ScrollToTopFab } from "@/components/ScrollToTopFab";
import { useWindowSizeFrom } from "@/hooks/useWindowSizeFrom";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/indexPage.module.scss";

const cx = cnBind.bind(styles);

const IndexPage = () => {
    const showWidget = useWindowSizeFrom(850);

    return (
        <PageLayout className={cx("index-page")} withHeader withFooter>
            <div className={cx("top-test")} />
            <div className={cx("content")}>
                <BlockHero />
                {/* <BlockCompanyRating />*/}
                {showWidget && <BlockWidget />}
                <BlockAboutUs />
                <BlockRooms />
                <BlockRoomAmenities withMap />
                <BlockGallery />
                <BlockInfo />
            </div>
            <ScrollToTopFab />
        </PageLayout>
    );
};

export default IndexPage;
