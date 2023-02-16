import React, { useState, useRef } from 'react';
import { RiMore2Fill, RiArrowDownSLine } from "react-icons/ri";
import useOnClickOutside from '../../hooks/useOnClickOutside';

const ParticipantControl = (props) => {
  const [isApproved, setIsApproved] = useState(false);
  const ref = useRef();
  const [showParams, setShowParams] = useState(false);
  const [showControl, setShowControl] = useState(false);
  function handleClick() {
    setShowControl(false);
    setShowParams(false);
  }
  useOnClickOutside(ref, () => handleClick());

  return (
    <div className={(isApproved)?'participant-control approved':'participant-control'}>
      <div className='name'>
        <img src="imgs/photo-replace.png" alt="replace" />
        <div>
          <h6>{props.surname + ' ' + props.name}</h6>
          <div>Дата регистрации: 14.02.2023</div>
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
          <li>
            <button type='button' className='btn-5'>Удалить</button>
          </li>
        </ul>
      }
      {
        (showParams) &&
        <ul className='params' ref={ref}>
          <li>
            <strong>Дата рождения: </strong>
            <span>{props.birth}</span>
          </li>
          <li>
            <strong>Название параметра: </strong>
            <span>Параметр</span>
          </li>
          <li>
            <strong>Название параметра: </strong>
            <span>Параметр</span>
          </li>
          <li>
            <strong>Название параметра: </strong>
            <span>Параметр</span>
          </li>
          <li>
            <strong>Название параметра: </strong>
            <span>Параметр</span>
          </li>
        </ul>
      }
      
    </div>
  );
};

export default ParticipantControl;