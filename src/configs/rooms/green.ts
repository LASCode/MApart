import roomGreen from "@/assets/rooms/green/room-green.jpg";
import roomGreen_1 from "@/assets/rooms/green/room-green-1.jpg";
import roomGreen_2 from "@/assets/rooms/green/room-green-2.jpg";
import roomGreen_3 from "@/assets/rooms/green/room-green-3.jpg";
import roomGreen_4 from "@/assets/rooms/green/room-green-4.jpg";
import roomGreen_5 from "@/assets/rooms/green/room-green-5.jpg";
import roomGreen_6 from "@/assets/rooms/green/room-green-6.jpg";
import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import type { RoomConfig } from "@/types/configs";

/*
    Инструкция по конфигурационному файлу страницы комнаты:
    Все параметры, прописанные в этом файле, относятся только к green комнате.

    name - Имя комнаты, отображается на странице + является id в ссылке https://m-apart.ru/room/<id>;
    uid - Идентификатор комнаты Bnovo. Необходим для корректной работы модуля бронирования.
          Значение можно заменить на undefined, тогда при открытии модуля этой страницы будут отображаться все
          доступные номера, вместо одного конкретного;
    photos - Фотографии в карусели (Карточка в блоке "номера" и на странице комнаты);
    description - Описание комнаты. Отображается на странице комнаты в карточке с кнопкой "Забронировать".
    createOrderButtonImage - Картинка, которая отображается внутри кнопки "Забронировать"
                             в десктоп версии страницы комнаты.
    color - Цвет фона страницы.
    price - Цена номера, отображается в карточке в блоке "номера"
    weekdayPrice - Цена номера в будни. Блок "Цены" на странице номера.
    weekendsPrice - Цена номера в выходные. Блок "Цены" на странице номера.
    weekPrice - Цена номера за неделю. Блок "Цены" на странице номера.
*/

export const GREEN_ROOM_CONFIG: RoomConfig = {
    name: "green",
    uid: "286748",
    photos: [
        { src: roomGreen.src, alt: "green" },
        { src: roomGreen_1.src, alt: "green" },
        { src: roomGreen_2.src, alt: "green" },
        { src: roomGreen_3.src, alt: "green" },
        { src: roomGreen_4.src, alt: "green" },
        { src: roomGreen_5.src, alt: "green" },
        { src: roomGreen_6.src, alt: "green" },
    ],
    description:
        "<span style='font-weight: bold'>M Apart Green</span>  –  апартаменты в расслабляющих оттенках зеленого, " +
        "символ природы и возрождения.\n\n" +
        "Комфортное пространство, создано специально для Вас с уютом и теплотой. Здесь вы сможете отдохнуть, насладиться " +
        "тишиной и спокойствием. В апартаментах есть все для комфортной жизни: мини кухня, двуспальная кровать с " +
        "белоснежными, чистыми простынями, раскладывающийся мягкий, удобный диван, комфортная ванная комната, чистые, " +
        "хрустящие полотенца, фен, личный санузел, ТВ и высокоскоростной интернет.",
    createOrderButtonImage: roomGrey_5.src,
    color: "#d0dfd2",

    price: 4300,
    weekdayPrice: 4300,
    weekendsPrice: 4500,
    weekPrice: 4000,
};
