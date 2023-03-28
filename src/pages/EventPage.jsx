import React, {useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps'

import {FiAlertCircle, FiCheckCircle, FiClock, FiHelpCircle, FiMapPin, FiPlayCircle} from "react-icons/fi"
import {IoMail} from "react-icons/io5"
import FormSearch from '../components/FormSearch'
import Participant from '../components/utils/Participant'
import TournamentBracket from '../components/TournamentBracket'
import {useLocation, useParams} from "react-router-dom";
import {GetOneEvent} from "../services/event";
import {useAppAction} from "../store";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsInstagram} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {CiYoutube} from "react-icons/ci";
import {FaTiktok} from "react-icons/fa";


const e = {
    "id": 1,
    "userId": 1,
    "name": "Master Chess Tournament",
    "latitude": "49.175690",
    "longitude": "55.826859",
    "description": "Chess tournament for masters or higher, prize fond is abount 1$",
    "venue": "Kazan, Podval, 45a",
    "vkLink": "vk.com/ksd1ns",
    "instaLink": "instagram.com/jhsdf2",
    "telegramLink": "t.me/kjn2j",
    "whatsAppLink": "whatsapp.com/kjn2j",
    "tictokLink": "ticktok.com/kjn2j",
    "youtubeLink": "youtube.com/kjn2j",
    "emailLink": "event@mail.com",
    "startsAt": "2023-03-22T08:50:01.930Z",
    "earlyRegistrationFrom": "2023-03-22T08:50:01.930Z",
    "earlyRegistrationTo": "2023-03-22T08:50:01.930Z",
    "standartRegistrationFrom": "2023-03-22T08:50:01.930Z",
    "standartRegistrationTo": "2023-03-22T08:50:01.930Z",
    "lateRegistrationFrom": "2023-03-22T08:50:01.930Z",
    "lateRegistrationTo": "2023-03-22T08:50:01.930Z",
    "gender": true,
    "rankFromId": 23,
    "rankToId": 27,
    "numberOfParticipants": 10,
    "disciplineId": 4
}

const EventPage = () => {

    const {state} = useLocation()
    // const [event, setEvent] = useState(state ? state : e)
    const [event, setEvent] = useState(e)
    const {id} = useParams()
    const {setNotFound} = useAppAction()

    const [tab, setTab] = useState(1)
    const [show, setShow] = useState(false)

    useEffect(() => {
        // production - GetOneEvent(id).then(res=>res && setEvent(res) || setNotFound(true))
        GetOneEvent(id).then(res => res && setEvent(res))
    }, [])

    console.log(event)
    return (
        <main>
            <Container>
                <section className='event-page py-4 py-md-5'>
                    <h1>{event?.name}</h1>
                    <div className="top">
                        <Row className='gx-0'>
                            <Col xs={12} lg={9}>
                                <img src={event?.imgUrl?event?.imgUrl:'../imgs/userDontsFind.jpg'} alt={event?.title}/>
                            </Col>
                            <Col xs={12} lg={3}>
                                <ul className='info'>
                                    <li>
                                        <FiClock className='green'/>
                                        <div>
                                            <p>Ранняя регистрация</p>
                                            <p>{event?.firstReg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <FiCheckCircle className='yellow'/>
                                        <div>
                                            <p>Стандартная регистрация</p>
                                            <p>{event?.secondReg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <FiAlertCircle className='red'/>
                                        <div>
                                            <p>Поздняя регистрация</p>
                                            <p>{event?.thirdReg}</p>
                                        </div>
                                    </li>
                                    <li>
                                        <FiPlayCircle className='color-4'/>
                                        <div>
                                            <p>Начало мероприятия</p>
                                            <p>{event?.beginTime}</p>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <h4>Duis aute irure</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat
                                        </li>
                                        <li>Excepteur sint occaecat cupidatat non proident</li>
                                        <li>Duis aute irure dolor in reprehenderit</li>
                                    </ul>

                                    <h4>Excepteur sint occaecat</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <h4>irure dolor</h4>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        <li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat
                                        </li>
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
                                                    <address>{event?.venue}</address>
                                                </div>
                                                <YMaps query={{lang:"ru_RU"}}>
                                                    <Map style={{width: '100%', height: '350px'} }
                                                         defaultState={{center:[event?.latitude, event?.longitude], zoom: 13,}}>
                                                        <Placemark  geometry={[event?.latitude, event?.longitude]}
                                                        />
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
                                                        {event?.emailLink &&
                                                            <li>
                                                                <a href={event?.emailLink} className='link'>
                                                                    <IoMail className='fs-12 me-2'/>
                                                                    <span>{event?.emailLink}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        {event?.vkLink &&
                                                            <li>
                                                                <a href={event?.vkLink} className='link'>
                                                                    <SlSocialVkontakte className='fs-12 me-2'/>
                                                                    <span>{event?.vkLink}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        {event?.youtubeLink &&
                                                            <li>
                                                                <a href={event?.youtubeLink} className='link'>
                                                                    <CiYoutube className='fs-12 me-2'/>
                                                                    <span>{event?.youtubeLink}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        {event?.instaLink &&
                                                            <li>
                                                                <a href={event?.instaLink} className='link'>
                                                                    <BsInstagram className='fs-12 me-2'/>
                                                                    <span>{event?.instaLink}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        {event?.telegramLink &&
                                                            <li>
                                                                <a href={event?.telegramLink} className='link'>
                                                                    <TbBrandTelegram className='fs-12 me-2'/>
                                                                    <span>{event?.telegramLink}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        {event?.whatsAppLink &&
                                                            <li>
                                                                <a href={event?.whatsAppLink} className='link'>
                                                                    <AiOutlineWhatsApp className='fs-12 me-2'/>
                                                                    <span>{event?.whatsAppLink}</span>
                                                                </a>
                                                            </li>
                                                        }
                                                        {event?.tictokLink &&
                                                            <li>
                                                                <a href={event?.tictokLink} className='link'>
                                                                    <FaTiktok className='fs-12 me-2'/>
                                                                    <span>{event?.tictokLink}</span>
                                                                </a>
                                                            </li>
                                                        }
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
                            <FormSearch/>
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
                                    <button type='button' className="link"
                                            onClick={() => setShow((show) ? false : true)}>{(show) ? 'Скрыть' : 'Показать'} неподтвержденные
                                        регистрации (1)
                                    </button>
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
                                    <button type='button' className="link">Показать неподтвержденные регистрации (1)
                                    </button>
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
                            <address className='fs-15 mb-3'>{event?.venue}</address>
                            <YMaps>
                                <Map style={{width: '100%', height: '350px'}}
                                     defaultState={{center:[event?.latitude, event?.longitude], zoom: 13,}}>
                                    <Placemark  geometry={[event?.latitude, event?.longitude]} />
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