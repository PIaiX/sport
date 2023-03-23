import React, {useEffect} from 'react';
import {useAppSelector} from "../../store";
import {useNavigate} from "react-router-dom";
const AuthCheck = ({children}) => {
    const {auth, checked} = useAppSelector(state => state.user)
    const  navigate = useNavigate()
    useEffect(()=>{
        navigate(`${auth?'/account/profile':'/login'}`)
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