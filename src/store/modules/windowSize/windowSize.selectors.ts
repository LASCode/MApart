import type { AppState } from "@/store";
import { WindowSizeType } from "@/types/windowSize.types";

export const getIsMobile = (state: AppState) => state.windowSize.width <= WindowSizeType.MOBILE;
export const getIsTablet = (state: AppState) =>
    state.windowSize.width < WindowSizeType.TABLET && state.windowSize.width > WindowSizeType.MOBILE;
export const getIsDesktop = (state: AppState) => state.windowSize.width >= WindowSizeType.TABLET;
