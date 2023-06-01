/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import cnBind from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import { BlockRoomAmenities } from "@/components/BlockRoomAmenities";
import { Button } from "@/components/Button";
import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { DoubleCarousel } from "@/components/DoubleCarousel";
import { RentBanner } from "@/components/RentBanner";
import { BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM } from "@/constants/rooms";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsDesktop } from "@/hooks/useIsDesktop";
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
    const isValidRoom = Object.keys(rooms).includes(router.query.room as string) || router.query.room === undefined;
    const isDesktop = useIsDesktop();

    const [isCreateOrderModalOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState();

    useEffect(() => {
        if (!isValidRoom) {
            void router.push("/");
        }
    }, [isValidRoom, router]);

    return (
        <PageLayout
            withHeader
            withFooter
            headerProps={{ onlyModal: true }}
            layoutClassName={cx("room-page-layout", roomName)}
            className={cx("room-page")}
        >
            {isValidRoom ? (
                <>
                    <h1 className={cx("title")}>{roomName}</h1>
                    <div className={cx("carousel-wrapper")}>
                        <DoubleCarousel images={rooms[roomName].doublePhoto} />
                    </div>
                    <div className={cx("info")}>
                        {isDesktop && (
                            <div className={cx("base-photo")}>
                                <Image
                                    src="https://i.ibb.co/KLPycBz/room-template-about-us.png"
                                    alt="flowers"
                                    width={400}
                                    height={600}
                                />
                            </div>
                        )}
                        <div className={cx("description")}>
                            <p className={cx("description-text")}>{rooms[roomName].description}</p>
                            <Button className={cx("button")} onClick={openCreateOrderModal}>
                                Забронировать
                            </Button>
                            <div className={cx("description-img")}>
                                {!isDesktop && (
                                    <Image
                                        className={cx("shadow-img")}
                                        src="https://i.ibb.co/KLPycBz/room-template-about-us.png"
                                        alt="flowers"
                                        width={400}
                                        height={600}
                                    />
                                )}
                                <Image
                                    src={rooms[roomName].phonePhoto.src}
                                    alt={rooms[roomName].phonePhoto.src}
                                    width={400}
                                    height={600}
                                />
                            </div>
                        </div>
                    </div>
                    <BlockRoomAmenities withMap={false} containerClassName={cx("room-amenities")} />
                    <div className={cx("rent-banner-wrapper")}>
                        <RentBanner
                            className={cx("rent-banner")}
                            weekdayPrice={rooms[roomName].weekdayPrice}
                            weekendsPrice={rooms[roomName].weekendsPrice}
                            weekPrice={rooms[roomName].weekPrice}
                            onRentButtonClick={openCreateOrderModal}
                        />
                    </div>
                    <CreateOrderModal isOpen={isCreateOrderModalOpen} onClose={closeCreateOrderModal} />
                </>
            ) : null}
        </PageLayout>
    );
}
