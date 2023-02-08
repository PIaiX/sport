import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Login = () => {
  return (
    <main>
      <Container>
        <section className='py-4 py-md-5'>
          <div className="d-flex align-items-baseline justify-content-center">
            <h1>Вход</h1>
            <span className='fs-20 mx-3'>/</span>
            <h3><Link to='/registration' className='link bb-dot'>Регистрация</Link></h3>
          </div>
          
          <form action="" className='form-login'>
            <input className='mb-3' type="email" placeholder='email'/>
            <input className='mb-3' type="password" placeholder='пароль' />
            <Link to='/account' className='btn-1 w-100'>Войти</Link>
            <label className='mt-3'>
              <input type="checkbox" />
              <span className='color-main'>Запомнить меня</span>
            </label>
          </form>
        </section>
      </Container>
    </main>
  );
};

export default Login;