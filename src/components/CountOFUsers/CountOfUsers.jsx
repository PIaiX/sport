import React, {useEffect} from 'react';
import {getCountOfUsers, useAppAction} from "../../store/slices/app/Action";
import {useAppSelector} from "../../store";

const CountOfUsers = () => {

    const {getCountOfUsers} =useAppAction()
    const countOfUsers = useAppSelector(state => state?.app?.countOfUsers)

    useEffect(()=>{
        getCountOfUsers()
    }, [])
    return (
        <div>
            <h4>Колличество зарегестрированных пользователей: {countOfUsers}</h4>
        </div>
    );
};

export default CountOfUsers;