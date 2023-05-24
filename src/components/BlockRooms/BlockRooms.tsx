import { useCallback, useState } from "react";
import cnBind from "classnames/bind";

import { BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM } from "@/constants/rooms";

import { RoomCard } from "../RoomCard/RoomCard";

import styles from "./BlockRooms.module.scss";

const cx = cnBind.bind(styles);

export const BlockRooms = () => {
    const [bgColor, setBgColor] = useState("");

    const handleRoomCardMouseEnter = useCallback((name: string) => {
        setBgColor(name);
    }, []);

    const handleRoomCardMouseLeave = useCallback(() => {
        setBgColor('');
    }, []);

    return (
        <div className={cx("block-rooms", bgColor)}>
            <div className={cx("rooms-left")}>
                <h2 className={cx("title")}>номера</h2>
                <RoomCard
                    className={cx("room", "room-yellow")}
                    images={YELLOW_ROOM.photos.slice(0, 4)}
                    name={YELLOW_ROOM.name}
                    price={YELLOW_ROOM.price}
                    onMoreButtonClick={() => undefined}
                    onMouseEnter={handleRoomCardMouseEnter}
                    onMouseLeave={handleRoomCardMouseLeave}
                />
                <RoomCard
                    className={cx("room", "room-yellow")}
                    images={BLUE_ROOM.photos.slice(0, 4)}
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
                    images={ROSE_ROOM.photos.slice(0, 2)}
                    name={ROSE_ROOM.name}
                    price={ROSE_ROOM.price}
                    onMoreButtonClick={() => undefined}
                    onMouseEnter={handleRoomCardMouseEnter}
                    onMouseLeave={handleRoomCardMouseLeave}
                />
                <RoomCard
                    className={cx("room", "room-green")}
                    images={GREEN_ROOM.photos.slice(0, 4)}
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
    );
};
