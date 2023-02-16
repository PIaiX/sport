import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import TournamentBracket from '../../components/TournamentBracket';
import ParticipantControl from '../../components/utils/ParticipantControl';

const sportsList = [
  {value: '1', label: '1'},
  {value: '2', label: '2'},
  {value: '3', label: '3'},
];
const sexList = [
  {value: 'male', label: 'Мужской'},
  {value: 'female', label: 'Женский'},
];

const AddEvent = () => {
  return (
    <section className='account-box'>
      <h1>Создание мероприятия</h1>
      <form action="">
        <fieldset>
          <legend>Основное</legend>
          <Row className='gx-4 gx-xl-5'>
            <Col md={5}>
              <h5>Дисциплина</h5>
              <Select
                name="sport"
                placeholder="Дисциплина"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100 mb-3"
                options={sportsList}
              />
              <h5>Название</h5>
              <input type="text" className='mb-3' placeholder='Название'/>
              <h5>Место проведения</h5>
              <input type="text" className='mb-3' placeholder='Место проведения'/>
              <h5>Начало мероприятия</h5>
              <input type="datetime-local" className='mb-3' placeholder='Начало мероприятия'/>
            </Col>
            <Col md={7}>
              <h5>Ранняя регистрация</h5>
              <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                <Col className='d-flex align-items-center'>
                  <span className='fw-6 me-4 me-sm-3'>с</span>
                  <input type="datetime-local"/>
                </Col>
                <Col className='d-flex align-items-center'>
                  <span className='fw-6 me-3'>по</span>
                  <input type="datetime-local"/>
                </Col>
              </Row>
              <h5>Стандартная регистрация</h5>
              <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                <Col className='d-flex align-items-center'>
                  <span className='fw-6 me-4 me-sm-3'>с</span>
                  <input type="datetime-local"/>
                </Col>
                <Col className='d-flex align-items-center'>
                  <span className='fw-6 me-3'>по</span>
                  <input type="datetime-local"/>
                </Col>
              </Row>
              <h5>Поздняя регистрация</h5>
              <Row sm={2} className='gy-2 gy-sm-0 mb-3'>
                <Col className='d-flex align-items-center'>
                  <span className='fw-6 me-4 me-sm-3'>с</span>
                  <input type="datetime-local"/>
                </Col>
                <Col className='d-flex align-items-center'>
                  <span className='fw-6 me-3'>по</span>
                  <input type="datetime-local"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </fieldset>
        <fieldset>
          <Row xs={1} md={2}>
            <Col className='mb-3 mb-md-0'>
              <legend>Информация</legend>
              <textarea rows="14" placeholder='Описание мероприятия'></textarea>
            </Col>
            <Col>
              <h5>Весовая категория</h5>
              <Select
                name="weight"
                placeholder="Весовая категория"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100 mb-3"
                options={sportsList}
              />
              <h5>Пол</h5>
              <Select
                name="sex"
                placeholder="Пол"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100 mb-3"
                options={sexList}
              />
              <h5>Возраст</h5>
              <Select
                name="weight"
                placeholder="Возраст"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100 mb-3"
                options={sportsList}
              />
              <h5>Разряд</h5>
              <Select
                name="weight"
                placeholder="Разряд"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100 mb-3"
                options={sportsList}
              />
            </Col>
          </Row>
        </fieldset>

        <fieldset>
          <legend className='mb-0'>Участники</legend>
          <ul className='list-unstyled row row-cols-1 row-cols-md-2 g-2 g-sm-3 g-md-4'>
            <li>
              <ParticipantControl 
              approved={true}
              name={'Имя'} 
              surname={'Фамилия'} 
              town={'Город'} 
              birth={'01.01.2001'}/>
            </li>
            <li>
              <ParticipantControl 
              approved={true}
              name={'Имя'} 
              surname={'Фамилия'} 
              town={'Город'} 
              birth={'01.01.2001'}/>
            </li>
            <li>
              <ParticipantControl 
              approved={true}
              name={'Имя'} 
              surname={'Фамилия'} 
              town={'Город'} 
              birth={'01.01.2001'}/>
            </li>
          </ul>
        </fieldset>

        <fieldset>
          <legend>Турнирная таблица</legend>
          <button type='button' className='btn-4 mb-4'>Сформировать</button>

          <TournamentBracket/>
        </fieldset>
      </form>
    </section>
  );
};

export default AddEvent;