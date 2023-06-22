import roomGrey from "@/assets/rooms/grey/room-grey.jpg";
import roomGrey_1 from "@/assets/rooms/grey/room-grey-1.jpg";
import roomGrey_2 from "@/assets/rooms/grey/room-grey-2.jpg";
import roomGrey_3 from "@/assets/rooms/grey/room-grey-3.jpg";
import roomGrey_4 from "@/assets/rooms/grey/room-grey-4.jpg";
import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import type { RoomConfig } from "@/types/configs";

/*
    Инструкция по конфигурационному файлу страницы комнаты:
    Все параметры, прописанные в этом файле, относятся только к grey комнате.

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

export const GREY_ROOM_CONFIG: RoomConfig = {
    name: "grey",
    uid: "286747",
    photos: [
        { src: roomGrey.src, alt: "grey" },
        { src: roomGrey_1.src, alt: "grey" },
        { src: roomGrey_2.src, alt: "grey" },
        { src: roomGrey_3.src, alt: "grey" },
    ],
    description:
        "<span style='font-weight: bold'>M Apart Grey</span>  –  сдержанность с акцентами на роскошь и успех.\n\n" +
        "Харизматичное пространство для идеального отдыха. В апартаментах есть все для комфортной жизни: мини кухня, " +
        "двуспальная кровать с белоснежными, чистыми простынями, комфортная ванная комната, " +
        "чистые, мягкие полотенца, фен, личный санузел, ТВ и высокоскоростной интернет, кондиционер.",
    createOrderButtonImage: roomGrey_5.src,
    color: "#efefef",

    price: 3900,
    weekdayPrice: 3900,
    weekendsPrice: 4400,
    weekPrice: 4000,
};
