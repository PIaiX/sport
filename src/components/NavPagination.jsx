import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

const NavPagination = () => {
  return (
    <nav className='pagination'>
      <ul>
          <li><button type='button'><RiArrowLeftSLine className='fs-15'/></button></li>
          <li><button type='button' className='active'>1</button></li>
          <li><button type='button'>2</button></li>
          <li><button type='button'>...</button></li>
          <li><button type='button'>10</button></li>
          <li><button type='button'><RiArrowRightSLine className='fs-15'/></button></li>
      </ul>
  </nav>
  )
}

export default NavPagination