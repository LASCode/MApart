import roomGrey_5 from "@/assets/rooms/grey/room-grey-5.webp";
import roomRose from "@/assets/rooms/rose/room-rose-main.jpg";
import roomRose_1 from "@/assets/rooms/rose/room-rose-1.jpg";
import roomRose_2 from "@/assets/rooms/rose/room-rose-2.jpg";
import roomRose_3 from "@/assets/rooms/rose/room-rose-3.jpg";
import roomRose_4 from "@/assets/rooms/rose/room-rose-4.jpg";
import roomRose_5 from "@/assets/rooms/rose/room-rose-5.jpg";
import type { RoomConfig } from "@/types/configs";

/*
    Инструкция по конфигурационному файлу страницы комнаты:
    Все параметры, прописанные в этом файле, относятся только к rose комнате.

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

export const ROSE_ROOM_CONFIG: RoomConfig = {
    name: "rose",
    uid: "333892",
    photos: [
        { src: roomRose.src, alt: "rose" },
        { src: roomRose_1.src, alt: "rose" },
        { src: roomRose_2.src, alt: "rose" },
        { src: roomRose_3.src, alt: "rose" },
        { src: roomRose_4.src, alt: "rose" },
        { src: roomRose_5.src, alt: "rose" },
    ],
    description:
        "<span style='font-weight: bold'>M Apart Rose</span>  –  апартаменты в розовых оттенках романтичности, любви и красоты.\n\n" +
        "Мы создали для Вас легкую атмосферу уюта, чистоты и невинности, здесь вы сможете отдохнуть, успокоить разум " +
        "и насладиться тишиной. В апартаментах есть все для комфортной жизни: мини кухня, двуспальная кровать с белоснежными, " +
        "чистыми простынями, комфортная ванная комната, чистые, мягкие полотенца, фен, личный санузел, ТВ и высокоскоростной интернет.",
    createOrderButtonImage: roomGrey_5.src,
    color: "#f8e4f0",

    price: 3900,
    weekdayPrice: 3900,
    weekendsPrice: 4400,
    weekPrice: 4000,
};
