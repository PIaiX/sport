import React, {useState} from 'react'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

const Calendar = () => {
    const [showCalendar, setShowCalendar] = useState(false)
    const initialDays = [];
    const [days, setDays] = React.useState(initialDays);

    const footer =
        days && days.length > 0 ? (
        <p>You selected {days.length} day(s).</p>
        ) : (
        <p>Please pick one or more days.</p>
        );
        
    return (
        <div className="calendar">
            <button type="button" className='btn-2' onClick={()=>setShowCalendar((showCalendar) ? false : true)}>
                Когда
            </button>
            <div className={(showCalendar) ? "calendar-box show" : "calendar-box"}>
                <DayPicker
                    mode="multiple"
                    min={1}
                    selected={days}
                    onSelect={setDays}
                    footer={footer}
                />
            </div>
        </div>
    );
};

export default Calendar;