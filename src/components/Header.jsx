import React from 'react'
import Container from 'react-bootstrap/Container'
import logo from '../assets/imgs/logo-colored.png'
import { RiSearch2Line, RiMenuLine } from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <Container>
                <img src={logo} alt="logo" className='logo'/>
                <form action="" className='form-search d-none d-md-flex'>
                    <input type="search" placeholder='Найти'/>
                    <button type='submit' className='btn-1'>
                        <RiSearch2Line/>
                    </button>
                </form>
                <nav className='d-none d-lg-flex'>
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="/">О нас</a>
                        </li>
                        <li>
                            <a href="/">Личный кабинет</a>
                        </li>
                    </ul>
                </nav>
                <button type='button' className='fs-20 color-main d-lg-none'>
                    <RiMenuLine/>
                </button>
            </Container>
        </header>
    );
};

export default Header