import { createSlice } from "@reduxjs/toolkit";
import { ActionCodeOperation } from "firebase/auth";

const userSlice = createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:(state,action) =>{
            return action.payload
        },
        removeUser:(state,action)=>{
            return null;
        }
    }
})
export  default userSlice.reducer;
export const {addUser,removeUser}= userSlice.actions