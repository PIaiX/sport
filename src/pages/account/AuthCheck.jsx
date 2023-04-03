import React, {useEffect} from 'react';
import {useAppSelector} from "../../store";
import {useLocation, useNavigate} from "react-router-dom";

const AuthCheck = ({children}) => {

    const auth = useAppSelector(state => state.user.auth)
    const checked = useAppSelector(state => state.user.checked)
    const {pathname} = useLocation()
    const  navigate = useNavigate()
    useEffect(()=>{
        if(pathname=='/login' && auth)
            navigate(`/account/profile`, {replace:true})
        else if(!auth)
            navigate(`/login`, {replace:true})
    },[auth, checked])
    if(checked)return (
        {...children}
    );
    else return (
        <main>
        </main>
    )
};

export default AuthCheck;