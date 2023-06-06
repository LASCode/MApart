import { useEffect } from "react";
import cnBind from "classnames/bind";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { IcArrowRight } from "@/assets/icon";
import roomGrey_5 from "@/assets/rooms/room-grey-5.webp";
import { BlockRoomAmenities } from "@/components/BlockRoomAmenities";
import { Button } from "@/components/Button";
import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { Fancybox } from "@/components/Fancy";
import { FancyCarousel } from "@/components/FancyCarousel";
import { RentBanner } from "@/components/RentBanner";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { BLUE_ROOM, GREEN_ROOM, GREY_ROOM, ROSE_ROOM, YELLOW_ROOM } from "@/constants/rooms";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
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

interface RoomPageProps {
    roomName: string;
    isValid: boolean;
    roomData: (typeof rooms)[keyof typeof rooms] | null;
}
export default function Page({ isValid, roomData, roomName }: RoomPageProps) {
    const router = useRouter();
    const isDesktop = useIsDesktop();
    const showDefaultButton = useWindowSizeTo(950);

    const [isCreateOrderModalOpen, openCreateOrderModal, closeCreateOrderModal] = useBooleanState();

    useEffect(() => {
        if (!isValid) {
            void router.push("/");
        }
    }, [isValid, router]);

    if (!isValid) return null;

    return (
        <PageLayout
            withHeader
            withFooter
            headerProps={{ onlyModal: true }}
            layoutClassName={cx("room-page-layout", roomName)}
            className={cx("room-page")}
        >
            {isValid && roomData ? (
                <>
                    <h1 className={cx("title")}>{roomName}</h1>
                    <Fancybox>
                        <FancyCarousel withThumbs={!isDesktop}>
                            {roomData.photos.map(({ src, alt }) => (
                                <div key={src} className="f-carousel__slide" data-thumb-src={src}>
                                    <Image src={src} width={600} height={400} alt={alt} data-fancybox data-rsc={src} />
                                </div>
                            ))}
                        </FancyCarousel>
                    </Fancybox>
                    <SiteContentBlock className={cx("about-us")} containerClassName={cx("about-us-container")}>
                        <p className={cx("description-text")}>{roomData.description}</p>
                        {showDefaultButton ? (
                            <Button className={cx("button")} onClick={openCreateOrderModal}>
                                Забронировать
                            </Button>
                        ) : (
                            <div className={cx("company-new-order", "item")} onClick={openCreateOrderModal}>
                                <Image
                                    src={roomGrey_5.src}
                                    alt="Создание заказа"
                                    width={900}
                                    height={300}
                                    className={cx("bg")}
                                />
                                <div className={cx("button-order")}>
                                    <span>Забронировать</span>
                                    <IcArrowRight />
                                </div>
                            </div>
                        )}
                    </SiteContentBlock>
                    <BlockRoomAmenities withMap={false} containerClassName={cx("room-amenities")} />
                    <div className={cx("rent-banner-wrapper")}>
                        <RentBanner
                            className={cx("rent-banner")}
                            weekdayPrice={roomData.weekdayPrice}
                            weekendsPrice={roomData.weekendsPrice}
                            weekPrice={roomData.weekPrice}
                            onRentButtonClick={openCreateOrderModal}
                        />
                    </div>
                    <CreateOrderModal
                        roomId={roomData.uid}
                        isOpen={isCreateOrderModalOpen}
                        onClose={closeCreateOrderModal}
                    />
                </>
            ) : null}
        </PageLayout>
    );
}

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => ({
    paths: Object.keys(rooms).map((el) => ({ params: { room: el } })),
    fallback: true,
});
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<RoomPageProps> = async ({ params }) => {
    const id = params?.room as string;
    const isValidRoom = Object.keys(rooms).includes(id);
    const roomData = rooms?.[id as keyof typeof rooms] || null;

    return { props: { isValid: isValidRoom, roomData, roomName: id } };
};
