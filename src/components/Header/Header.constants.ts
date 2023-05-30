import type { HeaderNavigationItem } from "@/components/Header/Header.types";
import type { SocialItem } from "@/components/Socials";
import { appRoute, MainAnchorType } from "@/routes";

export const HEADER_NAVIGATION_ITEMS: HeaderNavigationItem[] = [
    { title: "О нас", href: appRoute.mainAnchor(MainAnchorType.ABOUT_US) },
    { title: "Номера", href: appRoute.mainAnchor(MainAnchorType.ROOMS) },
    {
        title: "Преимущества",
        href: appRoute.mainAnchor(MainAnchorType.ADVANTAGES),
    },
    { title: "Расположение", href: appRoute.mainAnchor(MainAnchorType.LOCATION) },
    { title: "Галерея", href: appRoute.mainAnchor(MainAnchorType.GALLERY) },
];

export const HEADER_SOCIAL_ITEMS: SocialItem[] = [];

export const HEADER_TEL_NUMBER = "+7 911 769 5712";
