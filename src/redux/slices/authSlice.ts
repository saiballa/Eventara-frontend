import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type{ AuthState,UserRole } from "@/types/type";

const initialState: AuthState = {
  isAuthenticated: false,
  email: null,
  role: null,
};

export const authSlice = createSlice({
  name: "authentication",

  initialState,

  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        role: UserRole;
      }>
    ) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.email = null;
      state.role = null;
    },

    restoreAuth: (
      state,
      action: PayloadAction<{
        email: string;
        role: UserRole;
      }>
    ) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.role = action.payload.role;
    },
  },
});

export const { login, logout, restoreAuth } = authSlice.actions;

export default authSlice.reducer;