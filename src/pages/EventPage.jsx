import React, {createContext, useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps'

import {FiAlertCircle, FiCheckCircle, FiClock, FiHelpCircle, FiMapPin, FiPlayCircle} from "react-icons/fi"
import {IoMail} from "react-icons/io5"
import FormSearch from '../components/FormSearch'
import Participant from '../components/utils/Participant'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {GetOneEvent} from "../services/event";
import {useUserAction} from '../store/slices/user/actions'
import {useAppAction, useAppSelector} from "../store";
import {SlSocialVkontakte} from "react-icons/sl";
import {BsInstagram} from "react-icons/bs";
import {TbBrandTelegram} from "react-icons/tb";
import {AiOutlineWhatsApp} from "react-icons/ai";
import {CiYoutube} from "react-icons/ci";
import {FaTiktok} from "react-icons/fa";
import {GetStringFromDate} from "../helpers/GetStringFromDate";
import {checkPhotoPath} from "../helpers/checkPhotoPath";
import {MyEditor} from "../components/MyEditor/MyEditor";
import TableWithUsers from "../components/Table/TableWithUsers";
import {GetAllUsers, GetRequests} from "../services/table";
export const EventContext = createContext()

const EventPage = () => {

    const {state} = useLocation()
    const {id} = useParams()
    const auth = useAppSelector(state => state.user.auth)
    const requests = useAppSelector(state => state.user.user?.requests)
    const myEvents = useAppSelector(state => state.user.user?.myEvents)
    const participation = useAppSelector(state => state.user.user?.participation)?.map(element => element?.event)
    const [users, setUsers] = useState()
    const [requestsUsers, setRequestsUsers] = useState()

    const [isJoinEvent, setIsJoinEvent] = useState(false)
    const [isMyEvent, setIsMyEvent] = useState(false)
    const [isParticipant, setIsParticipant] = useState(false)

    const {setNotFound, setAlert} = useAppAction()
    const {JoinEvent, ExitEvent} = useUserAction()
    // setAlert({message:'2323', typeAlert:'good'})

    const navigate = useNavigate()

    const [event, setEvent] = useState(state ? state : null)
    const [tab, setTab] = useState(1)
    const [show, setShow] = useState([])


    useEffect(() => {
        if (event) {
            GetAllUsers(event?.id).then(res => {
                if(res){
                    setUsers(res)
                }
            })
            GetRequests(event?.id).then(res => {
                if(res){
                    setShow(new Array(res?.length))
                    setRequestsUsers(res?.map((element, index) => element.participants))
                }
            })
        }
    }, [event])
    useEffect(() => {
        GetOneEvent(id).then(res => {
            if (res)
                setEvent(res)
            else
                setNotFound(true)
        })
    }, [])

    useEffect(() => {
        setIsMyEvent(myEvents?.find(element => element?.id == id) !== undefined)
    }, [myEvents])

    useEffect(() => {
        setIsJoinEvent(requests?.find(element => element?.event?.id == id) !== undefined)
    }, [requests])

    useEffect(() => {
        setIsParticipant(participation?.find(element => element?.id == id) !== undefined)
    }, [participation])

    if (!event)
        return <main></main>

    const AddEvent = () => {
        if (auth) {
            if (isMyEvent)
                navigate(`/account/events/${id}`)
            else if (!isJoinEvent) {
                JoinEvent(id).then(res=>{
                    const status = res?.payload?.response?.status
                    if(status==404){
                        setAlert({message:'Вы не подходите ни под одну категорию', typeAlert:'bad'})
                        setTimeout(()=> setAlert(null), 3000)
                    }
                    else if(status==409){
                        setAlert({message:'Ваша заявка на рассмотрении', typeAlert:'good'})
                        setTimeout(()=> setAlert(null), 3000)
                    }
                    else {
                        setAlert({message:'Заявка одобрена', typeAlert:'good'})
                        setTimeout(()=> setAlert(null), 3000)
                    }
                })
            }
        } else {
            navigate(`/login`)
        }
    }

    if (event)
        return (
            <main>
                <Container>
                    <section className='event-page py-4 py-md-5'>
                        <h1>{event?.name}</h1>
                        <div className="top">
                            <Row className='gx-0'>
                                <Col xs={12} lg={9}>
                                    <img src={checkPhotoPath(event?.image)} alt={event?.title}/>
                                </Col>
                                <Col xs={12} lg={3}>
                                    <ul className='info'>
                                        <li>
                                            <FiClock className='green'/>
                                            <div>
                                                <p>Ранняя регистрация</p>
                                                <p>
                                                    {GetStringFromDate(event?.earlyRegistrationFrom, event?.earlyRegistrationTo)}
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <FiCheckCircle className='yellow'/>
                                            <div>
                                                <p>Стандартная регистрация</p>
                                                <p>{GetStringFromDate(event?.standartRegistrationFrom, event?.standartRegistrationTo)}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <FiAlertCircle className='red'/>
                                            <div>
                                                <p>Поздняя регистрация</p>
                                                <p>{GetStringFromDate(event?.lateRegistrationFrom, event?.lateRegistrationTo)}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <FiPlayCircle className='color-4'/>
                                            <div>
                                                <p>Начало мероприятия</p>
                                                <p>{GetStringFromDate(event?.startsAt)}</p>
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
                                <button type='button' className='btn-3' onClick={AddEvent}>
                                    {
                                        (isMyEvent && 'Редактировать')
                                        || (isJoinEvent && 'Запрос отправлен')
                                        || (isParticipant && 'Вы являетесь участником')
                                        || 'Принять участие'
                                    }
                                </button>
                            </nav>
                        </div>

                        {
                            (tab === 1) &&
                            <div className='text'>
                                <Row className='gx-4 gx-xl-5'>
                                    <Col md={8}>
                                        <h2>Информация</h2>
                                        <MyEditor readOnly={true} value={event?.description}/>
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
                                                    <YMaps query={{lang: "ru_RU"}}>
                                                        <Map style={{width: '100%', height: '350px'}}
                                                             defaultState={{
                                                                 center: [event?.latitude, event?.longitude],
                                                                 zoom: 13,
                                                             }}>
                                                            <Placemark geometry={[event?.latitude, event?.longitude]}
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
                                {users?.length != 0 ?
                                    <FormSearch/>
                                    : <div><h4>Участников не найдено</h4></div>
                                }
                                <ul className='list-unstyled list-30 mt-5'>
                                    {users?.map((element, index) =>
                                        <li key={index}>
                                            <h3>
                                                <div className={'d-inline-block px-1'}>
                                                    Возраст: {
                                                    element?.weightCategory?.ageCategory?.ageTo ?
                                                        element?.weightCategory?.ageCategory?.ageFrom + ' - ' + element?.weightCategory?.ageCategory?.ageTo
                                                        : 'от ' + element?.weightCategory?.ageCategory?.ageFrom
                                                }
                                                </div>
                                                <div className={'d-inline-block px-1'}>
                                                    Вес: {
                                                    element?.weightCategory?.weightTo ?
                                                        element?.weightCategory?.weightFrom + ' - ' + element?.weightCategory?.weightTo
                                                        : 'от ' + element?.weightCategory?.weightFrom
                                                }
                                                </div>
                                                <div className={'d-inline-block px-1'}>
                                                    Пол: {element?.gender ? 'Мужской' : 'Женский'}
                                                </div>
                                            </h3>
                                            {
                                                element?.participants?.length != 0 &&
                                                <div className='participant head'>
                                                    <div className='name'>Участник</div>
                                                    <div className="birthDate">Год рождения</div>
                                                    <ul className="params">
                                                        <li>
                                                            Полных лет
                                                        </li>
                                                        <li>
                                                            Пол
                                                        </li>
                                                        <li>
                                                            Вес
                                                        </li>
                                                    </ul>
                                                </div>
                                            }
                                            <ul className='list-unstyled row row-cols-1 row-cols-sm-2 row-cols-lg-1 g-2 g-sm-3 g-md-4 g-lg-2'>
                                                {
                                                    element?.participants?.map((ele, ind) =>
                                                        <li key={ind}>
                                                            <Participant
                                                                approved={true}
                                                                {...ele?.user}
                                                            />
                                                        </li>
                                                    )
                                                }
                                                {
                                                    show[index] &&
                                                    requestsUsers[index]?.map((ele, ind) =>
                                                        <li key={ind}>
                                                            <Participant
                                                                approved={false}
                                                                {...ele?.user}
                                                            />
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                            <p>Подтвержденных регистраций: {element?.participants?.length}</p>
                                            {
                                                requestsUsers[index]?.length>0
                                                && < button type='button' className="link"
                                                            onClick={() =>{
                                                                let arr=[...show]
                                                                arr[index]=!arr[index]
                                                                setShow(arr)
                                                            }}>{(show[index]) ? 'Скрыть ' : 'Показать '}
                                                    неподтвержденные регистрации ({requestsUsers[index]?.length})
                                                </button>
                                            }
                                        </li>
                                    )}
                                </ul>
                            </div>
                        }
                        {
                            (tab === 3) &&
                            <div className='text'>
                                <EventContext.Provider value={{setEvent, event}}>
                                    <TableWithUsers event={event} setEvent={setEvent} readOnly={true}/>
                                </EventContext.Provider>
                            </div>
                        }
                        {
                            (tab === 4) &&
                            <div className='text'>
                                <h2>Место проведения</h2>
                                <address className='fs-15 mb-3'>{event?.venue}</address>
                                <YMaps>
                                    <Map style={{width: '100%', height: '350px'}}
                                         defaultState={{center: [event?.latitude, event?.longitude], zoom: 13,}}>
                                        <Placemark geometry={[event?.latitude, event?.longitude]}/>
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