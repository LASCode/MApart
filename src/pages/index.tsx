import cnBind from "classnames/bind";

import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
import { CompanyRating } from "@/components/CompanyRating";
import { Link } from "@/components/Link";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/indexPage.module.scss";

const cx = cnBind.bind(styles);

const IndexPage = () => {
    return (
        <PageLayout className={cx("index-page")}>
            <div className={cx("top-test")} />
            <div className={cx("content")}>
                <SiteContentBlock className={cx("block-hero")}>
                    <div className={cx("hero-content")}>
                        <h1 className={cx("hero-title")}>M Apart</h1>
                        <h2 className={cx("hero-description")}>Апарт отель в одном из уютнейших уголков Петербурга</h2>
                    </div>
                    <Button icon={IcArrowRight}>Забронировать</Button>
                    <div className={cx("hero-actions")}>
                        <IcArrowLeft />
                        <IcArrowRight />
                    </div>
                </SiteContentBlock>
                <SiteContentBlock className={cx("company-rates")}>
                    <CompanyRating companyName="Яндекс" rate={9.7} />
                    <CompanyRating companyName="Суточно.ру" rate={9.7} />
                    <div className={cx("company-new-order")}>
                        <Link href="./test" label="Заказать" icon={IcArrowRight}>
                            1
                        </Link>
                    </div>
                </SiteContentBlock>
                <SiteContentBlock className={cx("block-widget")}>Оаоаооаоаоа виджет</SiteContentBlock>
                <SiteContentBlock className={cx("block-aboutus")}>
                    <div className={cx("block-aboutus-content")}>
                        <div />
                        <div />
                    </div>
                </SiteContentBlock>
                {/* <BlockAboutUs />*/}
            </div>
        </PageLayout>
    );
};

export default IndexPage;
