import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = () => {
    return (
        <main className='pb-4 pb-md-5'>
            <section className='about-top'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col xs={12} xl={9}>
                            <div className="box">
                                <h1>О нас</h1>
                                <p>RuChamp - это прорывное решение в IT-сфере.<br/><br/>

                                    ТОП - 10 лучших проектов в России.<br/><br/>

                                    Цифровая платформа для 89 субъектов Российской Федерации.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Container>
                <section className='about-plus mb-5'>
                    <h2>Наши преимущества</h2>
                    <ul className='list-unstyled row justify-content-center gy-4 gx-xxl-5'>
                        <li className="col-md-4 col-xl-3">
                            <div className="box-2">
                                <h4>
                                    <p>Уникальный IT проект, отсутствие аналогов во всем мире</p>
                                </h4>
                            </div>
                        </li>
                        <li className="col-md-4 col-xl-3">
                            <div className="box-3">
                                <h4>
                                    <p>Безупречная команда специалистов</p>
                                </h4>
                            </div>
                        </li>
                        <li className="col-md-4 col-xl-3">
                            <div className="box-4">
                                <h4>
                                    <p>Огромный потенциал развития в международном контексте</p>
                                </h4>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className='mb-5'>
                    <Row className='gy-4 gy-sm-5'>
                        <Col md={9}>
                            <h3>
                                <p>Цифровая платформа для занимающихся профессиональным, полупрофессиональным и
                                    любительским
                                    спортом, а также для проведения досуговых мероприятий с автоматизированной системой
                                    и
                                    единым реестром участников и спортсменов.
                                </p>
                            </h3>
                        </Col>
                        {/* <Col md={{ offset: 3, span: 9 }} className="text-end">
              <h3 className="text-end">Заголовок</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Col> */}
                    </Row>
                </section>

                <section className='about-partners'>
                    <h2 className='text-center'>Партнеры</h2>
                    <div className="about-partners-grid">
                        <img src="imgs/partners/Minsport_Emblem.png" alt="Minsport"/>
                        <img src="imgs/partners/Rosmolodez.png" alt="Rosmolodezhs" className='col-span-3'/>
                        <img src="imgs/partners/fdr.png" alt="fdr"/>
                        <img src="imgs/partners/Russian_Post.png" alt="Russian_Post" className='col-span-2'/>
                        <img src="imgs/partners/FRB.png" alt="FRB"/>
                        <img src="imgs/partners/fkr_logo.png" alt="fkr"/>
                        <img src="imgs/partners/project.png" alt="project" className='col-span-3'/>
                        <img src="imgs/partners/star.png" alt="star"/>
                        <img src="imgs/partners/tsr.png" alt="tsr"/>
                        <img src="imgs/partners/sbrf.png" alt="sbrf"/>
                        <img src="imgs/partners/intc.jpg" alt="intc"/>
                        <img src="imgs/partners/logo-mgu.png" alt="mgu"/>
                        <img src="imgs/partners/minfiz.jpg" alt="minfiz" className='col-span-3'/>
                    </div>
                </section>
            </Container>
        </main>
    )
}

export default About