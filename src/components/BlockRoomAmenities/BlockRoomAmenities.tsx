import type { FC, SVGAttributes } from "react";
import { useMemo } from "react";
import cnBind from "classnames/bind";

import { IcAirCondition, IcHairDryer, IcKitchen, IcTowel, IcTv, IcWifi } from "@/assets/icon";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { GLOBAL_CONFIG } from "@/configs";
import { MainAnchorType } from "@/routes";

import type { BlockRoomAmenitiesProps } from "./BlockRoomAmenities.types";

import styles from "./BlockRoomAmenities.module.scss";

const cx = cnBind.bind(styles);
export const BlockRoomAmenities = ({ withMap, className, containerClassName }: BlockRoomAmenitiesProps) => {
    const items = useMemo<{ icon: FC<SVGAttributes<SVGElement>>; title: string }[]>(
        () => [
            { icon: IcWifi, title: "Wi-Fi" },
            { icon: IcTv, title: "Телевизор" },
            { icon: IcHairDryer, title: "Фен" },
            { icon: IcKitchen, title: "Мини-кухня" },
            { icon: IcTowel, title: "Набор полотенец" },
            { icon: IcAirCondition, title: "Кондиционер" },
        ],
        [],
    );

    return (
        <SiteContentBlock
            className={cx("block-room-amenities", className)}
            containerClassName={containerClassName}
            id={MainAnchorType.ADVANTAGES}
        >
            <div className={cx("content")}>
                <div>
                    <span className={cx("title")}>В каждом номере есть</span>
                </div>
                <div className={cx("list")}>
                    {items.map(({ icon: Icon, title }) => (
                        <div key={title} className={cx("item")}>
                            <Icon className={cx("item-icon")} />
                            <span className={cx("item-title")}>{title}</span>
                        </div>
                    ))}
                </div>
            </div>
            {withMap && (
                <div className={cx("map-wrapper")} id={MainAnchorType.LOCATION}>
                    <iframe
                        className={cx("map")}
                        src={GLOBAL_CONFIG.MAP_IFRAME_HREF}
                        width="100%"
                        height="456"
                        frameBorder="0"
                    />
                </div>
            )}
        </SiteContentBlock>
    );
};
