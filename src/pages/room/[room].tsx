/* eslint-disable @next/next/no-img-element */
import cnBind from "classnames/bind";
import { useRouter } from "next/router";

import basePhoto from "@/assets/rooms/room-template-about-us.png";
import { Button } from "@/components/Button";
import { DoubleCarousel } from "@/components/DoubleCarousel";
import { BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM } from "@/constants/rooms";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/roomPage.module.scss";

const cx = cnBind.bind(styles);

const rooms = {
    yellow: YELLOW_ROOM,
    green: GREEN_ROOM,
    grey: GREY_ROOM,
    rose: ROSE_ROOM,
    blue: BLUE_ROOM,
};

export default function Page() {
    const router = useRouter();
    const roomName = (router.query.room as keyof typeof rooms) ?? "yellow";

    return (
        <PageLayout withHeader layoutClassName={cx("room-page-layout", roomName)} className={cx("room-page")}>
            <h1 className={cx("title")}>{roomName}</h1>
            <div className={cx("carousel-wrapper")}>
                <DoubleCarousel images={rooms[roomName].doublePhoto} />
            </div>
            <div className={cx("info")}>
                <div className={cx("base-photo")}>
                    <img src={basePhoto.src} alt="flowers" />
                </div>
                <div className={cx("description")}>
                    <p className={cx("description-text")}>{rooms[roomName].description}</p>
                    <Button className={cx("button")}>Забронировать</Button>
                    <div className={cx("description-img")}>
                        <img src={rooms[roomName].phonePhoto.src} alt={rooms[roomName].phonePhoto.src} />
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}
