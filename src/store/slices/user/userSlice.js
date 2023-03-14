import {createSlice} from "@reduxjs/toolkit";
import {login} from './actions'
const initialState={
    user:null,
    checked:false,
    auth:false
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{},
    extraReducers:{
        [login.fulfilled]:(state, action)=>{
            state.user=action.payload.user
            state.checked=true
            state.auth=true
            localStorage.setItem('token', action?.payload?.token)
        },
        [login.rejected]:(state, action)=>{
            state.checked=true
            state.auth=false
            console.log(action.payload)
        }
    }
})

export const RegUserActions= userSlice.actions;
export const RegReducers= userSlice.reducer;