import { useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";

import { BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM } from "@/constants/rooms";

import { RoomCard } from "../RoomCard/RoomCard";

import styles from "./BlockRooms.module.scss";

const cx = cnBind.bind(styles);

const sliderItems = [BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM];

export const BlockRooms = () => {
    const [bgColor, setBgColor] = useState("");

    const handleRoomCardMouseEnter = useCallback((name: string) => {
        setBgColor(name);
    }, []);

    const handleRoomCardMouseLeave = useCallback(() => {
        setBgColor("");
    }, []);

    return (
        <div className={cx("block-rooms", bgColor)}>
            <div className={cx("content-mobile")}>
                <Carousel
                    centerMode
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    emulateTouch
                    onChange={(index) => setBgColor(sliderItems[index].name)}
                >
                    {sliderItems.map((item, index) => (
                        <div className={cx("room-slide")} key={index}>
                            <RoomCard
                                className={cx("room-mobile")}
                                images={item.photos}
                                name={item.name}
                                price={item.price}
                                onMoreButtonClick={() => undefined}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={cx("content-desktop")}>
                <div className={cx("rooms-left")}>
                    <h2 className={cx("title")}>номера</h2>
                    <RoomCard
                        className={cx("room", "room-yellow")}
                        images={YELLOW_ROOM.photos}
                        name={YELLOW_ROOM.name}
                        price={YELLOW_ROOM.price}
                        onMoreButtonClick={() => undefined}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                    <RoomCard
                        className={cx("room", "room-yellow")}
                        images={BLUE_ROOM.photos}
                        name={BLUE_ROOM.name}
                        price={BLUE_ROOM.price}
                        onMoreButtonClick={() => undefined}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                </div>
                <div className={cx("rooms-right")}>
                    <RoomCard
                        className={cx("room", "room-rose")}
                        images={ROSE_ROOM.photos}
                        name={ROSE_ROOM.name}
                        price={ROSE_ROOM.price}
                        onMoreButtonClick={() => undefined}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                    <RoomCard
                        className={cx("room", "room-green")}
                        images={GREEN_ROOM.photos}
                        name={GREEN_ROOM.name}
                        price={GREEN_ROOM.price}
                        onMoreButtonClick={() => undefined}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                    <RoomCard
                        className={cx("room", "room-grey")}
                        images={GREY_ROOM.photos}
                        name={GREY_ROOM.name}
                        price={GREY_ROOM.price}
                        onMoreButtonClick={() => undefined}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                </div>
            </div>
        </div>
    );
};
