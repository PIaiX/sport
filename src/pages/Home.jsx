import React, {useEffect, useReducer, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Keyboard} from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/keyboard'
import Banner from '../components/Banner'
import DateBtn from '../components/utils/DateBtn'
import EventCard from '../components/EventCard'

import Select from 'react-select'
import Calendar from '../components/Calendar'
import NewsPreview from '../components/NewsPreview'
import NavPagination from '../components/NavPagination'
import {GetNews} from '../services/news'
import {GetAllEvents} from "../services/event";
import {GetBanners} from "../services/banners";
import {GetCategories, GetParams} from "../services/params";
import {DoCalendar} from "../helpers/DoCalendar";

const o = [{value: '1', label: 'Вариант 1'},
    {value: '2', label: 'Вариант 2'},
    {value: '3', label: 'Вариант 3'},
    {value: '4', label: 'Вариант 4'},
    {value: '5', label: 'Вариант 5'},
    {value: '6', label: 'Вариант 6'},
    {value: '7', label: 'Вариант 7'},
    {value: '8', label: 'Вариант 8'},
    {value: '9', label: 'Вариант 9'},
    {value: '10', label: 'Вариант 10'},
    {value: '11', label: 'Вариант 11'},
    {value: '12', label: 'Вариант 12'}]
const w = [{value: '1', label: 'Параметр 1'},
    {value: '2', label: 'Параметр 2'},
    {value: '3', label: 'Параметр 3'},
    {value: '4', label: 'Параметр 4'},
    {value: '5', label: 'Параметр 5'},
    {value: '6', label: 'Параметр 6'},
    {value: '7', label: 'Параметр 7'},
    {value: '8', label: 'Параметр 8'},
    {value: '9', label: 'Параметр 9'},
    {value: '10', label: 'Параметр 10'},
    {value: '11', label: 'Параметр 11'},
    {value: '12', label: 'Параметр 12'},]
