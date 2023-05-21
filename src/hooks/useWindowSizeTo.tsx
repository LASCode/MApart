import {useAppSelector} from "@/hooks/hooks";

export const useWindowSizeTo = (width: number) => useAppSelector(state => state.windowSize.width <= width);