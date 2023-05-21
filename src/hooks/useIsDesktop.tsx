import { getIsDesktop } from "@/store/modules/windowSize";

import { useAppSelector } from "./hooks";

export const useIsDesktop = () => useAppSelector(getIsDesktop);
