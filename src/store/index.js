import {bindActionCreators, configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {RegUserActions,RegReducers} from './slices/user/userSlice'
import {AppReducers,AppActions} from './slices/app/AppSlice'
export const store=configureStore({
    reducer:{
        user:RegReducers,
        app:AppReducers
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware()
            .prepend()
});
const actions={
    ...RegUserActions,
    ...AppActions
}
export const useAppSelector = useSelector
export const useAppAction=()=>{
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch)
}