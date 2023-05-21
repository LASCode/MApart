import {useAppSelector} from "@/hooks/hooks";

export const useWindowSizeFrom = (width: number) => useAppSelector(state => state.windowSize.width >= width);