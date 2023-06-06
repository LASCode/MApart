import { useCallback, useMemo, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import cnBind from "classnames/bind";

import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { RoomCard } from "@/components/RoomCard/RoomCard";
import { ROOMS_CONFIG } from "@/configs/rooms";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsMobile } from "@/hooks/useIsMobile";
import { MainAnchorType } from "@/routes";
import type { RoomConfig } from "@/types/configs";

import styles from "./BlockRooms.module.scss";

const cx = cnBind.bind(styles);

export const BlockRooms = () => {
    const isMobile = useIsMobile();
    const [selectedRoom, setSelectedRoom] = useState<string>();
    const [isCreateOrderModalOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState(false);
    const [bgColor, setBgColor] = useState(ROOMS_CONFIG[0].color);

    const [leftRooms, rightRooms] = useMemo(
        () =>
            ROOMS_CONFIG.reduce<[RoomConfig[], RoomConfig[]]>(
                (acc, curr, index, arr) => {
                    acc[index < Math.floor(arr.length / 2) ? 0 : 1].push(curr);

                    return acc;
                },
                [[], []],
            ),
        [],
    );

    const blockRef = useRef<HTMLDivElement>(null);

    const handleRoomClick = useCallback(
        (id: string) => {
            setSelectedRoom(id);
            openCreateOrderModal();
        },
        [openCreateOrderModal],
    );

    const handleRoomCardMouseEnter = useCallback((name: string, color: string) => {
        if (!blockRef.current) return;
        blockRef.current.style.backgroundColor = color;
    }, []);
    const handleRoomCardMouseLeave = useCallback(() => {
        if (!blockRef.current) return;
        blockRef.current.style.backgroundColor = "";
    }, []);

    return (
        <div
            className={cx("block-rooms")}
            id={MainAnchorType.ROOMS}
            ref={blockRef}
            style={{ background: isMobile ? bgColor : undefined }}
        >
            {isMobile && <h2 className={cx("title")}>номера</h2>}
            <div className={cx("content-mobile")}>
                <Carousel
                    centerMode
                    showThumbs={false}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    emulateTouch
                    onChange={(index) => setBgColor(ROOMS_CONFIG[index].color)}
                >
                    {ROOMS_CONFIG.map((item, index) => (
                        <div className={cx("room-slide")} key={index}>
                            <RoomCard
                                className={cx("room-mobile")}
                                images={item.photos}
                                name={item.name}
                                price={item.price}
                                color={item.color}
                                onRentButtonCLick={() => item.uid && handleRoomClick(item.uid)}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={cx("content-desktop")}>
                <div className={cx("rooms-left")}>
                    <h2 className={cx("title")}>номера</h2>
                    {leftRooms.map((el) => (
                        <RoomCard
                            key={el.name}
                            className={cx("room", el.name)}
                            images={el.photos}
                            name={el.name}
                            price={el.price}
                            color={el.color}
                            onRentButtonCLick={() => el.uid && handleRoomClick(el.uid)}
                            onMouseEnter={handleRoomCardMouseEnter}
                            onMouseLeave={handleRoomCardMouseLeave}
                        />
                    ))}
                </div>
                <div className={cx("rooms-right")}>
                    {rightRooms.map((el) => (
                        <RoomCard
                            key={el.name}
                            className={cx("room", el.name)}
                            images={el.photos}
                            name={el.name}
                            price={el.price}
                            color={el.color}
                            onRentButtonCLick={() => el.uid && handleRoomClick(el.uid)}
                            onMouseEnter={handleRoomCardMouseEnter}
                            onMouseLeave={handleRoomCardMouseLeave}
                        />
                    ))}
                </div>
            </div>
            <CreateOrderModal roomId={selectedRoom} isOpen={isCreateOrderModalOpen} onClose={closeCreateOrderModal} />
        </div>
    );
};
