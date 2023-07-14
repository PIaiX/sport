import {createSlice} from "@reduxjs/toolkit";
import {getMe, login, logout} from "../user/actions";
import axios from '../../../config/api'
import {getCountOfUsers} from "./Action";
const initialState={
    notFound:false,
    isAdmin:false,
    fingerprint:null,
    alertSlice:null,
}
const AppSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setNotFound(state, action){
            state.notFound=action.payload
        },
        setFingerprint: (state, action) => {
            state.fingerprint = {...action?.payload, isShow: true}
            axios.defaults.headers.common.fingerprint=action?.payload
        },
        setAlert:(state, action)=>{
            state.alertSlice = {...action.payload, isShow: true}
        }
    },
    extraReducers:{
        [login.fulfilled]:(state, action)=>{
            if(action?.payload?.user?.role=='ADMIN')
                state.isAdmin=true
            else
                state.isAdmin=false
        },
        [logout.fulfilled]:(state, action)=>{
            state.isAdmin=false;
        },
        [getMe.fulfilled]:(state, action)=>{
            if(action.payload?.role=='ADMIN')
                state.isAdmin=true
        },
        [getCountOfUsers.fulfilled]:(state, action)=>{
            state.countOfUsers = action.payload?._all
        }
    }
})
export const AppActions= AppSlice.actions;
export const AppReducers= AppSlice.reducer;
export const {setFingerprint} = AppSlice.actions;