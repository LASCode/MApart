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
    BNOVO_WIDGET_DEFAULT_GUESTS: number;
    BNOVO_WIDGET_DEFAULT_ARRIVAL_DATE: number;
    BNOVO_WIDGET_DEFAULT_DEPARTURE_DATE: number;

    SOCIALS_WHATSUP: string | undefined;
    SOCIALS_TELEGRAM: string | undefined;
    SOCIALS_VKONTAKTE: string | undefined;
    TEL_NUMBER: string;

    YANDEX_RATING_IFRAME_HREF: string;
    MAP_IFRAME_HREF: string;
    BLOCK_INFO_CONTENT: string | undefined;
}

export interface TermsOfUseConfig {
    blockName?: string;
    content: { title?: string; items: string[] }[] | string;
}
