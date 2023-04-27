import React, {useEffect, useReducer, useRef, useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Keyboard, Navigation} from 'swiper'
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
import {GetAllEvents} from "../services/event";
import {GetDiscipline} from "../services/params";
import {DoCalendar} from "../helpers/DoCalendar";
import useAnchor from "../hooks/useAnchor";
import {GetNews} from "../services/news";
import {GetBanners} from "../services/banners";


const Home = () => {
    const [news, setNews] = useState()
    const [filter, setFilter] = useReducer((state, newState)=>({...state, ...newState}), {skip:0, take:12})
    const [events, setEvents] = useState()
    const [banners, setBanners] =useState()
    const [categories, setCategories] = useState()
    const year = DoCalendar()
    const [maxValue, setMaxValue] = useState()
    const [myRef, executeScroll] = useAnchor()
    const disciplineIdRef = useRef()

    useEffect(()=>{
        GetNews().then(res=>res && setNews(res?.body))
        GetBanners().then(res=>res && setBanners(res))
        GetDiscipline().then(res => {
            if (res) {

                setCategories(res.map((element) => ({ value: element.id, label: element.name })))
            }
        })
    }, [])


    useEffect(()=>{
        const {days, disciplineId:dis, ...data} = filter

        const d = days?.map(element=>JSON.stringify(new Date(element)?.toISOString()))

        const dates =d?.length>0?'['+d?.join(',')+']':null
        const disciplineIds =dis?.length?'['+dis?.join(',')+']':null

        GetAllEvents({...data, dates, disciplineIds}).then(res=>{
            if(res){
                setMaxValue(res?.meta?.total)
                setEvents((prevState)=>{
                    if (prevState!==undefined)
                        executeScroll()
                    return res?.body
                })
            }
        })
    }, [filter])

    return (
        <main>
            <Container>
                {banners?.length>0
                    && <section className='py-2 py-sm-4 py-xl-5 position-relative mb-5 banne'>
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
                }

                <section className='mb-5' ref={myRef}>
                    <h2>Календарь спортивных мероприятий</h2>
                    <div className="calend position-relative">
                        <Swiper
                            initialSlide={4}
                            className='date-slider'
                            modules={[Navigation, Keyboard]}
                            loop={false}
                            slidesPerView={'auto'}
                            grabCursor={true}
                            navigation
                            keyboard={true}
                            simulateTouch={true}
                            allowTouchMove={true}
                        >
                            {year?.map((iElement, index)=>
                                <SwiperSlide key={index} centeredSlidesBounds={true}>
                                    <div className="month">
                                        <span>{index%2!=1?iElement.name:<div>&nbsp;</div>}</span>
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
                            onChange = {(value)=>{
                                setFilter({disciplineId:value.map((element) => element.value )})
                            }}
                            ref={disciplineIdRef}
                            classNamePrefix="simple-select"
                            className="simple-select-container pb-2"
                            options={categories}
                            isMulti
                            isClearable={true}
                            isSearchable={true}
                        />
                        <Calendar calendarDays={filter?.days} CalendarClick={(value)=>setFilter({days:value})} />
                        <div className="calendar pb-2">
                            <button
                                className="btn-2"
                                onClick={()=>{
                                    disciplineIdRef.current.setValue([])
                                    setFilter({skip:0, take:12, days:undefined, disciplineId:undefined})
                                }}
                            >
                                Сбросить фильтры
                            </button>
                        </div>
                    </div>
                    <Row xs={1} sm={2} md={3} xl={4} className='mt-3 mt-md-4 mt-xl-5 gx-4 gy-4 gy-md-5'>
                        {events?.map((element, index)=>
                            <Col key={index}>
                                <EventCard {...element} />
                            </Col>
                        )}
                    </Row>
                    <NavPagination {...filter} maxValue={maxValue} onChange={(e)=>setFilter({...e}) } />
                </section>

                <section className='mb-5'>
                    <h2>Новости</h2>
                    <div className="position-relative news">
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