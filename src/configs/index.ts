import roomBlue from "@/assets/rooms/blue/room-blue.jpg";
import roomBlue_1 from "@/assets/rooms/blue/room-blue-1.jpg";
import roomBlue_2 from "@/assets/rooms/blue/room-blue-2.jpg";
import roomBlue_3 from "@/assets/rooms/blue/room-blue-3.jpg";
import roomGreen from "@/assets/rooms/green/room-green.jpg";
import roomGreen_1 from "@/assets/rooms/green/room-green-1.jpg";
import roomGreen_2 from "@/assets/rooms/green/room-green-2.jpg";
import roomGreen_3 from "@/assets/rooms/green/room-green-3.jpg";
import roomGreen_4 from "@/assets/rooms/green/room-green-4.jpg";
import roomGreen_5 from "@/assets/rooms/green/room-green-5.jpg";
import roomGreen_6 from "@/assets/rooms/green/room-green-6.jpg";
import roomGrey from "@/assets/rooms/grey/room-grey.jpg";
import roomGrey_1 from "@/assets/rooms/grey/room-grey-1.jpg";
import roomGrey_2 from "@/assets/rooms/grey/room-grey-2.jpg";
import roomGrey_3 from "@/assets/rooms/grey/room-grey-3.jpg";
import roomGrey_4 from "@/assets/rooms/grey/room-grey-4.jpg";
import roomRose from "@/assets/rooms/rose/room-rose.jpg";
import roomRose_1 from "@/assets/rooms/rose/room-rose-1.jpg";
import roomRose_2 from "@/assets/rooms/rose/room-rose-2.jpg";
import roomRose_3 from "@/assets/rooms/rose/room-rose-3.jpg";
import roomRose_4 from "@/assets/rooms/rose/room-rose-4.jpg";
import roomRose_5 from "@/assets/rooms/rose/room-rose-5.jpg";
import roomYellow from "@/assets/rooms/yellow/room-yellow.jpg";
import roomYellow_1 from "@/assets/rooms/yellow/room-yellow-1.jpg";
import roomYellow_2 from "@/assets/rooms/yellow/room-yellow-2.jpg";
import roomYellow_3 from "@/assets/rooms/yellow/room-yellow-3.jpg";
import roomYellow_4 from "@/assets/rooms/yellow/room-yellow-4.jpg";
import roomYellow_5 from "@/assets/rooms/yellow/room-yellow-5.jpg";
import roomYellow_6 from "@/assets/rooms/yellow/room-yellow-6.jpg";
import rose_main from "@/assets/rooms/rose-main.jpg";
import type { GlobalConfig } from "@/types/configs";

export const HOMEPAGE_CONFIG = {
    HERO_TITLE: "M Apart",
    HERO_DESCRIPTION: "Апарт отель по доступным ценам в центре Петербурга",
    HERO_ITEMS: [roomGrey_3.src, rose_main.src, roomBlue.src, roomYellow.src, roomGreen.src],
    ABOUT_US_SUBTITLE: undefined,
    ABOUT_US_DESCRIPTION:
        "M Apart в центре Петербурга - пространство уюта, гармонии и неповторимой атмосферы. Привлекательные цены, уникальность и креатив дизайнерского стиля апартаментов сделают Ваш отдых незабываем и великолепным. В каждом номере созданы все условия для комфортного проживания: мини кухня, холодильник, удобная двуспальная кровать, личный санузел, ванная комната с душем, кондиционер, телевизор, высокоскоростной Wi-Fi интернет.",
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
        roomGreen_4.src,
        roomGreen_5.src,
        roomGreen_6.src,
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
        roomYellow_5.src,
        roomYellow_6.src,
    ],
};

/*
 * BNOVO_WIDGET_TOKEN - Токен бново
 * BNOVO_WIDGET_DEFAULT_GUESTS - Базовое количество гостей
 * BNOVO_WIDGET_DEFAULT_ARRIVAL_DATE - Дата заезда (n-дней от текущей даты) (0 - отключено)
 * BNOVO_WIDGET_DEFAULT_DEPARTURE_DATE - Дата отъезда (n-дней от даты заезда) (0 - отключено)
 *
 * !! ВНИМАНИЕ !!
 * Отключение одной из дат приведет к отключению второй.
 * Отключить дату отъезда, но оставить дату заезда не получится.
 * !! ВНИМАНИЕ !!
 */

export const GLOBAL_CONFIG: GlobalConfig = {
    BNOVO_WIDGET_TOKEN: "3a67f48f-c5a6-400f-b77a-f6a6a20d5e12",
    BNOVO_WIDGET_DEFAULT_GUESTS: 1,
    BNOVO_WIDGET_DEFAULT_ARRIVAL_DATE: 0,
    BNOVO_WIDGET_DEFAULT_DEPARTURE_DATE: 0,

    SOCIALS_WHATSUP: "https://wa.me/79313555551",
    SOCIALS_TELEGRAM: "https://t.me/m_apart_spb",
    SOCIALS_VKONTAKTE: undefined,
    TEL_NUMBER: "79313555551",
};
