export enum RoomTypes {
    YELLOW = "yellow",
    GREEN = "green",
    BLUE = "blue",
    GREY = "grey",
    ROSE = "rose",
}

export interface RoomConfig {
    name: string;
    uid: string | undefined;
    description: string;
    photos: { src: string; alt: string }[];
    createOrderButtonImage: string;
    color: string;
    price: number;
    weekdayPrice: number;
    weekendsPrice: number;
    weekPrice: number;
}

export interface GlobalConfig {
    BNOVO_WIDGET_TOKEN: string;
    SOCIALS_WHATSUP: string | undefined;
    SOCIALS_TELEGRAM: string | undefined;
    SOCIALS_VKONTAKTE: string | undefined;
    TEL_NUMBER: string;
}