const n=[{
        id:1,
        img:'imgs/n1.jpg',
        title:'Британский боксер Джо Джойс обратился к Александру Усику и Тайсону',
        mainInf:'\n' +
            'Британский боксер Джо Джойс обратился к Александру Усику и Тайсону Фьюри после отмены боя \n' +
            'Непобежденный британский боксер Джо Джойс прокомментировал провал переговоров по бою между британцем Тайсоном Фьюри и украинцем Александром Усиком за звание абсолютного чемпиона мира в супертяжелом весе. \n' +
            'Титульный поединок, запланированный на 29 апреля в Лондоне, не состоится. \n' +
            '«Я надеюсь, что бой все-таки пройдет. Это же битва за звание абсолютного чемпиона мира в супертяжелом весе! Когда последний раз был такой бой? Они должны провести этот бой. И затем уже драться с другими парнями. \n' +
            'Ребята! Усик, Фьюри — вы можете просто провести этот бой? Я думал, у вас все на мази. В чем проблема на этот раз?» — заявил Джойс в интервью Sky Sports. \n' +
            ' \n' +
            'Александр Усик провел 20 боев в профессиональном боксе и одержал 20 побед. На счету Тайсона Фьюри 33 выигрыша в 34 поединках.'
    },
    {
        id:1,
        img:'imgs/n2.jpg',
        title:'Промоутер Тайсона Фьюри: «Тайсон может завершить карьеру» ',
        mainInf:'Промоутер Фьюри: «Тайсон может завершить карьеру» \n' +
            'Сопромоутер Тайсона Фьюри Фрэнк Уоррен прокомментировал срыв поединка с Александром Усиком за звание абсолютного чемпиона мира в тяжелом весе. \n' +
            '«Тайсон очень недоволен тем, что бой сорвался. Он готовился к поединку, тренировался.  \n' +
            'Слушайте, он может завершить карьеру. Я не знаю, что именно он планирует делать дальше, но он имеет право делать все, что захочет. \n' +
            'Я искренне верил, что Усик хочет подраться. Что ему важны пояса, а не деньги. Но это из-за него сорвался бой», – заявил Уоррен. \n' +
            'Фьюри – Усику: «Все сделал, чтобы отскочить, умолял дать тебе реванш как девочка. Получил реванш и все равно не захотел драться. Ссыкло» \n' +
            'Брат Фьюри: «Если бой с Усиком не состоится, Тайсон завершит карьеру»'
    },
    {
        id:1,
        img:'imgs/n3.jpg',
        title:'Волжанка Дарья Зрянина заняла третье место на Кубке мира по боксу ',
        mainInf:'\n' +
            'Волжанка Дарья Зрянина заняла третье место на Кубке мира по боксу \n' +
            'С 14 по 20 марта в Черногории, в городе Будва проходили поединки молодёжного Кубка мира по боксу. На этих состязаниях 17-летняя волжанка Дарья Зрянина заняла третье место. \n' +
            'Дарья провела два боя, в четвертьфинале выиграла у спортсменки из Польши, но в полуфинале по очкам уступила гречанке. \n' +
            'Дарья занимается в клубе «Зал бокса» у тренера Икмета Акперова и сейчас готовится выступить на чемпионате России, который пройдёт в Анапе с 25 марта по 1 апреля.\n'
    },
    {
        id:1,
        img:'imgs/n4.jpg',
        title:'«МЫ ДОЛЖНЫ ПОМОГАТЬ АТЛЕТАМ, ЗАЩИЩАТЬ ИХ» — ПРЕЗИДЕНТ',
        mainInf:'Никто не имеет права решать, должен ли спортсмен выступать на том или ином турнире, необходимо помогать и защищать атлетов, заявил президент Международной ассоциации бокса (IBA) Умар Кремлев. \n' +
            '— Никто не имеет права решать, должен ли спортсмен выступать на том или ином турнире. Мы — функционеры. Моя и наша работа — создавать условия для спортсменов. Мы должны помогать атлетам, защищать их. И если спортсмен находится в непростой ситуации, то он не должен бояться обратиться за помощью. Лично я сделаю все возможное, чтобы оказать ее ему. \n' +
            'IBA — это ваш дом. Мы поддерживаем атлетов и развиваем бокс, — сказал Кремлев в рамках пресс конференции IBA по ходу женского чемпионата мира по боксу, который проходит в Индии. \n' +
            'Из за решения IBA допустить российских и белорусских спортсменов под национальными флагами ряд стран бойкотировали турнир в Индии. \n' +
            'Кремлев возглавляет Международную ассоциацию бокса с декабря 2020 года.'
    }]
