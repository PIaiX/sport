import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';

const sexList = [
  {value: 'male', label: 'Мужской'},
  {value: 'female', label: 'Женский'},
];
const daysList = [
  {value: '1', label: '1'},
  {value: '2', label: '2'},
  {value: '3', label: '3'},
];
const monthsList = [
  {value: '1', label: '1'},
  {value: '2', label: '2'},
  {value: '3', label: '3'},
];
const yearsList = [
  {value: '2001', label: '2001'},
  {value: '2002', label: '2002'},
  {value: '2003', label: '2003'},
];

const Profile = () => {
  return (
    <section className='account-box'>
      <h1>Личные данные</h1>
      <form action="">
        <fieldset>
          <legend>Настройки</legend>
          <Row className='g-4'>
            <Col md={3}>
              Имя
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Имя'/>
            </Col>
            <Col md={3}>
              Фамилия
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Фамилия'/>
            </Col>
            <Col md={3}>
              Отчество
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Отчество'/>
            </Col>
            <Col md={3}>
              Email
            </Col>
            <Col md={9}>
              <input type="email" placeholder='Email'/>
            </Col>
            <Col md={3}>
              Пароль
            </Col>
            <Col md={9}>
              <input type="password" placeholder='Пароль'/>
            </Col>
          </Row>
        </fieldset>
        <fieldset>
          <legend>Ваши параметры</legend>
          <Row className='g-4'>
            <Col md={3}>
              Пол
            </Col>
            <Col md={9}>
              <Select
                name="sex"
                placeholder="Пол"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100"
                options={sexList}
              />
            </Col>
            <Col md={3}>
              Дата рождения
            </Col>
            <Col md={9}>
              <Row xs={3}>
                <Col>
                  <Select
                    name="day"
                    placeholder="День"
                    classNamePrefix="simple-select"
                    className="simple-select-container borderless w-100"
                    options={daysList}
                  />
                </Col>
                <Col>
                  <Select
                    name="month"
                    placeholder="Месяц"
                    classNamePrefix="simple-select"
                    className="simple-select-container borderless w-100"
                    options={monthsList}
                  />
                </Col>
                <Col>
                  <Select
                    name="year"
                    placeholder="Год"
                    classNamePrefix="simple-select"
                    className="simple-select-container borderless w-100"
                    options={yearsList}
                  />
                </Col>
              </Row>
            </Col>
            <Col md={3}>
              Рост, см.
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Рост'/>
            </Col>
            <Col md={3}>
              Вес, кг.
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Вес'/>
            </Col>
          </Row>
        </fieldset>
        <fieldset>
          <legend>Контакты</legend>
          <Row className='g-4'>
            <Col md={3}>
              Телефон
            </Col>
            <Col md={9}>
              <input type="tel" placeholder='Телефон'/>
            </Col>
            <Col md={3}>
              Город
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Город'/>
            </Col>
            <Col md={3}>
              Район
            </Col>
            <Col md={9}>
              <input type="text" placeholder='Район'/>
            </Col>
            
          </Row>
        </fieldset>
        <fieldset>
          <legend></legend>
        </fieldset>
      </form>
    </section>
  );
};

export default Profile;