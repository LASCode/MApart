/* eslint-disable import/order */
/* eslint-disable max-len */
import roomBlue from "@/assets/rooms/room-blue.webp";
import roomBlue_1 from "@/assets/rooms/room-blue-1.webp";
import roomBlue_2 from "@/assets/rooms/room-blue-2.webp";
import roomBlue_3 from "@/assets/rooms/room-blue-3.webp";
import roomBlue_4 from "@/assets/rooms/room-blue-4.webp";
import roomGreen from "@/assets/rooms/room-green.webp";
import roomGreen_1 from "@/assets/rooms/room-green-1.webp";
import roomGreen_2 from "@/assets/rooms/room-green-2.webp";
import roomGreen_4 from "@/assets/rooms/room-green-4.webp";
import roomGreen_5 from "@/assets/rooms/room-green-5.webp";
import roomGreen_6 from "@/assets/rooms/room-green-6.webp";
import roomGrey from "@/assets/rooms/room-grey.webp";
import roomGrey_1 from "@/assets/rooms/room-grey-1.webp";
import roomGrey_2 from "@/assets/rooms/room-grey-2.webp";
import roomGrey_3 from "@/assets/rooms/room-grey-3.webp";
import roomGrey_4 from "@/assets/rooms/room-grey-4.webp";
import roomGrey_5 from "@/assets/rooms/room-grey-5.webp";
import roomRose_1 from "@/assets/rooms/room-rose-1.webp";
import roomRose_2 from "@/assets/rooms/room-rose-2.webp";
import roomRose_3 from "@/assets/rooms/room-rose-3.webp";
import roomRose_4 from "@/assets/rooms/room-rose-4.webp";
import roomRose_5 from "@/assets/rooms/room-rose-5.webp";
import roomYellow from "@/assets/rooms/room-yellow.webp";
import roomYellow_1 from "@/assets/rooms/room-yellow-1.webp";
import roomYellow_2 from "@/assets/rooms/room-yellow-2.webp";
import roomYellow_3 from "@/assets/rooms/room-yellow-3.webp";
import roomYellow_4 from "@/assets/rooms/room-yellow-4.webp";

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
    price: 600,
    name: 'yellow',
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
    price: 600,
    name: 'blue',
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
    price: 600,
    name: 'green',
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
            smallImageSrc:
                "https://downloader.disk.yandex.ru/preview/2f0a07b7f149d7e4912cb4f5ba34eb6d5f8457bb1f09ba6ea20ae25f7e390105/647809fd/LUW0vus6fMpQvOfEulywM72c7BcAJnsTjtv8Zbs48CqKi3osu_9aKB7oDApdBfgWJMtmR5zekO0rK4A2nZ5LIQ%3D%3D?uid=0&filename=room-green-3.webp&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048",
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
    price: 600,
    name: 'grey',
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

// export const ROSE_ROOM = {
//     name: "rose",
//     price: 600,
//     photos: [
//         {
//             src: "https://images2.imgbox.com/99/49/r6HCcoLa_o.webp",
//             alt: "rose",
//         },
//         {
//             src: "https://images2.imgbox.com/a8/8b/lyshS1vs_o.webp",
//             alt: "rose",
//         },
//     ],

//     doublePhoto: [
//         {
//             bigImageSrc: "https://images2.imgbox.com/99/49/r6HCcoLa_o.webp",
//             bigImageAlt: "rose",
//             smallImageSrc: "https://images2.imgbox.com/7e/90/skBWZpWq_o.webp",
//             smallImageAlt: "rose",
//         },
//         {
//             bigImageSrc: "https://images2.imgbox.com/a8/8b/lyshS1vs_o.webp",
//             bigImageAlt: "rose",
//             smallImageSrc: "https://images2.imgbox.com/50/12/ovgw7FQZ_o.webp",
//             smallImageAlt: "rose",
//         },
//     ],

//     phonePhoto: {
//         src: "https://images2.imgbox.com/99/49/r6HCcoLa_o.webp",
//         alt: "rose",
//     },

//     description:
//         "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

//     weekdayPrice: 600,
//     weekendsPrice: 600,
//     weekPrice: 4000,
// };

// export const YELLOW_ROOM = {
//     name: "yellow",
//     price: 600,
//     photos: [
//         {
//             src: "https://images2.imgbox.com/a6/90/5OgjRqLk_o.webp",
//             alt: "yellow",
//         },
//         {
//             src: "https://images2.imgbox.com/ed/74/Aee9ymNk_o.webp",
//             alt: "yellow",
//         },
//         {
//             src: "https://images2.imgbox.com/0a/52/HzNQy28i_o.webp",
//             alt: "yellow",
//         },
//         {
//             src: "https://images2.imgbox.com/8c/69/1uPNnic9_o.webp",
//             alt: "yellow",
//         },
//     ],

//     doublePhoto: [
//         {
//             bigImageSrc: "https://images2.imgbox.com/a6/90/5OgjRqLk_o.webp",
//             bigImageAlt: "yellow",
//             smallImageSrc: "https://images2.imgbox.com/ed/74/Aee9ymNk_o.webp",
//             smallImageAlt: "yellow",
//         },
//         {
//             bigImageSrc: "https://images2.imgbox.com/0a/52/HzNQy28i_o.webp",
//             bigImageAlt: "yellow",
//             smallImageSrc: "https://images2.imgbox.com/0a/cd/5S5ZgCGz_o.webp",
//             smallImageAlt: "yellow",
//         },
//     ],

