import React from 'react'
import Container from 'react-bootstrap/Container'
import logo from '../assets/imgs/logo.png'
import { TfiSearch } from "react-icons/tfi"

const Header = () => {
    return (
        <header>
            <Container>
                <img src={logo} alt="logo" className='logo'/>
                <form action="">
                    <input type="search" placeholder='Найти'/>
                    <button type='submit'>
                        <TfiSearch/>
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