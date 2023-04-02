import React, {useState} from 'react'
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"
import {forEach} from "react-bootstrap/ElementChildren";

const NavPagination = ({maxValue, onChange, skip, take}) => {
    return (
        <nav className='pagination'>
            <ul>
                <li>
                    {
                        skip!==0 &&
                        <button onClick={()=>onChange({skip:skip-take})} type='button'><RiArrowLeftSLine className='fs-15'/></button>
                    }
                </li>
                <tbody>
                </tbody>
                <li>
                    <button type='button' className='active'>{skip/take+1}</button>
                </li>
                <li>
                    {
                        skip+take*2<maxValue &&
                        <button type='button'>...</button>
                    }
                </li>
                <li>
                    {
                        skip+take<maxValue &&
                        <button onClick={()=>{
                            onChange({skip:(maxValue-take*(Math.floor(maxValue/take)-(maxValue%take==0)?1:0))})
                        }} type='button'>{Math.floor(maxValue/take)+(maxValue%take>0?1:0)}</button>
                    }
                </li>
                <li>
                    {
                        skip+take<maxValue &&
                        <button onClick={()=>onChange({skip:skip+take})} type='button'><RiArrowRightSLine className='fs-15'/></button>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default NavPagination