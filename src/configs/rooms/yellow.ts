import roomYellow from "@/assets/rooms/yellow/room-yellow.jpg";
import roomYellow_1 from "@/assets/rooms/yellow/room-yellow-1.jpg";
import roomYellow_2 from "@/assets/rooms/yellow/room-yellow-2.jpg";
import roomYellow_3 from "@/assets/rooms/yellow/room-yellow-3.jpg";
import roomYellow_4 from "@/assets/rooms/yellow/room-yellow-4.jpg";
import roomYellow_5 from "@/assets/rooms/yellow/room-yellow-5.jpg";
import roomYellow_6 from "@/assets/rooms/yellow/room-yellow-6.jpg";
import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import type { RoomConfig } from "@/types/configs";

/*
    Инструкция по конфигурационному файлу страницы комнаты:
    Все параметры, прописанные в этом файле, относятся только к yellow комнате.

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

export const YELLOW_ROOM_CONFIG: RoomConfig = {
    name: "yellow",
    uid: "333893",
    photos: [
        { src: roomYellow.src, alt: "yellow" },
        { src: roomYellow_1.src, alt: "yellow" },
        { src: roomYellow_2.src, alt: "yellow" },
        { src: roomYellow_3.src, alt: "yellow" },
        { src: roomYellow_4.src, alt: "yellow" },
        { src: roomYellow_5.src, alt: "yellow" },
        { src: roomYellow_6.src, alt: "yellow" },
    ],
    description:
        "<span style='font-weight: bold'>M Apart Yellow</span>  –  апартаменты выполнены в дизайнерском стиле в оттенках " +
        "цвета солнца, символа позитивной энергии и успокаивающего тепла.\n\n" +
        "Мы создали для Вас самую теплую атмосферу пространства. В апартаментах есть все для комфортной жизни: " +
        "мини кухня, двуспальная кровать с белоснежными, чистыми простынями, комфортная ванная комната, чистые, мягкие полотенца, " +
        "фен, личный санузел, ТВ и высокоскоростной интернет.\n",
    createOrderButtonImage: roomGrey_5.src,
    color: "#fef6ce",

    price: 3300,
    weekdayPrice: 3300,
    weekendsPrice: 3500,
    weekPrice: 4000,
};
