import React from 'react';
import {Link} from 'react-router-dom';
import { RiSearchEyeLine, RiEdit2Line, RiImageLine } from "react-icons/ri";

const AccEventPreview = (props) => {
  return (
    <div className='event-preview'>
      <div className='date'><span className='d-xl-none'>Дата: </span>{props.date}</div>
      <div className='img'>
        {
          (props.img)
          ? <img src={props.img} alt={props.title} />
          : <RiImageLine className='fs-20 achromat-4'/>
        }
      </div>
      <div className='title'>{props.title}</div>
      <div className='role'>
        <span className='d-xl-none'>Роль: </span>
        {
          (props.role===2)
          ? 'Организатор'
          : 'Участник'
        }
      </div>
      <div className='count'><span className='d-xl-none'>Количество участников: </span>{props.count}</div>
      <div className="btns">
        <Link to='edit' className={(props.role!==2) ? 'dis' : ''}><RiEdit2Line/></Link>
        <Link to='/event'><RiSearchEyeLine/></Link>
      </div>
    </div>
  );
};

export default AccEventPreview;