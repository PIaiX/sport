import React from 'react'
import {Link} from 'react-router-dom'

const EventCard = (props) => {
    return (
        <figure className='event'>
            <Link to="/event"><img src={props.imgUrl} alt='Название мероприятия' /></Link>
            <figcaption>
                <h4><Link to="/event">Название мероприятия</Link></h4>
                <address>Место проведения</address>
                <div className="time">
                    <div>31.12.2022</div>
                    <div>15 дней</div>
                </div>
            </figcaption>
        </figure>
    );
};

export default EventCard