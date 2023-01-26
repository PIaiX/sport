import React, { useState } from 'react'
import useIsMobile from '../../hooks/isMobile'
import { FiChevronsDown } from "react-icons/fi"

const Participant = (props) => {
  const {isMobile} = useIsMobile('991px')
  const [showParams, setShowParams] = useState(!isMobile)

  return (
    <div className={(props.approved)?'participant':'participant unapproved'}>
      <div className='name'>
        <img src="imgs/photo-replace.png" alt="replace" />
        <div>
          <h6>{props.surname + ' ' + props.name}</h6>
          <div>{props.town}</div>
        </div>
      </div>
      <div className="birth">
        <span>{props.birth}</span>
        {
          (isMobile) &&
          <button type='button' className='d-flex fs-15 color-main' onClick={() => setShowParams((showParams)?false:true)}>
            <FiChevronsDown/>
          </button>
        }
      </div>
      <ul className={(showParams || !isMobile)?'params':'params closed'}>
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
    </div>
  )
}

export default Participant