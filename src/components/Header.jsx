import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'
import logo from '../assets/imgs/logo-colored.png'
import { RiMenuLine } from "react-icons/ri"
import FormSearch from './FormSearch'

const Header = () => {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <>
        <header>
            <Container>
                <Link to='/'><img src={logo} alt="logo" className='logo'/></Link>

                <FormSearch className={'d-none d-md-flex'} />

                <Offcanvas show={show} onHide={handleClose} responsive="lg">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <nav>
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
                    </Offcanvas.Body>
                </Offcanvas>
                
                <button type='button' onClick={handleShow} className='fs-20 color-main d-lg-none'>
                    <RiMenuLine/>
                </button>
            </Container>
        </header>
        </>
    );
};

export default Header