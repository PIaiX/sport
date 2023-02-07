import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Registration = () => {
  return (
    <main>
      <Container>
        <section className='py-4 py-md-5'>
          <div className="d-flex align-items-baseline justify-content-center">
            <h1>Регистрация</h1>
            <span className='fs-20 mx-3'>/</span>
            <h3><Link to='/login' className='link bb-dot'>Вход</Link></h3>
          </div>
          
          <form action="" className='form-login'>
            <input className='mb-3' type="text" placeholder='Имя'/>
            <input className='mb-3' type="text" placeholder='Фамилия'/>
            <div className="d-flex mb-3">
              <input className='flex-1' type="tel" placeholder='+7 900 000 00 00'/>
              <button type='button' className='btn-3 ms-1 ms-sm-3'>Выслать код</button>
            </div>
            <input className='mb-3' type="text" placeholder='код'/>
            <input className='mb-3' type="email" placeholder='email'/>
            <input className='mb-3' type="password" placeholder='пароль' />
            <input className='mb-3' type="password" placeholder='подтвердите пароль' />
            <button type='button' className='btn-1 w-100'>Зарегистрироваться</button>
            <label className='mt-3'>
              <input type="checkbox" defaultChecked={true} />
              <span className='color-main'>Я даю своё согласие на обработку персональных данных</span>
            </label>
          </form>
        </section>
      </Container>
    </main>
  );
};

export default Registration;