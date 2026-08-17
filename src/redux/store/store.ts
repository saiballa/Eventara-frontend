import { configureStore } from "@reduxjs/toolkit";
import { HandleAuthModalSlice } from "../slices/authModalSlice";
import { authSlice } from "../slices/authSlice";

export const Store = configureStore({
    reducer:{
        authenticationModal:HandleAuthModalSlice.reducer,
        authentication:authSlice.reducer,
    }
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;