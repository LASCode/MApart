export interface SocialsProps {
    items?: SocialItem[],
    className?: string;
}

export interface SocialItem {
    icon: string;
    href: string;
}