//     phonePhoto: {
//         src: "https://images2.imgbox.com/8c/69/1uPNnic9_o.webp",
//         alt: "yellow",
//     },

//     description:
//         "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

//     weekdayPrice: 600,
//     weekendsPrice: 600,
//     weekPrice: 4000,
// };

// export const BLUE_ROOM = {
//     name: "blue",
//     price: 600,
//     photos: [
//         {
//             src: "https://images2.imgbox.com/8d/35/zsgy6h6f_o.webp",
//             alt: "blue",
//         },
//         {
//             src: "https://images2.imgbox.com/8b/ed/egNo5NxC_o.webp",
//             alt: "blue",
//         },
//         {
//             src: "https://images2.imgbox.com/db/40/wn6CaYE9_o.webp",
//             alt: "blue",
//         },
//         {
//             src: "https://images2.imgbox.com/58/2b/eWYp9URY_o.webp",
//             alt: "blue",
//         },
//     ],

//     doublePhoto: [
//         {
//             bigImageSrc: "https://images2.imgbox.com/8d/35/zsgy6h6f_o.webp",
//             bigImageAlt: "blue",
//             smallImageSrc: "https://images2.imgbox.com/58/2b/eWYp9URY_o.webp",
//             smallImageAlt: "blue",
//         },
//         {
//             bigImageSrc: "https://images2.imgbox.com/8b/ed/egNo5NxC_o.webp",
//             bigImageAlt: "blue",
//             smallImageSrc: "https://images2.imgbox.com/db/40/wn6CaYE9_o.webp",
//             smallImageAlt: "blue",
//         },
//     ],

//     phonePhoto: {
//         src: "https://images2.imgbox.com/58/2b/eWYp9URY_o.webp",
//         alt: "blue",
//     },

//     description:
//         "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

//     weekdayPrice: 600,
//     weekendsPrice: 600,
//     weekPrice: 4000,
// };

// export const GREEN_ROOM = {
//     name: "green",
//     price: 600,
//     photos: [
//         {
//             src: "https://images2.imgbox.com/e0/af/mqvlYpdQ_o.webp",
//             alt: "green",
//         },
//         {
//             src: "https://images2.imgbox.com/de/f4/0hI94O6W_o.webp",
//             alt: "green",
//         },
//         {
//             src: "https://images2.imgbox.com/18/c9/86p0VLow_o.webp",
//             alt: "green",
//         },
//         {
//             src: "https://images2.imgbox.com/55/34/ZzirUZ1H_o.webp",
//             alt: "green",
//         },
//     ],

//     doublePhoto: [
//         {
//             bigImageSrc: "https://images2.imgbox.com/e0/af/mqvlYpdQ_o.webp",
//             bigImageAlt: "green",
//             smallImageSrc: "https://images2.imgbox.com/cf/0b/LIJ5IT9d_o.webp",
//             smallImageAlt: "green",
//         },
//         {
//             bigImageSrc: "https://images2.imgbox.com/de/f4/0hI94O6W_o.webp",
//             bigImageAlt: "green",
//             smallImageSrc: "https://images2.imgbox.com/b0/3d/NiN7QpCr_o.webp",
//             smallImageAlt: "green",
//         },
//         {
//             bigImageSrc: "https://images2.imgbox.com/55/34/ZzirUZ1H_o.webp",
//             bigImageAlt: "green",
//             smallImageSrc: "https://images2.imgbox.com/eb/f9/76CMhaCu_o.webp",
//             smallImageAlt: "green",
//         },
//     ],

//     phonePhoto: {
//         src: "https://images2.imgbox.com/18/c9/86p0VLow_o.webp",
//         alt: "green",
//     },

//     description:
//         "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

//     weekdayPrice: 600,
//     weekendsPrice: 600,
//     weekPrice: 4000,
// };

// export const GREY_ROOM = {
//     name: "grey",
//     price: 600,
//     photos: [
//         {
//             src: "https://images2.imgbox.com/5e/b8/iMrtYHPq_o.webp",
//             alt: "grey",
//         },
//         {
//             src: "https://images2.imgbox.com/41/35/yzaNbSWK_o.webp",
//             alt: "grey",
//         },
//         {
//             src: "https://images2.imgbox.com/8a/1a/M7u0Rwbr_o.webp",
//             alt: "grey",
//         },
//         {
//             src: "https://images2.imgbox.com/79/8b/VrhpqTE8_o.webp",
//             alt: "grey",
//         },
//     ],

//     doublePhoto: [
//         {
//             bigImageSrc: "https://images2.imgbox.com/5e/b8/iMrtYHPq_o.webp",
//             bigImageAlt: "yellow",
//             smallImageSrc: "https://images2.imgbox.com/09/4e/JDjTDuU5_o.webp",
//             smallImageAlt: "yellow",
//         },
//         {
//             bigImageSrc: "https://images2.imgbox.com/09/4e/JDjTDuU5_o.webp",
//             bigImageAlt: "yellow",
//             smallImageSrc: "https://images2.imgbox.com/53/6a/8xOedWJv_o.webp",
//             smallImageAlt: "yellow",
//         },
//     ],

//     phonePhoto: {
//         src: "https://images2.imgbox.com/41/35/yzaNbSWK_o.webp",
//         alt: "yellow",
//     },

//     description:
//         "mApart - компактные студии в центре Петербурга по привлекательной цене. В небольшом пространстве располагается всё необходимое для комфортного проживания: мини кухня, удобная двуспальная кровать, личный санузел и ТВ.",

//     weekdayPrice: 600,
//     weekendsPrice: 600,
//     weekPrice: 4000,
// };
