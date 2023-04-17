import React from 'react';
import {NavLink} from 'react-router-dom';
import {RiCalendarEventLine, RiFolderUserLine, RiLogoutBoxRLine} from "react-icons/ri";
import {TbNews} from "react-icons/tb";
import {AiOutlinePicture} from "react-icons/ai";
import {logout} from "../../store/slices/user/actions";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../store";

const AccountMenu = () => {
    const isAdmin = useAppSelector(state => state?.app?.isAdmin)
    const dispatch = useDispatch()
    const LogOut = () => {
        dispatch(logout())
    }
    return (
        <nav className='account-menu'>
            <ul>
                <li>
                    <NavLink to='profile'>
                        <RiFolderUserLine className='d-sm-none'/>
                        <span className='d-none d-sm-inline'>Личные данные</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='events'>
                        <RiCalendarEventLine className='d-sm-none'/>
                        <span className='d-none d-sm-inline'>Мероприятия</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='banners'>
                        <AiOutlinePicture className='d-sm-none'/>
                        <span className='d-none d-sm-inline'>Баннеры</span>
                    </NavLink>
                </li>
                {
                    isAdmin &&
                    <>
                        <li>
                            <NavLink to='news'>
                                <TbNews className='d-sm-none'/>
                                <span className='d-none d-sm-inline'>Новости</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type='button' onClick={LogOut}>
                                <RiLogoutBoxRLine className='d-sm-none'/>
                                <span className='d-none d-sm-inline'>Выход</span>
                            </button>
                        </li>
                    </>

                }
            </ul>
        </nav>
    );
};

export default AccountMenu;