import React, { useState, useRef } from 'react';
import { RiMore2Fill, RiArrowDownSLine } from "react-icons/ri";
import useOnClickOutside from '../../hooks/useOnClickOutside';
import {checkPhotoPath} from "../../helpers/checkPhotoPath";

const ParticipantControl = (props) => {
  const {firstName, lastName, gender, image, height, isJoin, birthDate , weight, age, registrationDate} = props

  const [isApproved, setIsApproved] = useState(isJoin);
  const ref = useRef();
  const [showParams, setShowParams] = useState(false);
  const [showControl, setShowControl] = useState(false);
  function handleClick() {
    setShowControl(false);
    setShowParams(false);
  }
  useOnClickOutside(ref, () => handleClick());

  return (
    <div className={`participant-control ${isApproved?'approved':''}`} style={{backgroundColor:isApproved?'white':'#b5b5b5a7'}}>
      <div className='name'>
        <img src={checkPhotoPath(image, true)} />
        <div>
          <h6>{lastName + ' ' + firstName}</h6>
          <div>Дата регистрации: {registrationDate}</div>
        </div>
      </div>
      <button type='button' className='btn-none' onClick={() => setShowParams(!showParams)}><RiArrowDownSLine/></button>
      <button type='button' className='btn-none ms-3' onClick={() => setShowControl(!showControl)}><RiMore2Fill/></button>
      {
        (showControl) &&
        <ul className='params controls' ref={ref}>
          <li>
            <label>
              <input type="checkbox" value={isApproved} checked={isApproved} onChange={()=>setIsApproved(!isApproved)}/>
              <span>Одобрить</span>
            </label>
          </li>
        </ul>
      }
      {
        (showParams) &&
        <ul className='params' ref={ref}>
          <li>
            <strong>Дата рождения: </strong>
            <span>{birthDate}</span>
          </li>
          <li>
            <strong>Возраст: </strong>
            <span>{age}</span>
          </li>
          <li>
            <strong>Рост: </strong>
            <span>{height}</span>
          </li>
          <li>
            <strong>Вес: </strong>
            <span>{weight}</span>
          </li>
          <li>
            <strong>Пол: </strong>
            <span>{gender?'Мужской':'Женский'}</span>
          </li>
        </ul>
      }
      
    </div>
  );
};

export default ParticipantControl;