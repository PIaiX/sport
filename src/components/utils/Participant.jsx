import React from 'react'

const Participant = (props) => {
  return (
    <div className='participant'>
      <div className='name'>
        <img src="imgs/photo-replace.png" alt="replace" />
        <div>
          <h6>{props.surname + ' ' + props.name}</h6>
          <div>{props.town}</div>
        </div>
      </div>
      <div className="birth">
        {props.birth}
      </div>
      <div className="params">
        <div>
          <strong>Название параметра: </strong>
          <span>Параметр</span>
        </div>
        <div>
          <strong>Название параметра: </strong>
          <span>Параметр</span>
        </div>
        <div>
          <strong>Название параметра: </strong>
          <span>Параметр</span>
        </div>
        <div>
          <strong>Название параметра: </strong>
          <span>Параметр</span>
        </div>
      </div>
    </div>
  )
}

export default Participant