import React from 'react'
import Person from './Person'

const BracketItem = (props) => {
  return (
    <div className="item-1">
      <Person person={props.person1}/>
      <Person person={props.person2}/>
    </div>
  )
}

export default BracketItem