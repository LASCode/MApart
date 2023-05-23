import { useEffect } from "react";

import { setHeight, setWidth } from "@/store/modules/windowSize";

import { useAppDispatch } from "./hooks";
import { useWindowSize } from "./useWindowSize";

export const useAppWindowSize = () => {
    const dispatch = useAppDispatch();

    const size = useWindowSize();

    useEffect(() => {
        dispatch(setWidth(size.width));
    }, [dispatch, size.width]);

    useEffect(() => {
        dispatch(setHeight(size.height));
    }, [dispatch, size.height]);
};
