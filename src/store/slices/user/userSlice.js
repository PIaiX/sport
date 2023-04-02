import {createSlice} from "@reduxjs/toolkit";
import {getMe, login, logout, refreshAuth, editMe, verification, registration, JoinEvent, myRequests, getMyEvents} from './actions'
const initialState={
    user:null,
    checked:false,
    auth:false,
    error:null
}

const userSlice= createSlice({
    name:'user',
    initialState,
    reducers:{
        setUser(state, action){
            state.user = action.payload.user
            state.user.auth=true
            state.checked = true
            localStorage.setItem('token', action.payload.accessToken)
        },
        CheckedBad(state){
            state.auth=false
            state.checked=true
        }
    },
    extraReducers:{
        [registration.fulfilled]:(state, action)=>{
            state.user=action.payload.user
            state.checked=true
            state.auth=true
            state.user.loginError = null
            localStorage.setItem('token', action?.payload?.accessToken)
        },
        [registration.rejected]:(state, action)=>{
            state.auth=false
            state.user=null;
            state.loginError = action.payload
        },
        [login.fulfilled]:(state, action)=>{
            state.user=action.payload.user
            state.checked=true
            state.auth=true
            state.user.loginError = null
            localStorage.setItem('token', action?.payload?.accessToken)
        },
        [login.rejected]:(state, action)=>{
            state.auth=false
            state.user=null;
            state.loginError = action.payload
        },
        [logout.fulfilled]:(state, action)=>{
            state.auth=false;
            state.user=null;
            localStorage.removeItem('token')
        },
        [logout.rejected]:(state, action)=>{
            state.auth=false;
            localStorage.removeItem('token')
            console.log(action)
        },
        [refreshAuth.fulfilled]: (state, action) => {
            localStorage.setItem('token', action?.payload?.accessToken)
            state.isLoadingRefresh = false
            state.auth = true
            state.checked=true
            state.user = action?.payload?.user
        },
        [refreshAuth.rejected]:(state)=>{
            localStorage.removeItem('token')
            state.auth = false
            state.checked=true
        },
        [getMe.fulfilled]:(state, action)=>{
            state.user=action.payload
        },
        [getMe.rejected]:(state, action)=>{
            localStorage.removeItem('token')
            state.auth = false
            state.checked=true
        },
        [editMe.fulfilled]:(state, action)=>{
            state.user=action.payload
        },
        [verification.fulfilled]:(state)=>{
            state.user.isVerified = true
        },
        [verification.rejected]:(state, action)=>{
            const message = action?.payload?.response?.data?.message?.indexOf('code')!==-1
            if (message) state.error = 'code'
        },
        [myRequests.fulfilled]:(state, action)=>{
            state.user.requests = action.payload
        },
        [getMyEvents.fulfilled]:(state, action)=>{
            state.user.myEvents = action.payload
        },
        [JoinEvent.fulfilled]:(state, action)=>{
            state.user.requests = [...state.user.requests, {event:{...action.payload, id:action.payload.eventId}}]
        }
    }
})

export const RegUserActions= userSlice.actions;
export const RegReducers= userSlice.reducer;