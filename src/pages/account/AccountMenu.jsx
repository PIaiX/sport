import React from 'react';
import {NavLink} from 'react-router-dom';

const AccountMenu = () => {
  return (
    <nav className='account-menu'>
      <ul>
        <li>
          <NavLink to='profile'>Личные данные</NavLink>
        </li>
        <li>
          <NavLink to='events'>Мероприятия</NavLink>
        </li>
        <li>
          <button type='button'>Выход</button>
        </li>
      </ul>
    </nav>
  );
};

export default AccountMenu;