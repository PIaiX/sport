import React from 'react'
import { RiSearch2Line } from "react-icons/ri"

const FormSearch = (props) => {
    return (
        <form action="" className={'form-search '+props.className}>
            <input type="search" placeholder='Найти'/>
            <button type='submit' className='btn-1'>
                <RiSearch2Line/>
            </button>
        </form>
    )
}

export default FormSearch