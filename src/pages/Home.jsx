import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import Banner from '../components/Banner'
import DateBtn from '../components/utils/DateBtn'
import EventCard from '../components/EventCard'

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"


const Home = () => {
    return (
        <main>
            <Container>
                <section className='py-5 position-relative mb-5'>
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
                        <SwiperSlide>
                            <Banner type={0}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner/>
                        </SwiperSlide>
                    </Swiper>
                </section>

                <section className='mb-5'>
                    <h2>Афиша событий в Казани</h2>
                    <div className="position-relative">
                        <Swiper
                            className='date-slider'
                            modules={[Navigation, FreeMode]}
                            loop={false}
                            spaceBetween={10}
                            freeMode={true}
                            slidesPerView={'auto'}
                            slidesPerGroupAuto={true}
                            navigation
                        >
                            <SwiperSlide>
                                <div className="month">
                                    <span>Декабрь</span>
                                </div>
                                <div className="days">
                                    <DateBtn day={16} weekDay={5}/>
                                    <DateBtn day={17} weekDay={6}/>
                                    <DateBtn day={18} weekDay={7}/>
                                    <DateBtn day={19} weekDay={1}/>
                                    <DateBtn day={20} weekDay={2}/>
                                    <DateBtn day={21} weekDay={3}/>
                                    <DateBtn day={22} weekDay={4}/>
                                    <DateBtn day={23} weekDay={5}/>
                                    <DateBtn day={24} weekDay={6}/>
                                    <DateBtn day={25} weekDay={7}/>
                                    <DateBtn day={26} weekDay={1}/>
                                    <DateBtn day={27} weekDay={2}/>
                                    <DateBtn day={28} weekDay={3}/>
                                    <DateBtn day={29} weekDay={4}/>
                                    <DateBtn day={30} weekDay={5}/>
                                    <DateBtn day={31} weekDay={6}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="month">
                                    <span>Январь</span>
                                </div>
                                <div className="days">
                                    <DateBtn day={1} weekDay={7}/>
                                    <DateBtn day={2} weekDay={1}/>
                                    <DateBtn day={3} weekDay={2}/>
                                    <DateBtn day={4} weekDay={3}/>
                                    <DateBtn day={5} weekDay={4}/>
                                    <DateBtn day={6} weekDay={5}/>
                                    <DateBtn day={7} weekDay={6}/>
                                    <DateBtn day={8} weekDay={7}/>
                                    <DateBtn day={9} weekDay={1}/>
                                    <DateBtn day={10} weekDay={2}/>
                                    <DateBtn day={11} weekDay={3}/>
                                    <DateBtn day={12} weekDay={4}/>
                                    <DateBtn day={13} weekDay={5}/>
                                    <DateBtn day={14} weekDay={6}/>
                                    <DateBtn day={15} weekDay={7}/>
                                    <DateBtn day={16} weekDay={1}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>


                    {/* <div className="text">
                        <div className="line">
                            <div className="sticky">12345</div>
                        </div>
                        <div className="line">
                            <div className="sticky">67890</div>
                        </div>
                    </div> */}

                    <Row md={4} className='mt-5 gx-4 gy-5'>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                        <Col>
                            <EventCard/>
                        </Col>
                    </Row>
                    <button type='button' className='btn-2 mt-5 mx-auto'>Показать ещё</button>

                    <nav className='pagination'>
                        <ul>
                            <li><button type='button'><RiArrowLeftSLine className='fs-15'/></button></li>
                            <li><button type='button' className='active'>1</button></li>
                            <li><button type='button'>2</button></li>
                            <li><button type='button'>...</button></li>
                            <li><button type='button'>10</button></li>
                            <li><button type='button'><RiArrowRightSLine className='fs-15'/></button></li>
                        </ul>
                    </nav>
                </section>
            </Container>
        </main>
    )
}

export default Home