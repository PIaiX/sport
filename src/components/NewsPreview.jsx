import React from 'react'
import {Link} from 'react-router-dom'
import { RiArrowRightSLine } from "react-icons/ri"
import {checkPhotoPath} from "../helpers/checkPhotoPath";

const NewsPreview = (props) => {
    const {id, image, title, description} = props
    return (
        <article className='preview'>
            <img src={checkPhotoPath(image)} alt={title} />
            <h4><div className={'news-title'}></div></h4>
            <div className="text">
                <p>{title}</p>
            </div>
            <Link to={`/news/${id}`} className='more' state={props}>Читать далее <RiArrowRightSLine/></Link>
        </article>
    );
};

export default NewsPreview









// const NewsPreview = (props) => {
//     const {id, image, title, description} = props
//     console.log(title)
//     console.log(props)
//     return (
//         <article className='preview'>
//             <img src={checkPhotoPath(image)} alt={title} />
//             <div className="text"><p>
//                 {title}
//             </p></div>
//             <Link to={`news/${id}`} className='more' state={props}>Читать далее <RiArrowRightSLine/></Link>
//         </article>
//     );
// };
//
// export default NewsPreview