import {createSlice} from "@reduxjs/toolkit";

const initialState={
    notFound:false,
    isAdmin:true,
    fingerprint:null
}
const AppSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setNotFound(state, action){
            state.notFound=action.payload
        },
        setFingerprint: (state, action) => {
            state.fingerprint = action?.payload
        },
    },
})
export const AppActions= AppSlice.actions;
export const AppReducers= AppSlice.reducer;
export const {setFingerprint} = AppSlice.actions;