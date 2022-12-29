import React from 'react'
import Container from 'react-bootstrap/Container'
import plaix from '../assets/imgs/plaix.svg'
import { RiMenuLine } from "react-icons/ri"

const Footer = () => {
    return (
        <footer>
            <Container>
                <button type='button' className='fs-20 white d-lg-none'>
                    <RiMenuLine/>
                </button>
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
                <div className='sign'>
                    Создано <img src={plaix} alt="plaix" />
                </div>
            </Container>
        </footer>
    );
};

export default Footer