export interface HeaderNavItem {
    title: string;
    href: string;
}

export interface HeaderNavigationItem {
    title: string;
    href: string;
}
export interface HeaderSocialItem {
    icon: string;
    href: string;
}

export interface HeaderProps {
    onlyModal?: boolean;
    needScroll?: boolean;
    className?: string;
}
