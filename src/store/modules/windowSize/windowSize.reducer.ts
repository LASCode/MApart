import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type WindowSizeState = {
  width: number;
  height: number;
};

const initialState: WindowSizeState = {
  width: 0,
  height: 0,
};

const windowSizeSlice = createSlice({
  name: "WINDOW_SIZE",
  initialState,
  reducers: {
    setWidth: (state, { payload }: PayloadAction<number>) => {
      console.log(1);
      state.width = payload;
    },
    setHeight: (state, { payload }: PayloadAction<number>) => {
      state.height = payload;
    },
  },
});

export const { setHeight, setWidth } = windowSizeSlice.actions;
export const windowSizeReducer = windowSizeSlice.reducer;
