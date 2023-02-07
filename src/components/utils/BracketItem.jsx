import React from 'react'
import Person from './Person'

const BracketItem = (props) => {
  return (
    <div className={'item-'+props.tour+' index-'+props.order}>
      <Person person={props.person1}/>
      <Person person={props.person2}/>
    </div>
  )
}

export default BracketItem