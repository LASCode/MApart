import { getIsTablet } from "@/store/modules/windowSize";

import { useAppSelector } from "./hooks";

export const useIsTablet = () => useAppSelector(getIsTablet);
