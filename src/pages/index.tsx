import cnBind from "classnames/bind";

import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
import { CompanyRating } from "@/components/CompanyRating";
import { DoubleCarousel } from "@/components/DoubleCarousel";
import { Link } from "@/components/Link";
import { RoomCard } from "@/components/RoomCard/RoomCard";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/indexPage.module.scss";

const cx = cnBind.bind(styles);

const images = [
    {
        href: "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        alt: "photo",
    },
    {
        href: "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        alt: "photo",
    },
    {
        href: "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        alt: "photo",
    },
    {
        href: "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        alt: "photo",
    },
];

const doubleImages = [
    {
        bigImageSrc:
            "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        bigImageAlt: "photo",
        smallImageSrc:
            "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        smallImageAlt: "photo",
    },
    {
        bigImageSrc:
            "https://vedenskyhotel.ru/wp-content/uploads/2017/11/00006standart_room_vedensky-2.jpg",
        bigImageAlt: "photo",
        smallImageSrc:
            "https://vedenskyhotel.ru/wp-content/uploads/2017/11/00006standart_room_vedensky-2.jpg",
        smallImageAlt: "photo",
    },
];

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

                <RoomCard images={images} name="Yoloy" price={600} onMoreButtonClick={() => undefined} />
                <DoubleCarousel images={doubleImages} />
            </div>
        </PageLayout>
    );
};

export default IndexPage;