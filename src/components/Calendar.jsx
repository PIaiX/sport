import React, {useEffect, useReducer, useState} from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const Calendar = ({CalendarClick, calendarDays=[]}) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const footer =
        calendarDays && calendarDays.length > 0 ? (
        <p>Вы выбрали {calendarDays.length} {calendarDays.length===1?'день':'дней'}.</p>
        ) : (
        <p>Выберите один или несколько дней.</p>
        );
    return (
        <div className="calendar">
            <button type="button" className='btn-2' onClick={()=>setShowCalendar((showCalendar) ? false : true)}>
                Когда
            </button>
            <div className={(showCalendar) ? "calendar-box show" : "calendar-box"}>
                <DayPicker
                    mode="multiple"
                    min={0}
                    selected={calendarDays}
                    onSelect={CalendarClick}
                    footer={footer}
                />
            </div>
        </div>
    );
};
export default Calendar;
// export default Calendar;const Calendar = ({CalendarClick, calendarDays=[]}) => {
//     const [showCalendar, setShowCalendar] = useState(false)
//     const [days, setDays] = useState()
//     useEffect(()=>{
//         console.log(calendarDays)
//         JSON.stringify(calendarDays)!==JSON.stringify(days) && setDays(calendarDays)
//     }, [calendarDays])
//
//     useEffect(()=>{
//         JSON.stringify(calendarDays)!==JSON.stringify(days) && CalendarClick(days)
//     }, [days])
//
//     const footer =
//         days && days.length > 0 ? (
//         <p>Вы выбрали {days.length} {days.length===1?'день':'дней'}.</p>
//         ) : (
//         <p>Выберите один или несколько дней.</p>
//         );
//
//     return (
//         <div className="calendar">
//             <button type="button" className='btn-2' onClick={()=>setShowCalendar((showCalendar) ? false : true)}>
//                 Когда
//             </button>
//             <div className={(showCalendar) ? "calendar-box show" : "calendar-box"}>
//                 <DayPicker
//                     mode="multiple"
//                     min={0}
//                     selected={days}
//                     onSelect={setDays}
//                     // onSelect={CalendarClick}
//                     footer={footer}
//                 />
//             </div>
//         </div>
//     );
// };
//
// export default Calendar;