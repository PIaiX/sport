import React from 'react'

const EventCard = (props) => {
    return (
        <figure className='event'>
            <img src='imgs/img.webp' alt='Название мероприятия' />
            <figcaption>
                <h4>Название мероприятия</h4>
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