import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

import { FiClock, FiCheckCircle, FiAlertCircle, FiPlayCircle, FiMapPin, FiHelpCircle } from "react-icons/fi"
import { IoLogoVk, IoLogoYoutube, IoMail } from "react-icons/io5"
import FormSearch from '../components/FormSearch'
import Participant from '../components/utils/Participant'
import TournamentBracket from '../components/TournamentBracket'

const EventPage = () => {
    const [tab, setTab] = useState(1)
    const [show, setShow] = useState(false)

    const defaultState = {
        center: [55.821283, 49.161006],
        zoom: 13,
    }
    const style = {
        width: '100%',
        height: '350px'
    }

    return (
        <main>
            <Container>
                <section className='event-page py-4 py-md-5'>
                    <h1>Название мероприятия</h1>
                    <div className="top">
                        <Row className='gx-0'>
                            <Col xs={12} lg={9}>
                                <img src="imgs/img1.jpeg" alt="Название мероприятия"/>
                            </Col>
                            <Col xs={12} lg={3}>
                                <ul className='info'>
                                    <li>
                                        <FiClock className='green'/>
                                        <div>
                                            <p>Ранняя регистрация</p>
                                            <p>25 Окт - 01 Дек 00:01</p>
                                        </div>
                                    </li>
                                    <li>
                                        <FiCheckCircle className='yellow'/>
                                        <div>
                                            <p>Стандартная регистрация</p>
                                            <p>25 Окт - 01 Дек 00:01</p>
                                        </div>
                                    </li>
                                    <li>
                                        <FiAlertCircle className='red'/>
                                        <div>
                                            <p>Поздняя регистрация</p>
                                            <p>25 Окт - 01 Дек 00:01</p>
                                        </div>
                                    </li>
                                    <li>
                                        <FiPlayCircle className='color-4'/>
                                        <div>
                                            <p>Начало мероприятия</p>
                                            <p>12 Дек 00:01</p>
                                        </div>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                        <nav>
                            <ul>
                                <li>
                                    <button type='button' onClick={() => setTab(1)}>Информация</button>
                                </li>
                                <li>
                                    <button type='button' onClick={() => setTab(2)}>Участники</button>
                                </li>
                                <li>
                                    <button type='button' onClick={() => setTab(3)}>Турнирная таблица</button>
                                </li>
                                <li>
                                    <button type='button' onClick={() => setTab(4)}>Место проведения</button>
                                </li>
                            </ul>
                            <button type='button' className='btn-3'>
                                Принять участие
                            </button>
                        </nav>
                    </div>

                    {
                        (tab === 1) &&
                        <div className='text'>
                            <Row className='gx-4 gx-xl-5'>
                                <Col md={8}>
                                    <h2>Информация</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <h4>Duis aute irure</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                        <li>Excepteur sint occaecat cupidatat non proident</li>
                                        <li>Duis aute irure dolor in reprehenderit</li>
                                    </ul>

                                    <h4>Excepteur sint occaecat</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <h4>irure dolor</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                                        <li>Excepteur sint occaecat cupidatat non proident</li>
                                        <li>Duis aute irure dolor in reprehenderit</li>
                                    </ul>
                                </Col>
                                <Col md={4} className='mt-4 mt-md-0'>
                                    <ul className='list-unstyled list-15'>
                                        <li>
                                            <div className="card">
                                                <h5 className='card-title'>
                                                    <FiMapPin/>
                                                    <span>Место проведения</span>
                                                </h5>
                                                <div className='card-body'>
                                                    <address>Казань, просп. Ямашева, 115А</address>
                                                </div>
                                                <YMaps>
                                                    <Map style={style} defaultState={defaultState}>
                                                        <Placemark geometry={defaultState.center} />
                                                    </Map>
                                                </YMaps>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card">
                                                <h5 className='card-title'>
                                                    <FiHelpCircle/>
                                                    <span>Контакты</span>
                                                </h5>
                                                <div className='card-body'>
                                                    <ul className='list-unstyled list-10'>
                                                        <li>
                                                            <a href="mailto:mail@mail.ru" className='link'>
                                                                <IoMail className='fs-12 me-2'/>
                                                                <span>mailto:mail@mail.ru</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/" className='link'>
                                                                <IoLogoVk className='fs-12 me-2'/>
                                                                <span>https://vk.com/link</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="/" className='link'>
                                                                <IoLogoYoutube className='fs-12 me-2'/>
                                                                <span>Youtube</span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    }
                    {
                        (tab === 2) &&
                        <div className='text'>
                            <h2>Участники</h2>
                            <FormSearch />
                            <ul className='list-unstyled list-30 mt-5'>
                                <li>
                                    <h3>Категория 1</h3>
                                    <div className='participant head'>
                                        <div className='name'>Участник</div>
                                        <div className="birth">Год рождения</div>
                                        <ul className="params">
                                            <li>
                                                Название параметра
                                            </li>
                                            <li>
                                                Название параметра
                                            </li>
                                            <li>
                                                Название параметра
                                            </li>
                                            <li>
                                                Название параметра
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className='list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-1 g-2 g-sm-3 g-md-4 g-lg-2'>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        {
                                            (show) &&
                                            <li>
                                                <Participant 
                                                approved={false}
                                                name={'Имя'} 
                                                surname={'Фамилия'} 
                                                town={'Город'} 
                                                birth={'01.01.2001'}/>
                                            </li>
                                        }
                                    </ul>
                                    <p>Подтвержденных регистраций: 4</p>
                                    <button type='button' className="link" onClick={()=>setShow((show)?false:true)}>{(show)?'Скрыть':'Показать'} неподтвержденные регистрации (1)</button>
                                </li>
                                <li>
                                    <h3>Категория 2</h3>
                                    <div className='participant head'>
                                        <div className='name'>Участник</div>
                                        <div className="birth">Год рождения</div>
                                        <ul className="params">
                                            <li>
                                                Название параметра
                                            </li>
                                            <li>
                                                Название параметра
                                            </li>
                                            <li>
                                                Название параметра
                                            </li>
                                            <li>
                                                Название параметра
                                            </li>
                                        </ul>
                                    </div>
                                    <ul className='list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-1 g-2 g-sm-3 g-md-4 g-lg-2'>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                        <li>
                                            <Participant 
                                            approved={true}
                                            name={'Имя'} 
                                            surname={'Фамилия'} 
                                            town={'Город'} 
                                            birth={'01.01.2001'}/>
                                        </li>
                                    </ul>
                                    <p>Подтвержденных регистраций: 4</p>
                                    <button type='button' className="link">Показать неподтвержденные регистрации (1)</button>
                                </li>
                            </ul>
                        </div>
                    }
                    {
                        (tab === 3) &&
                        <div className='text'>
                            <h2>Турнирная таблица</h2>
                            <TournamentBracket/>
                        </div>
                    }
                    {
                        (tab === 4) &&
                        <div className='text'>
                            <h2>Место проведения</h2>
                            <address className='fs-15 mb-3'>Казань, просп. Ямашева, 115А</address>
                            <YMaps>
                                <Map style={style} defaultState={defaultState}>
                                    <Placemark geometry={defaultState.center} />
                                </Map>
                            </YMaps>
                        </div>
                    }
                </section>
                
            </Container>
            
        </main>
    )
}

export default EventPage