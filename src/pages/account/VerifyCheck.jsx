import React, {useEffect} from 'react';
import {useAppSelector} from "../../store";
import VerifyFrom from "./VerifyFrom";
import {getMe} from "../../store/slices/user/actions";
import {useDispatch} from "react-redux";

const VerifyCheck = ({children}) => {

    const user = useAppSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMe())
    },[])

    if(user?.isVerified)
        return ({...children});
    else if(user)
        return <VerifyFrom />
    else
        return <main></main>
};

export default VerifyCheck;