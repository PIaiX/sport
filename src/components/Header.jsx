import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../assets/imgs/logo-colored.png'
import { RiMenuLine, RiCloseLine } from "react-icons/ri"
import FormSearch from './FormSearch'
import { useAppSelector } from "../store";

const Header = () => {
    const [show, setShow] = useState(false)
    const { auth } = useAppSelector(state => state.user)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    return (
        <>
            <header>
                <Container>
                    <Link to='/'><img src={logo} alt="logo" className='logo' /></Link>

                    <FormSearch className={'d-none d-md-flex'} />

                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <button type='button' className='close d-lg-none' onClick={handleClose}>
                            <RiCloseLine />
                        </button>
                        <Offcanvas.Body>
                            <nav className='mobile-menu' onClick={handleClose}>
                                <ul>
                                    <li>
                                        <NavLink to="/">Главная</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about">О нас</NavLink>
                                    </li>
                                    {/* <li>
                                        <NavLink to="/all-news">Блог</NavLink>
                                    </li> */}
                                    <li>
                                        <NavLink to="https://www.alfastrah.ru/individuals/life/protection-family/calc/?%20tag=smartmed&utm_source=smartmed_pro&utm_medium=cpa&utm_campaign=partner_link&utm_content=protection-family">Страхование</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`${auth ? '/account' : '/login'}`}>Личный кабинет</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <button type='button' onClick={handleShow} className='fs-20 color-main d-lg-none'>
                        <RiMenuLine />
                    </button>
                </Container>
            </header>
        </>
    );
};

export default Header