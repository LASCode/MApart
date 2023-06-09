import roomBlue_3 from "@/assets/rooms/blue/room-blue.webp";
import roomBlue from "@/assets/rooms/blue/room-blue-1.webp";
import roomBlue_1 from "@/assets/rooms/blue/room-blue-2.webp";
import roomBlue_2 from "@/assets/rooms/blue/room-blue-4.webp";
import roomGreen_3 from "@/assets/rooms/green/room-green.webp";
import roomGreen_2 from "@/assets/rooms/green/room-green-4.webp";
import roomGreen_1 from "@/assets/rooms/green/room-green-5.webp";
import roomGreen from "@/assets/rooms/green/room-green-6.webp";
import roomGrey_3 from "@/assets/rooms/grey/room-grey-1.webp";
import roomGrey_2 from "@/assets/rooms/grey/room-grey-2.webp";
import roomGrey_1 from "@/assets/rooms/grey/room-grey-3.webp";
import roomGrey from "@/assets/rooms/grey/room-grey-4.webp";
import roomGrey_4 from "@/assets/rooms/grey/room-grey-5.jpg";
import roomRose from "@/assets/rooms/rose/room-rose.jpg";
import roomRose_1 from "@/assets/rooms/rose/room-rose-1.jpg";
import roomRose_2 from "@/assets/rooms/rose/room-rose-2.jpg";
import roomRose_3 from "@/assets/rooms/rose/room-rose-3.jpg";
import roomRose_4 from "@/assets/rooms/rose/room-rose-4.jpg";
import roomRose_5 from "@/assets/rooms/rose/room-rose-5.jpg";
import roomYellow_4 from "@/assets/rooms/yellow/room-yellow.webp";
import roomYellow from "@/assets/rooms/yellow/room-yellow-1.webp";
import roomYellow_1 from "@/assets/rooms/yellow/room-yellow-2.webp";
import roomYellow_2 from "@/assets/rooms/yellow/room-yellow-3.webp";
import roomYellow_3 from "@/assets/rooms/yellow/room-yellow-4.webp";
import type { GlobalConfig } from "@/types/configs";

export const HOMEPAGE_CONFIG = {
    HERO_TITLE: "M Apart",
    HERO_DESCRIPTION: "Апарт отель по доступным ценам в центре Петербурга",
    HERO_ITEMS: [roomGrey_3.src, roomBlue_1.src, roomYellow.src, roomRose.src, roomGreen.src],
    ABOUT_US_SUBTITLE: undefined,
    ABOUT_US_DESCRIPTION:
        "M Apart в центре Петербурга - пространство уюта, гармонии и неповторимой атмосферы.\n Привлекательные цены, уникальность и креатив дизайнерского стиля апартаментов сделают Ваш отдых незабываем и великолепным. \n\n В каждом номере созданы все условия для комфортного проживания: мини кухня, холодильник, удобная двуспальная кровать, личный санузел, ванная комната с душем, кондиционер, телевизор, высокоскоростной Wi-Fi интернет.",
    ABOUT_US_VIDEO_LINk: roomYellow_4.src,
    ABOUT_US_VIDEO_THUMBNAIL: roomYellow_4.src,

    GALLERY: [
        roomBlue.src,
        roomBlue_1.src,
        roomBlue_2.src,
        roomBlue_3.src,
        roomGreen.src,
        roomGreen_1.src,

        roomGreen_2.src,
        roomGreen_3.src,
        roomGrey.src,
        roomGrey_1.src,
        roomGrey_2.src,
        roomGrey_3.src,

        roomGrey_4.src,
        roomRose.src,
        roomRose_1.src,
        roomRose_2.src,
        roomRose_3.src,
        roomRose_4.src,

        roomRose_5.src,
        roomYellow.src,
        roomYellow_1.src,
        roomYellow_2.src,
        roomYellow_3.src,
        roomYellow_4.src,
    ],
};

export const GLOBAL_CONFIG: GlobalConfig = {
    BNOVO_WIDGET_TOKEN: "3a67f48f-c5a6-400f-b77a-f6a6a20d5e12",
    SOCIALS_WHATSUP: "https://wa.me/79313555551",
    SOCIALS_TELEGRAM: "https://t.me/m_apart_spb",
    SOCIALS_VKONTAKTE: undefined,
    TEL_NUMBER: "79313555551",
};
