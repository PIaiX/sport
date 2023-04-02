import React, {useEffect} from 'react';
import {useAppSelector} from "../../store";
import VerifyFrom from "./VerifyFrom";
import {getMe, useUserAction} from "../../store/slices/user/actions";
import {useDispatch} from "react-redux";

const VerifyCheck = ({children}) => {

    const user = useAppSelector(state => state?.user?.user)
    const {myRequests, getMyEvents}  =useUserAction()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMe()).then(res=>{
            if(res){
                myRequests()
                getMyEvents()
            }
        })    },[])

    if(user?.isVerified)
        return ({...children});
    else if(user)
        return <VerifyFrom />
    else
        return <main></main>
};

export default VerifyCheck;