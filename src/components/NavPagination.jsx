import React from 'react'
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri"

const NavPagination = ({maxValue, onChange, skip, take}) => {
    return (
        <nav className='pagination'>
            <ul>
                <li>
                    {
                        skip !== 0 &&
                        <button onClick={() => onChange({skip: skip - take})} type='button'><RiArrowLeftSLine
                            className='fs-15'/></button>
                    }
                </li>
                {
                    skip >= take * 2 &&
                    <li>
                        <button type='button' onClick={() => onChange({skip: 0})}>1</button>
                    </li>
                }
                {
                    skip >= take * 2 &&
                    <li>
                        <button onClick={() => onChange({skip: skip - take})} type='button'>...</button>
                    </li>
                }
                <li>
                    <button type='button' className='active'>{skip / take + 1}</button>
                </li>
                {
                    skip + take * 2 < maxValue &&
                    <li>
                        <button onClick={() => onChange({skip: skip + take})} type='button'>...</button>
                    </li>
                }

                <li>
                    {
                        skip + take < maxValue &&
                        <button onClick={() => {
                            onChange({skip: take * ((Math.floor(maxValue / take)) - (maxValue % take == 0 ? 1 : 0))})
                        }} type='button'>{Math.floor(maxValue / take) + (maxValue % take > 0 ? 1 : 0)}</button>
                    }
                </li>
                <li>
                    {
                        skip + take < maxValue &&
                        <button onClick={() => onChange({skip: skip + take})} type='button'><RiArrowRightSLine
                            className='fs-15'/></button>
                    }
                </li>
            </ul>
        </nav>
    )
}

export default NavPagination