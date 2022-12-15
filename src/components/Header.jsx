import React from 'react'
import Container from 'react-bootstrap/Container'
import logo from '../assets/imgs/logo-colored.png'
import { RiSearchEyeLine, RiSearch2Line } from "react-icons/ri";

const Header = () => {
    return (
        <header>
            <Container>
                <img src={logo} alt="logo" className='logo'/>
                <form action="" className='form-search'>
                    <input type="search" placeholder='Найти'/>
                    <button type='submit' className='btn-2'>
                        <RiSearch2Line/>
                    </button>
                </form>
                <nav>
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
            </Container>
        </header>
    );
};

export default Header