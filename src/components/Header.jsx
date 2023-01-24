import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import logo from '../assets/imgs/logo-colored.png'
import { RiMenuLine } from "react-icons/ri"
import FormSearch from './FormSearch'

const Header = () => {
    return (
        <header>
            <Container>
                <Link to='/'><img src={logo} alt="logo" className='logo'/></Link>

                <FormSearch className={'d-none d-md-flex'} />
                <nav className='d-none d-lg-flex'>
                    <ul>
                        <li>
                            <a href="/">Главная</a>
                        </li>
                        <li>
                            <a href="/">О нас</a>
                        </li>
                        <li>
                            <a href="/">Блог</a>
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