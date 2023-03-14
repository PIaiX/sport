import React, {useEffect, useReducer, useState} from 'react'

const DateBtn = ({day, weekDay, CalendarClick, month}) => {
    const [active, setActive] = useReducer(value=>!value, false)
    const [exist, setExist] = useReducer(()=>true)
    useEffect(()=>{
        exist && CalendarClick({month, weekDay, day})
        setExist()
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
        <button type='button' className={(active)?'active':''} onClick={() => setActive()}>
            <div>{day}</div>
            <div>{ weekDays.find(obj=> obj.id === weekDay).name }</div>
        </button>
    );
};

export default DateBtn