const e=[{id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'},
    {id:1, imgUrl:'imgs/img1.jpeg', title:'Название мероприятия', location:'Казань, просп. Ямашева, 115А', data:'31.12.2022', days:'15 дней'}]
const b=[{
    imgUrl:'../imgs/img1.jpeg',
    title:'Крутое название',
    categoryAge:'16+',
    srcLink:'event/2',
    actions:[
        'Бокс',
        'Каратэ',
        'Шахматы без правил'
    ]
},
    {
        imgUrl:'../imgs/img2.jpeg',
        title:'Крутое название',
        categoryAge:'16+',
        srcLink:'event/2',
        actions:[
            'Бокс',
            'Каратэ',
            'Шахматы без правил'
        ]
    },
    {
        imgUrl:'../imgs/img3.jpeg',
        title:'Крутое название',
        categoryAge:'16+',
        srcLink:'event/2',
        actions:[
            'Бокс',
            'Каратэ',
            'Шахматы без правил'
        ]
    }]
const Home = () => {
    const [news, setNews] = useState(n)
    const [filter, setFilter] = useReducer((state, newState)=>({...state, ...newState}), {})
    const [events, setEvents] = useState(e)
    const [banners, setBanners] =useState(b)
    const [categories, setCategories] = useState(o)
    const [waysOfCategories,setWaysOfCategories] = useState(w)
    const year = DoCalendar()

    useEffect(()=>{
        GetNews().then(res=>res && setNews(res))
        GetBanners().then(res=>res && setBanners(res))
        GetCategories().then(res=>res && setCategories(res))
    }, [])

    useEffect(()=>{
        filter?.typeEvent && GetParams(filter?.typeEvent).then(res=>res && setWaysOfCategories(res))
    },[categories])

    useEffect(()=>{
        GetAllEvents(filter).then(res=>res && setEvents(res))
    }, [filter])
    return (
        <main>
            <Container>
                <section className='py-2 py-sm-4 py-xl-5 position-relative mb-5'>
                    <Swiper
                        className='main-slider'
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={'auto'}
                        navigation
                        speed={1000}
                        autoplay={{
                            delay: 10000,
                        }}
                    >
                        {banners?.map((element, index)=>
                            <SwiperSlide key={index}>
                                <Banner {...element}></Banner>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </section>

                <section className='mb-5'>
                    <h2>Календарь спортивных мероприятий</h2>
                    <div className="position-relative">
                        <Swiper
                            className='date-slider'
                            modules={[Navigation, Keyboard]}
                            loop={false}
                            spaceBetween={10}
                            slidesPerView={'auto'}
                            navigation
                            cssMode={true}
                            keyboard={true}
                            simulateTouch={true}
                            allowTouchMove={true}
                        >
                            {year?.map((iElement, index)=>
                                <SwiperSlide key={index}>
                                    <div className="month">
                                        <span>{iElement.name}</span>
                                    </div>
                                    <div className="days">
                                        {iElement.days.map((jElement,jndex)=>
                                            <DateBtn
                                                key={jndex}
                                                currentValue={
                                                    new Date(new Date().getFullYear()+(index!==0 && iElement.index<=year[0].index ?1:0), iElement?.index, jElement?.day)
                                                }
                                                calendarDays={filter?.days}
                                                {...jElement}
                                                CalendarClick={(value)=>setFilter({days:value})}                                            />
                                        )}
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>

                    <div className="filters">
                        <Select
                            name="sort"
                            placeholder="Тип мероприятия"
                            onChange = {(value)=>setFilter({typeEvent:value})}
                            classNamePrefix="simple-select"
                            className="simple-select-container"
                            options={categories}
                            isMulti
                            isClearable={true}
                            isSearchable={true}
                        />
                        <Select
                            name="sort"
                            placeholder="Категория мероприятия"
                            classNamePrefix="simple-select"
                            className="simple-select-container"
                            onChange = {(value)=>setFilter({typeWay:value})}
                            options={waysOfCategories}
                            isMulti
                            // defaultValue={[waysOfCategories[0]]}
                            isClearable={true}
                            isSearchable={true}
                        />
                        <Calendar calendarDays={filter?.days} CalendarClick={(value)=>setFilter({days:value})} />
                    </div>

                    <Row xs={1} sm={2} md={3} xl={4} className='mt-3 mt-md-4 mt-xl-5 gx-4 gy-4 gy-md-5'>
                        {events?.map((element, index)=>
                            <Col key={index}>
                                <EventCard {...element} />
                            </Col>
                        )}
                    </Row>
                    <button type='button' className='btn-2 mt-5 mx-auto'>Показать ещё</button>

                    <NavPagination />
                </section>

                <section className='mb-5'>
                    <h2>Новости</h2>
                    <div className="position-relative">
                        <Swiper
                            className=''
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            breakpoints={{
                                576: {
                                  slidesPerView: 2,
                                  spaceBetween: 20
                                },
                                768: {
                                  slidesPerView: 3,
                                  spaceBetween: 20
                                },
                                1200: {
                                  slidesPerView: 4,
                                  spaceBetween: 20
                                }
                            }}
                        >
                            {news?.map((element, index)=>
                                <SwiperSlide key={index}>
                                    <NewsPreview {...element} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </section>
            </Container>
        </main>
    )
}

export default Home