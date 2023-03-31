import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {RiSearchEyeLine, RiEdit2Line, RiImageLine} from "react-icons/ri";
import {useAppSelector} from "../store";

const AccEventPreview = ({date, title, role, count, id, idUser, active}) => {
    const idRegUser = useAppSelector(state => state.user.user.id)

    return (
        <div className='event-preview'>
            <div className='date'><span className='d-xl-none'>Дата: </span>{date}</div>
            <div className='title'>{title}</div>
            <div className='role'>
                <span className='d-xl-none'>Роль: </span>
                {
                    (role === 2)
                        ? 'Организатор'
                        : 'Участник'
                }
            </div>
            <div className='count'><span className='d-xl-none'>Количество участников: </span>{count}</div>
            <div className="btns">
                <Link to={`${id}`} className={(active && idRegUser == idUser) ? '' : 'dis'}><RiEdit2Line/></Link>
                <Link to={`/event/${id}`}><RiSearchEyeLine/></Link>
            </div>
        </div>
    );
};

export default AccEventPreview;