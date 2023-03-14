import React from 'react'
import {Link} from 'react-router-dom'

const Banner = ({imgUrl, title, categoryAge, actions, srcLink}) => {
    return (
        <figure>
            <img src={imgUrl} alt={title} />
            <figcaption>
                <ul className='top'>
                    <li>Подборка</li>
                    <li>{categoryAge}</li>
                </ul>
                <div>
                    <h2><Link to={`${srcLink}`}>{title}</Link></h2>
                    <ul className='info'>
                        {actions?.map((element, index)=>
                            <li key={index}>{element}</li>
                        )}
                    </ul>
                </div>
            </figcaption>
        </figure>
    );
};

export default Banner