import roomBlue from "@/assets/rooms/room-blue.jpg";
import roomBlue_1 from "@/assets/rooms/room-blue-1.jpg";
import roomBlue_2 from "@/assets/rooms/room-blue-2.jpg";
import roomBlue_3 from "@/assets/rooms/room-blue-3.jpg";
import roomBlue_4 from "@/assets/rooms/room-blue-4.jpg";
import roomGreen from "@/assets/rooms/room-green.jpg";
import roomGreen_1 from "@/assets/rooms/room-green-1.jpg";
import roomGreen_2 from "@/assets/rooms/room-green-2.jpg";
import roomGreen_3 from "@/assets/rooms/room-green-3.jpg";
import roomGreen_4 from "@/assets/rooms/room-green-4.jpg";
import roomGreen_5 from "@/assets/rooms/room-green-5.jpg";
import roomGreen_6 from "@/assets/rooms/room-green-6.jpg";
import roomGrey from "@/assets/rooms/room-grey.jpg";
import roomGrey_1 from "@/assets/rooms/room-grey-1.jpg";
import roomGrey_2 from "@/assets/rooms/room-grey-2.jpg";
import roomGrey_3 from "@/assets/rooms/room-grey-3.jpg";
import roomGrey_4 from "@/assets/rooms/room-grey-4.jpg";
import roomGrey_5 from "@/assets/rooms/room-grey-5.jpg";
import roomRose_1 from "@/assets/rooms/room-rose-1.jpg";
import roomRose_2 from "@/assets/rooms/room-rose-2.jpg";
import roomRose_3 from "@/assets/rooms/room-rose-3.jpg";
import roomRose_4 from "@/assets/rooms/room-rose-4.jpg";
import roomRose_5 from "@/assets/rooms/room-rose-5.jpg";
import roomYellow from "@/assets/rooms/room-yellow.jpg";
import roomYellow_1 from "@/assets/rooms/room-yellow-1.jpg";
import roomYellow_2 from "@/assets/rooms/room-yellow-2.jpg";
import roomYellow_3 from "@/assets/rooms/room-yellow-3.jpg";
import roomYellow_4 from "@/assets/rooms/room-yellow-4.jpg";

export const ROSE_ROOM = {
    name: "rose",
    price: 600,
    photos: [
        {
            src: roomRose_2.src,
            alt: "rose",
        },
        {
            src: roomRose_5.src,
            alt: "rose",
        },
    ],

    doublePhoto: [
        {
            bigImageSrc: roomRose_2.src,
            bigImageAlt: "rose",
            smallImageSrc: roomRose_4.src,
            smallImageAlt: "rose",
        },
        {
            bigImageSrc: roomRose_5.src,
            bigImageAlt: "rose",
            smallImageSrc: roomRose_1.src,
            smallImageAlt: "rose",
        },
    ],

    phonePhoto: {
        src: roomRose_3.src,
        alt: "reose",
    },

    description:
        "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

    weekdayPrice: 600,
    weekendsPrice: 600,
    weekPrice: 4000,
};

export const YELLOW_ROOM = {
    name: "yellow",
    price: 600,
    photos: [
        {
            src: roomYellow_1.src,
            alt: "yellow",
        },
        {
            src: roomYellow_2.src,
            alt: "yellow",
        },
        {
            src: roomYellow_3.src,
            alt: "yellow",
        },
        {
            src: roomYellow_4.src,
            alt: "yellow",
        },
    ],

    doublePhoto: [
        {
            bigImageSrc: roomYellow_1.src,
            bigImageAlt: "yellow",
            smallImageSrc: roomYellow_2.src,
            smallImageAlt: "yellow",
        },
        {
            bigImageSrc: roomYellow_3.src,
            bigImageAlt: "yellow",
            smallImageSrc: roomYellow.src,
            smallImageAlt: "yellow",
        },
    ],

    phonePhoto: {
        src: roomYellow_4.src,
        alt: "yellow",
    },

    description:
        "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

    weekdayPrice: 600,
    weekendsPrice: 600,
    weekPrice: 4000,
};

export const BLUE_ROOM = {
    name: "blue",
    price: 600,
    photos: [
        {
            src: roomBlue_1.src,
            alt: "blue",
        },
        {
            src: roomBlue_2.src,
            alt: "blue",
        },
        {
            src: roomBlue_3.src,
            alt: "blue",
        },
        {
            src: roomBlue_4.src,
            alt: "blue",
        },
    ],

    doublePhoto: [
        {
            bigImageSrc: roomBlue_1.src,
            bigImageAlt: "blue",
            smallImageSrc: roomBlue.src,
            smallImageAlt: "blue",
        },
        {
            bigImageSrc: roomBlue_2.src,
            bigImageAlt: "blue",
            smallImageSrc: roomBlue_3.src,
            smallImageAlt: "blue",
        },
    ],

    phonePhoto: {
        src: roomBlue_4.src,
        alt: "blue",
    },

    description:
        "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

    weekdayPrice: 600,
    weekendsPrice: 600,
    weekPrice: 4000,
};

export const GREEN_ROOM = {
    name: "green",
    price: 600,
    photos: [
        {
            src: roomGreen_6.src,
            alt: "green",
        },
        {
            src: roomGreen_5.src,
            alt: "green",
        },
        {
            src: roomGreen_4.src,
            alt: "green",
        },
        {
            src: roomGreen_2.src,
            alt: "green",
        },
    ],

    doublePhoto: [
        {
            bigImageSrc: roomGreen_6.src,
            bigImageAlt: "green",
            smallImageSrc: roomGreen_3.src,
            smallImageAlt: "green",
        },
        {
            bigImageSrc: roomGreen_5.src,
            bigImageAlt: "green",
            smallImageSrc: roomGreen_1.src,
            smallImageAlt: "green",
        },
        {
            bigImageSrc: roomGreen_2.src,
            bigImageAlt: "green",
            smallImageSrc: roomGreen.src,
            smallImageAlt: "green",
        },
    ],

    phonePhoto: {
        src: roomGreen_4.src,
        alt: "green",
    },

    description:
        "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

    weekdayPrice: 600,
    weekendsPrice: 600,
    weekPrice: 4000,
};

export const GREY_ROOM = {
    name: "grey",
    price: 600,
    photos: [
        {
            src: roomGrey_4.src,
            alt: "grey",
        },
        {
            src: roomGrey_2.src,
            alt: "grey",
        },
        {
            src: roomGrey_3.src,
            alt: "grey",
        },
        {
            src: roomGrey_1.src,
            alt: "grey",
        },
    ],

    doublePhoto: [
        {
            bigImageSrc: roomGrey_4.src,
            bigImageAlt: "yellow",
            smallImageSrc: roomGrey_5.src,
            smallImageAlt: "yellow",
        },
        {
            bigImageSrc: roomGrey_5.src,
            bigImageAlt: "yellow",
            smallImageSrc: roomGrey.src,
            smallImageAlt: "yellow",
        },
    ],

    phonePhoto: {
        src: roomGrey_2.src,
        alt: "yellow",
    },

    description:
        "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

    weekdayPrice: 600,
    weekendsPrice: 600,
    weekPrice: 4000,
};
