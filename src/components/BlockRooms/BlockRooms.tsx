import { useCallback, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";

import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { RoomCard } from "@/components/RoomCard/RoomCard";
import { BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM } from "@/constants/rooms";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MainAnchorType } from "@/routes";

import styles from "./BlockRooms.module.scss";

const cx = cnBind.bind(styles);

const sliderItems = [BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM];

export const BlockRooms = () => {
    const isMobile = useIsMobile();
    const [isCreateOrderModalOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const [bgColor, setBgColor] = useState("");

    const blockRef = useRef<HTMLDivElement>(null);

    const handleRoomCardMouseEnter = useCallback((name: string) => {
        blockRef.current?.classList.add(name);
    }, []);

    const handleRoomCardMouseLeave = useCallback((name: string) => {
        blockRef.current?.classList.remove(name);
    }, []);

    return (
        <div className={cx("block-rooms", isMobile ? bgColor : "")} id={MainAnchorType.ROOMS} ref={blockRef}>
            {isMobile && <h2 className={cx("title")}>номера</h2>}
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
                                onRentButtonCLick={openCreateOrderModal}
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
                        onRentButtonCLick={openCreateOrderModal}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                    <RoomCard
                        className={cx("room", "room-yellow")}
                        images={BLUE_ROOM.photos}
                        name={BLUE_ROOM.name}
                        price={BLUE_ROOM.price}
                        onRentButtonCLick={openCreateOrderModal}
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
                        onRentButtonCLick={openCreateOrderModal}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                    <RoomCard
                        className={cx("room", "room-green")}
                        images={GREEN_ROOM.photos}
                        name={GREEN_ROOM.name}
                        price={GREEN_ROOM.price}
                        onRentButtonCLick={openCreateOrderModal}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                    <RoomCard
                        className={cx("room", "room-grey")}
                        images={GREY_ROOM.photos}
                        name={GREY_ROOM.name}
                        price={GREY_ROOM.price}
                        onRentButtonCLick={openCreateOrderModal}
                        onMouseEnter={handleRoomCardMouseEnter}
                        onMouseLeave={handleRoomCardMouseLeave}
                    />
                </div>
            </div>
            <CreateOrderModal isOpen={isCreateOrderModalOpen} onClose={closeCreateOrderModal} />
        </div>
    );
};
