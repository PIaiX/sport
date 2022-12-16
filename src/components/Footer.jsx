import React from 'react'
import Container from 'react-bootstrap/Container'
import plaix from '../assets/imgs/plaix.svg'

const Footer = () => {
    return (
        <footer>
            <Container>
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
                <div className='sign'>
                    Создано <img src={plaix} alt="plaix" />
                </div>
            </Container>
        </footer>
    );
};

export default Footer