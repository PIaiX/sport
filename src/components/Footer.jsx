import React from 'react'
import Container from 'react-bootstrap/Container'
import plaix from '../assets/imgs/plaix.svg'
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../store";

const Footer = () => {
    const { auth } = useAppSelector(state => state.user)

    return (
        <footer>
            <Container>
                <nav className='d-none d-lg-flex'>
                    <ul>
                        <li>
                            <NavLink to="/">Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">О нас</NavLink>
                        </li>
                        <li>
                            <a href="https://www.alfastrah.ru/individuals/life/protection-family/calc/?tag=ruchamp&utm_source=ruchamp_ru&utm_medium=cpa&utm_campaign=partner_link&utm_content=protection-family">
                                Страхование
                            </a>
                        </li>
                        <li>
                            <NavLink to={`${auth ? '/account' : '/login'}`}>Личный кабинет</NavLink>
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