import React from 'react';
import {Link} from 'react-router-dom';
import AccEventPreview from '../../components/AccEventPreview';
import NavPagination from '../../components/NavPagination';

const AccEvents = () => {
  return (
    <section className='account-box'>
      <div className='d-sm-flex align-items-center justify-content-between mb-4 mb-sm-5'>
        <h1 className='mb-sm-0'>Мероприятия</h1>
        <Link to='add' className='btn-4'>Создать мероприятие</Link>
      </div>
      <h3>Текущие мероприятия</h3>
      <div className='event-preview top'>
        <div className='date'>Дата</div>
        <div className='img'>Фото</div>
        <div className='title'>Название мероприятия</div>
        <div className='role'>Роль</div>
        <div className='count'>Количество участников</div>
        <div className="btns"></div>
      </div>
      <ul className='g-3 g-xl-2 row row-cols-1 row-cols-sm-2 row-cols-xl-1 list-unstyled mb-4 mb-sm-5'>
        <li>
          <AccEventPreview date={'15.02.2023'} img={'imgs/img1.jpeg'} title={'Название мероприятия 1'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'23.02.2023'} img={'imgs/img2.jpeg'} title={'Название мероприятия 2'} role={2} count={18}/>
        </li>
        <li>
          <AccEventPreview date={'01.03.2023'} img={'imgs/img1.jpeg'} title={'Название мероприятия 3'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'07.03.2023'} img={'imgs/img2.jpeg'} title={'Название мероприятия 4'} role={2} count={18}/>
        </li>
        <li>
          <AccEventPreview date={'15.03.2023'} img={'imgs/img1.jpeg'} title={'Название мероприятия 5'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'22.03.2023'} img={'imgs/img2.jpeg'} title={'Название мероприятия 6'} role={2} count={18}/>
        </li>
        <li>
          <AccEventPreview date={'04.04.2023'} img={'imgs/img1.jpeg'} title={'Название мероприятия 7'} role={1} count={20}/>
        </li>
      </ul>

      <h3>Архивные мероприятия</h3>
      <div className='event-preview top'>
        <div className='date'>Дата</div>
        <div className='img'>Фото</div>
        <div className='title'>Название мероприятия</div>
        <div className='role'>Роль</div>
        <div className='count'>Количество участников</div>
        <div className="btns"></div>
      </div>
      <ul className='g-3 g-xl-2 row row-cols-1 row-cols-sm-2 row-cols-xl-1 list-unstyled mb-4 mb-sm-5'>
        <li>
          <AccEventPreview date={'15.01.2023'} img={'imgs/img1.jpeg'} title={'Название мероприятия 1'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'10.01.2023'} img={'imgs/img2.jpeg'} title={'Название мероприятия 2'} role={2} count={18}/>
        </li>
        <li>
          <AccEventPreview date={'21.12.2022'} img={'imgs/img1.jpeg'} title={'Название мероприятия 3'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'07.12.2022'} img={''} title={'Название мероприятия 4'} role={2} count={18}/>
        </li>
        <li>
          <AccEventPreview date={'13.11.2022'} img={'imgs/img1.jpeg'} title={'Название мероприятия 5'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'08.11.2022'} img={'imgs/img2.jpeg'} title={'Название мероприятия 6'} role={2} count={18}/>
        </li>
        <li>
          <AccEventPreview date={'30.10.2022'} img={'imgs/img1.jpeg'} title={'Название мероприятия 7'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'25.10.2022'} img={'imgs/img1.jpeg'} title={'Название мероприятия 7'} role={1} count={20}/>
        </li>
        <li>
          <AccEventPreview date={'01.10.2022'} img={'imgs/img1.jpeg'} title={'Название мероприятия 7'} role={1} count={20}/>
        </li>
      </ul>
      <NavPagination/>
    </section>
  );
};

export default AccEvents;