import roomBlue from "@/assets/rooms/blue/room-blue.webp";
import roomBlue_1 from "@/assets/rooms/blue/room-blue-1.webp";
import roomBlue_2 from "@/assets/rooms/blue/room-blue-2.webp";
import roomBlue4 from "@/assets/rooms/blue/room-blue-4.webp";
import roomGreen from "@/assets/rooms/green/room-green.webp";
import roomGreen_1 from "@/assets/rooms/green/room-green-1.webp";
import roomGreen_5 from "@/assets/rooms/green/room-green-5.webp";
import roomGreen_6 from "@/assets/rooms/green/room-green-6.webp";
import roomGrey_3 from "@/assets/rooms/grey/room-grey-3.webp";
import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import HERO_1 from "@/assets/rooms/room-template-hero.webp";
import roomRose1 from "@/assets/rooms/rose/room-rose-1.webp";
import roomRose_3 from "@/assets/rooms/rose/room-rose-3.webp";
import roomYellow from "@/assets/rooms/yellow/room-yellow.webp";
import roomYellow_4 from "@/assets/rooms/yellow/room-yellow-4.webp";
import type { GlobalConfig } from "@/types/configs";

export const HOMEPAGE_CONFIG = {
    HERO_TITLE: "M Apart",
    HERO_DESCRIPTION: "Апарт отель по доступным ценам в центре Петербурга",
    HERO_ITEMS: [roomGrey_3.src, HERO_1.src, roomBlue4.src, roomRose1.src, roomGreen_5.src, roomBlue_2.src],
    ABOUT_US_SUBTITLE: undefined,
    ABOUT_US_DESCRIPTION:
        "MApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",
    ABOUT_US_VIDEO_LINk: roomYellow_4.src,
    ABOUT_US_VIDEO_THUMBNAIL: roomYellow_4.src,

    GALLERY: [
        roomBlue_1.src,
        roomBlue.src,
        roomBlue_2.src,
        roomGreen_1.src,
        roomGreen_5.src,
        roomGreen.src,

        roomGreen_6.src,
        roomGrey_5.src,
        roomYellow_4.src,
        roomRose_3.src,
        roomGrey_3.src,
        roomYellow.src,
    ],
};

export const GLOBAL_CONFIG: GlobalConfig = {
    BNOVO_WIDGET_TOKEN: "3a67f48f-c5a6-400f-b77a-f6a6a20d5e12",
    SOCIALS_WHATSUP: "https://wa.me/79313555551",
    SOCIALS_TELEGRAM: "https://t.me/m_apartments",
    SOCIALS_VKONTAKTE: undefined,
    TEL_NUMBER: "79313555551",
};
