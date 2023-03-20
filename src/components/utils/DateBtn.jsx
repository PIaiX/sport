import React, {useEffect, useReducer, useState} from 'react'

const DateBtn = ({day, weekDay, CalendarClick, month, calendarDays}) => {
    const [active, setActive] = useState(calendarDays)
    const [exist, setExist] = useState(false)
    useEffect(()=>{
        exist && CalendarClick(new Date(new Date().getFullYear(), month, day, 0, 0, 0, 0))
        setExist(true)
    },[active])
    const weekDays = [
        {
            id: 1,
            name: 'пн'
        },
        {
            id: 2,
            name: 'вт'
        },
        {
            id: 3,
            name: 'ср'
        },
        {
            id: 4,
            name: 'чт'
        },
        {
            id: 5,
            name: 'пт'
        },
        {
            id: 6,
            name: 'сб'
        },
        {
            id: 7,
            name: 'вс'
        },
    ]
    return (
        <button type='button' className={(calendarDays)?'active':''} onClick={() => setActive(!active)}>
            <div>{day}</div>
            <div>{ weekDays.find(obj=> obj.id === weekDay).name }</div>
        </button>
    );
};

export default React.memo(DateBtn)