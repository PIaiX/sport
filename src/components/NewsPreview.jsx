import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri"

const NewsPreview = ({id, img, title, mainInf}) => {
    return (
        <article className='preview'>
            <img src={img} alt={title} />
            <h4>{title}</h4>
            <div className="text">
                <p>{mainInf}</p>
            </div>
            <Link to={`news/${id}`} className='more' state={{id, img, title, mainInf}}>Читать далее <RiArrowRightSLine/></Link>
        </article>
    );
};

export default NewsPreview