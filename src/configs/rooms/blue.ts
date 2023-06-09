import roomBlue from "@/assets/rooms/blue/room-blue.jpg";
import roomBlue_1 from "@/assets/rooms/blue/room-blue-1.jpg";
import roomBlue_2 from "@/assets/rooms/blue/room-blue-2.jpg";
import roomBlue_3 from "@/assets/rooms/blue/room-blue-3.jpg";
import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import type { RoomConfig } from "@/types/configs";

/*
    Инструкция по конфигурационному файлу страницы комнаты:
    Все параметры, прописанные в этом файле, относятся только к blue комнате.

    name - Имя комнаты, отображается на странице;
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

export const BLUE_ROOM_CONFIG: RoomConfig = {
    name: "blue",
    uid: "333884",
    photos: [
        { src: roomBlue.src, alt: "blue" },
        { src: roomBlue_1.src, alt: "blue" },
        { src: roomBlue_2.src, alt: "blue" },
    ],
    description:
        "<span style='font-weight: bold'>M Apart Blue</span>  -  апартаменты в синих оттенках неба, подарят Вам " +
        "ощущение безмятежности, чистоты и умиротворения.\n\n" +
        "Мы создали для Вас пространство, где вы сможете отдохнуть, провести время с друзьями и любимыми, насладиться " +
        "атмосферой покоя и гармонии. В апартаментах есть все для комфортной жизни: мини кухня, двуспальная кровать с " +
        "белоснежными, чистыми простынями, раскладывающийся мягкий, удобный диван, комфортная ванная комната, чистые, " +
        "мягкие полотенца, фен, личный санузел, ТВ и высокоскоростной интернет.",
    createOrderButtonImage: roomGrey_5.src,
    color: "#ddedff",

    price: 4400,
    weekdayPrice: 4400,
    weekendsPrice: 5200,
    weekPrice: 4000,
};
