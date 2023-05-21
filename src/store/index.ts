import type { Action, ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import { windowSizeReducer } from "@/store/modules/windowSize";

export const makeStore = () =>
  configureStore({
    reducer: {
      windowSize: windowSizeReducer,
    },
    devTools: true,
  });

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export type AsyncThunkConfig = { state: AppState; dispatch: AppDispatch };

export const wrapper = createWrapper(makeStore);
