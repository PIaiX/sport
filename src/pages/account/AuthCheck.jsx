import React, {useEffect} from 'react';
import {useAppSelector} from "../../store";
import {useNavigate} from "react-router-dom";
const AuthCheck = ({children}) => {
    const {auth} = useAppSelector(state => state.user)
    const  navigate = useNavigate()
    useEffect(()=>{
        navigate(`${auth?'/account/profile':'/login'}`)
    },[auth])
    return (
        {...children}
    );
};

export default AuthCheck;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJhZG1pbkBtYWlsLnJ1IiwiZmlyc3ROYW1lIjoiaWhzYW4iLCJsYXN0TmFtZSI6Iml6bWFpbG92IiwicGhvbmUiOiIrNzk5OTk5OTkzMzMiLCJ0eXBlIjoiYWNjZXNzX3Rva2VuIiwiaWF0IjoxNjc5MzI2NTYzLCJleHAiOjE2ODE5MTg1NjN9.Mh3fScX64ItNRqJYoFikdUdpi3JY0FlDoCKi39rWFH0