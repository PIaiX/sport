import React from 'react'
import {Link} from 'react-router-dom'
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const Banner = ({image, description, srcLink}) => {
    return (
        <figure>
            <img src={checkPhotoPath(image)} alt={description} />
            <figcaption>
                <ul className='top'>
                </ul>
                <div>
                    <h2><Link to={`${srcLink}`}>{description}</Link></h2>
                </div>
            </figcaption>
        </figure>
    );
};

export default Banner