import React from 'react'
import {Link} from 'react-router-dom'

const EventCard = (state) => {
    const {id, imgUrl, title, location, data, days} = state
    return (
        <figure className='event'>
            <Link to={`/event/${id}`} state={state}><img src={imgUrl} alt={title} /></Link>
            <figcaption>
                <h4><Link to={`/event/${id}`} state={state}>{title}</Link></h4>
                <address>{location}</address>
                <div className="time">
                    <div>{data}</div>
                    <div>{days}</div>
                </div>
            </figcaption>
        </figure>
    );
};

export default EventCard