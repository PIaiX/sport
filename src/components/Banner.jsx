import React from 'react'
import {Link} from 'react-router-dom'

const Banner = ({imgUrl, title, categoryAge, actions, srcLink}) => {
    return (
        <figure>
            <img src={imgUrl} alt={title} />
            <figcaption>
                <ul className='top'>
                </ul>
                <div>
                    <h2><Link to={`${srcLink}`}>{title}</Link></h2>
                </div>
            </figcaption>
        </figure>
    );
};

export default Banner