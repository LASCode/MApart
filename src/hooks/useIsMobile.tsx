import { getIsMobile } from "@/store/modules/windowSize";

import { useAppSelector } from "./hooks";

export const useIsMobile = () => useAppSelector(getIsMobile);
