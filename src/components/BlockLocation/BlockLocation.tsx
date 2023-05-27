import cnBind from "classnames/bind";

import { RoomAmenities } from "@/components/BlockRoomAmenities/RoomAmenities";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { useIsMobile } from "@/hooks/useIsMobile";

import styles from "./BlockLocation.module.scss";

const cx = cnBind.bind(styles);

export const BlockLocation = () => {
    const isMobile = useIsMobile();

    return (
        <SiteContentBlock className={cx("block-location")}>
            <RoomAmenities />
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1539f7e7a294d20b2b6f1f3f06cc98f294b5792bf768dc3def8cbae130f8ad72&amp;source=constructor"
                width="100%"
                height="456"
                frameBorder="0"
            />
        </SiteContentBlock>
    );
};
