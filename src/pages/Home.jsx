import React from 'react'
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import Banner from '../components/Banner'


const Home = () => {
    return (
        <main>
            <Container>
                <section className='py-5'>
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
                        <Banner/>
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
            </Container>
        </main>
    )
}

export default Home