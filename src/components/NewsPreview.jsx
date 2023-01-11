import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri"

const NewsPreview = () => {
    return (
        <article className='preview'>
            <img src="imgs/image.png" alt="Название новости" />
            <h4>Название новости</h4>
            <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <Link to="/news" className='more'>Читать далее <RiArrowRightSLine/></Link>
        </article>
    );
};

export default NewsPreview