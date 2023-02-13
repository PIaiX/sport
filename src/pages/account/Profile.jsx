import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import { RiCloseLine } from "react-icons/ri";

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
        <Row className='gx-4 gx-xxl-5'>
          <Col md={6}>
            <fieldset>
              <legend className='mb-0'>Основная информация</legend>
              <Row className='gx-4 gy-3 align-items-center'>
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
              </Row>
            </fieldset>
          </Col>
          <Col md={6}>
            <fieldset>
              <legend className='mb-0'>Настройки аккаунта</legend>
              <Row className='gx-4 gy-3 align-items-center'>
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
              <label className='mt-3'>
                <input type="checkbox"/>
                <span>Скрыть профиль</span>
              </label>
              <p className='fs-08 achromat-3 mt-2'>Этот параметр скрывает вашу общедоступную страницу профиля, однако ваше имя по-прежнему будет отображаться в списке результатов мероприятий, в которых вы участвовали.</p>
              <button type='button' className='btn-5 mt-3'>Удалить аккаунт</button>
            </fieldset>
          </Col>
          <Col xs={12} xl={6}>
            <fieldset>
              <legend className='mb-0'>Ваши параметры</legend>
              <Row className='gx-4 gy-3 align-items-center'>
                <Col md={12}>
                  <p className='mb-1'>Дата рождения</p>
                  <Row xs={1} sm={3} className="gy-2 gy-sm-0 gx-1">
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
          </Col>
          <Col md={6}>
            <fieldset>
              <legend>Уровни пояса/навыков</legend>
              <ul className='list-info mb-4'>
                <li>
                  <h6>Дисциплина</h6>
                  <p>Пояс</p>
                </li>
                <li>
                  <h6>Дисциплина</h6>
                  <p>Пояс</p>
                </li>
              </ul>
              <button type='button' className='btn-4 mb-4'>добавить пояс/навык</button>
            </fieldset>
          </Col>
          <Col md={6}>
            <fieldset>
              <legend>Ваши команды</legend>
              <ul className='list-info mb-4'>
                <li>
                  <h6>Название команды</h6>
                  <button type='button' className='red fs-11'><RiCloseLine/></button>
                </li>
                <li>
                  <h6>Название команды</h6>
                  <button type='button' className='red fs-11'><RiCloseLine/></button>
                </li>
              </ul>
              
              <h5>Вступить в команду</h5>
              <Select
                name="sex"
                placeholder="Выберите команду"
                classNamePrefix="simple-select"
                className="simple-select-container borderless w-100"
                options={sexList}
              />
              <div className="d-flex mt-3">
                <button type='button' className='btn-1'>Вступить</button>
                <button type='button' className='btn-4 ms-4'>Создать</button>
              </div>

            </fieldset>
          </Col>
          <Col xs={12} xl={6}>
            <fieldset>
              <legend className='mb-0'>Контакты</legend>
              <Row className='gx-4 gy-3 align-items-center'>
                <Col md={3}>
                  Телефон
                </Col>
                <Col md={9}>
                  <input type="tel" placeholder='Телефон'/>
                </Col>
                <Col md={3}>
                  Адрес
                </Col>
                <Col md={9}>
                  <input type="text" placeholder='Адрес'/>
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
                <Col md={3}>
                  Регион
                </Col>
                <Col md={9}>
                  <input type="text" placeholder='Регион'/>
                </Col>
              </Row>
            </fieldset>
          </Col>
        </Row>
        <button type='submit' className='btn-1'>Сохранить</button>
      </form>
    </section>
  );
};

export default Profile;