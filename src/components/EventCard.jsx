import React from 'react'
import {Link} from 'react-router-dom'
const EventCard = (state) => {
    const {id, imgUrl, name, venue, startsAt, days} = state
    return (
        <figure className='event'>
            <Link to={`/event/${id}`} state={state}><img src={imgUrl?imgUrl:'./imgs/userDontFind.jpg'} alt={name} /></Link>
            <figcaption>
                <h4><Link to={`/event/${id}`} state={state}>{name}</Link></h4>
                <address>{venue}</address>
                <div className="time">
                    <div>{startsAt?.replaceAll('-', '.').slice(0,10)}</div>
                    <div>{days}</div>
                </div>
            </figcaption>
        </figure>
    );
};

export default EventCard