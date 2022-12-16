import React, {useState} from 'react'

const DateBtn = (props) => {
    const [active, setActive] = useState(false)
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
        <button type='button' className={(active)?'active':''} onClick={() => setActive((active)?false:true)}>
            <div>{props.day}</div>
            <div>{ weekDays.find(obj=> obj.id === props.weekDay).name }</div>
        </button>
    );
};

export default DateBtn