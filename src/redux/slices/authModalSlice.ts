import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthModalPropsType,AuthTab } from "@/types/type";

const initialState:AuthModalPropsType={
    isOpen:false,
    initialTab:"login",
}

export const HandleAuthModalSlice = createSlice({
    name:"modalOfAuth",
    initialState,
    reducers:{
        openAuthModal:(state,action:PayloadAction<AuthTab>)=>{
            state.isOpen=true;
            state.initialTab=action?.payload;
        },
        closeAuthModal:(state)=>{
            state.isOpen=false;
        },
    }
});

export const {openAuthModal,closeAuthModal} = HandleAuthModalSlice.actions;