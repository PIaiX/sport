import React from 'react';
import {NavLink} from 'react-router-dom';
import { RiFolderUserLine, RiCalendarEventLine, RiLogoutBoxRLine } from "react-icons/ri";
import {logout} from "../../store/slices/user/actions";
import {useDispatch} from "react-redux";

const AccountMenu = () => {
  const dispatch = useDispatch()
  const LogOut = ()=>{
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
          <button type='button' onClick={LogOut}>
            <RiLogoutBoxRLine className='d-sm-none'/>
            <span className='d-none d-sm-inline'>Выход</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AccountMenu;