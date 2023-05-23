import cnBind from "classnames/bind";

import { IcArrowRight } from "@/assets/icon";
import { CompanyRating } from "@/components/CompanyRating";
import { Link } from "@/components/Link";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "./BlockCompanyRating.module.scss";

const cx = cnBind.bind(styles);
export const BlockCompanyRating = () => {
    const isMobile = useIsMobile();

    return (
        <SiteContentBlock className={cx("block-company-rates")}>
            <CompanyRating className={cx("item")} companyName="Яндекс" rate={9.7} />
            <CompanyRating className={cx("item")} companyName="Суточно.ру" rate={9.7} />
            <div className={cx("company-new-order", "item")}>
                <Link href="./test" label="Заказать" icon={IcArrowRight}>
                    1
                </Link>
            </div>
        </SiteContentBlock>
    );
};
