import roomGrey_1 from "@/assets/rooms/grey/room-grey-1.webp";
import roomGrey_2 from "@/assets/rooms/grey/room-grey-2.webp";
import roomGrey_3 from "@/assets/rooms/grey/room-grey-3.webp";
import roomGrey_4 from "@/assets/rooms/grey/room-grey-4.webp";
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
        { src: roomGrey_4.src, alt: "grey" },
        { src: roomGrey_2.src, alt: "grey" },
        { src: roomGrey_3.src, alt: "grey" },
        { src: roomGrey_1.src, alt: "grey" },
    ],
    description:
        "Апартаменты в расслабляющих оттенках зеленого, символ природы и возрождения.\n" +
        "Комфортное пространство, создано специально для Вас с уютом и теплотой. Здесь вы сможете отдохнуть, " +
        "насладиться тишиной и спокойствием. В апартаментах есть все для комфортной жизни: мини кухня, двуспальная " +
        "кровать с белоснежными, чистыми простынями, раскладывающийся мягкий, удобный диван, комфортная ванная комната, " +
        "чистые, мягкие полотенца, фен, личный санузел, ТВ и высокоскоростной интернет.",
    createOrderButtonImage: roomGrey_5.src,
    color: "#efefef",

    price: 600,
    weekdayPrice: 600,
    weekendsPrice: 600,
    weekPrice: 4000,
};
