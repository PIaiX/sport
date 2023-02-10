import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddEvent = () => {
  return (
    <section className='account-box'>
      <h1>Создание мероприятия</h1>
      <form action="">
        <fieldset>
          <legend>Основное</legend>
          <h5>Название</h5>
          <input type="text" className='mb-3' placeholder='Название'/>
          <h5>Место проведения</h5>
          <input type="text" className='mb-3' placeholder='Место проведения'/>
          <h5>Начало мероприятия</h5>
          <input type="datetime-local" className='mb-3' placeholder='Начало мероприятия'/>
          <h5>Ранняя регистрация</h5>
          <Row md={2} className='mb-3'>
            <Col className='d-flex align-items-center'>
              <span className='fw-6 me-3'>с</span>
              <input type="datetime-local"/>
            </Col>
            <Col className='d-flex align-items-center'>
              <span className='fw-6 me-3'>по</span>
              <input type="datetime-local"/>
            </Col>
          </Row>
          <h5>Стандартная регистрация</h5>
          <Row md={2} className='mb-3'>
            <Col className='d-flex align-items-center'>
              <span className='fw-6 me-3'>с</span>
              <input type="datetime-local"/>
            </Col>
            <Col className='d-flex align-items-center'>
              <span className='fw-6 me-3'>по</span>
              <input type="datetime-local"/>
            </Col>
          </Row>
          <h5>Поздняя регистрация</h5>
          <Row md={2} className='mb-3'>
            <Col className='d-flex align-items-center'>
              <span className='fw-6 me-3'>с</span>
              <input type="datetime-local"/>
            </Col>
            <Col className='d-flex align-items-center'>
              <span className='fw-6 me-3'>по</span>
              <input type="datetime-local"/>
            </Col>
          </Row>
        </fieldset>
        <fieldset>
          <legend>Информация</legend>
          <textarea rows="10"></textarea>
        </fieldset>
        <fieldset>
          <legend>Участники</legend>

          <h4>Турнирная таблица</h4>
        </fieldset>
      </form>
    </section>
  );
};

export default AddEvent;