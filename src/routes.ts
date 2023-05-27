export enum MainAnchorType {
    ABOUT_US = "aboutus",
    ROOMS = "rooms",
    ORDER = "order",
    ADVANTAGES = "advantages",
    LOCATION = "location",
    GALLERY = "gallery",
}

export const appRoute = {
    mainAnchor: (type: MainAnchorType) => `#${type}`,
};
