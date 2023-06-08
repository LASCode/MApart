import roomGreen_2 from "@/assets/rooms/green/room-green-2.webp";
import roomGreen_4 from "@/assets/rooms/green/room-green-4.webp";
import roomGreen_5 from "@/assets/rooms/green/room-green-5.webp";
import roomGreen_6 from "@/assets/rooms/green/room-green-6.webp";
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
        { src: roomGreen_6.src, alt: "green" },
        { src: roomGreen_5.src, alt: "green" },
        { src: roomGreen_4.src, alt: "green" },
        { src: roomGreen_2.src, alt: "green" },
    ],
    description:
        "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",
    createOrderButtonImage: roomGrey_5.src,
    color: "#d0dfd2",

    price: 4300,
    weekdayPrice: 4300,
    weekendsPrice: 4500,
    weekPrice: 4000,
};
