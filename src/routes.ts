export enum MainAnchorType {
    ABOUT_US = '#aboutus',
    ROOMS = '#rooms',
    ADVANTAGES = '#advantages',
    LOCATION = '#location',
    GALLERY = '#gallery',
}

export const appRoute = {
    mainAnchor: (type: MainAnchorType) => `${type}`,
};