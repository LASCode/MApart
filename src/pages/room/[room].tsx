import { useEffect } from "react";
import cnBind from "classnames/bind";
import parceToHtml from "html-react-parser";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

import { IcArrowRight } from "@/assets/icon";
import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import { BlockRoomAmenities } from "@/components/BlockRoomAmenities";
import { Button } from "@/components/Button";
import { CreateOrderModal } from "@/components/CreateOrderModal/CreateOrderModal";
import { Fancybox } from "@/components/Fancy";
import { FancyCarousel } from "@/components/FancyCarousel";
import { RentBanner } from "@/components/RentBanner";
import { SiteContentBlock } from "@/components/SiteContentBlock";
import { ROOMS_CONFIG } from "@/configs/rooms";
import { useBooleanState } from "@/hooks/useBooleanState";
import { useIsDesktop } from "@/hooks/useIsDesktop";
import { useWindowSizeTo } from "@/hooks/useWindowSizeTo";
import { PageLayout } from "@/layouts/PageLayout";
import styles from "@/styles/pages/roomPage.module.scss";
import type { RoomConfig } from "@/types/configs";

const cx = cnBind.bind(styles);

interface RoomPageProps {
    isValid: boolean;
    roomData: RoomConfig | null;
}
export default function Page({ isValid, roomData }: RoomPageProps) {
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
            layoutClassName={cx("room-page-layout")}
            layoutStyles={{ background: roomData?.color }}
            className={cx("room-page")}
        >
            {isValid && roomData ? (
                <>
                    <h1 className={cx("title")}>{roomData.name}</h1>
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
                        <p className={cx("description-text")}>{parceToHtml(roomData.description)}</p>
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
    paths: ROOMS_CONFIG.map((el) => ({ params: { room: el.name } })),
    fallback: true,
});
// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps<RoomPageProps> = async ({ params }) => {
    const id = params?.room;
    const isValidRoom = ROOMS_CONFIG.some((el) => el.name === id);
    const roomData = ROOMS_CONFIG.find((el) => el.name === id) || null;

    return { props: { isValid: isValidRoom, roomData } };
};
