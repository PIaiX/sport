import React from 'react'

const Person = (props) => {
  return (
    <div className='person'>
      <img src="imgs/photo-replace.png" alt="replace" />
      <div>
        <div className='name'>{props.person.name}</div>
        <div className='text'>{props.person.birth}</div>
      </div>
      {
        (props.person.winner) &&
        <div className='winner'></div>
      }
      {
        (props.person.place !== 0) &&
        <div className='place'>{props.person.place}</div>
      }
    </div>
  )
}

export default Person