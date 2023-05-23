import cnBind from "classnames/bind";

<<<<<<< HEAD
import { IcArrowLeft, IcArrowRight } from "@/assets/icon";
import { Button } from "@/components/Button";
import { Carousel } from "@/components/Carousel";
import { CompanyRating } from "@/components/CompanyRating";
import { DoubleCarousel } from "@/components/DoubleCarousel";
import { Link } from "@/components/Link";
import { SiteContentBlock } from "@/components/SiteContentBlock";
=======
import { BlockAboutUs } from "@/components/BlockAboutUs";
import { BlockCompanyRating } from "@/components/BlockCompanyRating";
import { BlockHero } from "@/components/BlockHero";
import { BlockWidget } from "@/components/BlockWidget/BlockWidget";
>>>>>>> 7ce8aa0d0fe0a41a6a36ea9eb4225b4e32f6bd88
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/indexPage.module.scss";

const cx = cnBind.bind(styles);

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
            "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        bigImageAlt: "photo",
        smallImageSrc:
            "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        smallImageAlt: "photo",
    },
];

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
    {
        href: "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        alt: "photo",
    },
    {
        href: "https://hotel-spb.ru/assets/components/phpthumbof/cache/room-business_002.788c4c20502cae038e66e118c369e7b7.jpg",
        alt: "photo",
    },
];

const IndexPage = () => {
    return (
        <PageLayout className={cx("index-page")} withHeader={false}>
            <div className={cx("top-test")} />
            <div className={cx("content")}>
                <BlockHero />
                <BlockCompanyRating />
                <BlockWidget />
                <BlockAboutUs />
            </div>
            <DoubleCarousel images={doubleImages} />

            <Carousel images={images} />
        </PageLayout>
    );
};

export default IndexPage;
