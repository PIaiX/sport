import React from 'react'
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

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"

import Select from 'react-select'
import Calendar from '../components/Calendar'
import NewsPreview from '../components/NewsPreview'

const optionsList = [
    {value: '1', label: 'Вариант 1'},
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
    {value: '12', label: 'Вариант 12'},
]


const Home = () => {
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
                        <SwiperSlide>
                            <Banner imgUrl={'imgs/img1.jpeg'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner imgUrl={'imgs/img2.jpeg'}/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Banner imgUrl={'imgs/img3.jpeg'}/>
                        </SwiperSlide>
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
                                    <DateBtn day={17} weekDay={2}/>
                                    <DateBtn day={18} weekDay={3}/>
                                    <DateBtn day={19} weekDay={4}/>
                                    <DateBtn day={20} weekDay={5}/>
                                    <DateBtn day={21} weekDay={6}/>
                                    <DateBtn day={22} weekDay={7}/>
                                    <DateBtn day={23} weekDay={1}/>
                                    <DateBtn day={24} weekDay={2}/>
                                    <DateBtn day={25} weekDay={3}/>
                                    <DateBtn day={26} weekDay={4}/>
                                    <DateBtn day={27} weekDay={5}/>
                                    <DateBtn day={28} weekDay={6}/>
                                    <DateBtn day={29} weekDay={7}/>
                                    <DateBtn day={30} weekDay={1}/>
                                    <DateBtn day={31} weekDay={2}/>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="month">
                                    <span>Февраль</span>
                                </div>
                                <div className="days">
                                    <DateBtn day={1} weekDay={3}/>
                                    <DateBtn day={2} weekDay={4}/>
                                    <DateBtn day={3} weekDay={5}/>
                                    <DateBtn day={4} weekDay={6}/>
                                    <DateBtn day={5} weekDay={7}/>
                                    <DateBtn day={6} weekDay={1}/>
                                    <DateBtn day={7} weekDay={2}/>
                                    <DateBtn day={8} weekDay={3}/>
                                    <DateBtn day={9} weekDay={4}/>
                                    <DateBtn day={10} weekDay={5}/>
                                    <DateBtn day={11} weekDay={6}/>
                                    <DateBtn day={12} weekDay={7}/>
                                    <DateBtn day={13} weekDay={1}/>
                                    <DateBtn day={14} weekDay={2}/>
                                    <DateBtn day={15} weekDay={3}/>
                                    <DateBtn day={16} weekDay={4}/>
                                    <DateBtn day={17} weekDay={5}/>
                                    <DateBtn day={18} weekDay={6}/>
                                    <DateBtn day={19} weekDay={7}/>
                                    <DateBtn day={20} weekDay={1}/>
                                    <DateBtn day={21} weekDay={2}/>
                                    <DateBtn day={22} weekDay={3}/>
                                    <DateBtn day={23} weekDay={4}/>
                                    <DateBtn day={24} weekDay={5}/>
                                    <DateBtn day={25} weekDay={6}/>
                                    <DateBtn day={26} weekDay={7}/>
                                    <DateBtn day={27} weekDay={1}/>
                                    <DateBtn day={28} weekDay={2}/>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    

                    <div className="filters">
                        <Select
                            name="sort"
                            placeholder="Тип мероприятия"
                            classNamePrefix="simple-select"
                            className="simple-select-container"
                            options={optionsList}
                            isMulti
                            isClearable={true}
                            isSearchable={true}
                        />
                        <Select
                            name="sort"
                            placeholder="Тип мероприятия"
                            classNamePrefix="simple-select"
                            className="simple-select-container"
                            options={optionsList}
                            isMulti
                            defaultValue={[optionsList[0]]}
                            isClearable={true}
                            isSearchable={true}
                        />
                        <Calendar/>
                    </div>

                    {/* <div className="position-relative">
                        <Swiper
                            className='filters-carousel mt-4'
                            modules={[Navigation]}
                            loop={false}
                            navigation={true}
                            spaceBetween={20}
                            slidesPerView={'auto'}
                            simulateTouch={false}
                        >
                            <SwiperSlide>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                
                            </SwiperSlide>
                            <SwiperSlide>
                                
                            </SwiperSlide>
                        </Swiper>
                    </div> */}

                    <Row xs={1} sm={2} md={3} xl={4} className='mt-3 mt-md-4 mt-xl-5 gx-4 gy-4 gy-md-5'>
                        <Col>
                            <EventCard imgUrl={'imgs/img1.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img2.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img3.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img1.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img2.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img3.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img1.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img2.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img3.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img1.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img2.jpeg'}/>
                        </Col>
                        <Col>
                            <EventCard imgUrl={'imgs/img3.jpeg'}/>
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
                            <SwiperSlide>
                                <NewsPreview />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview />
                            </SwiperSlide>
                            <SwiperSlide>
                                <NewsPreview />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </Container>
        </main>
    )
}

export default Home