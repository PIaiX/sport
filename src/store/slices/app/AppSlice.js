import {createSlice} from "@reduxjs/toolkit";
import {login} from "../user/actions";

const initialState={
    notFound:false
}
const AppSlice = createSlice({
    name:'app',
    initialState,
    reducers:{
        setNotFound(state, action){
            state.notFound=action.payload
        }
    },
})
export const AppActions= AppSlice.actions;
export const AppReducers= AppSlice.reducer;