import React from 'react'

const DateBtn = ({day, weekDay, CalendarClick, calendarDays, currentValue}) => {
    const active = calendarDays?.filter(i=>JSON.stringify(currentValue)==JSON.stringify(i)).length>0
    const ButtonClick=()=>{
        if(!calendarDays)return([currentValue])
        else{
            const result=calendarDays.filter(value=>JSON.stringify(currentValue)!=JSON.stringify(value))
            if(active)
                return(result)
            else
                return([...result,currentValue])
        }
    }

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
        <button type='button' className={(active)?'active':''} onClick={()=>{CalendarClick(ButtonClick())}}>
            <div>{day}</div>
            <div>{ weekDays.find(obj=> obj.id == weekDay).name }</div>
        </button>
    );
};

export default React.memo(DateBtn)