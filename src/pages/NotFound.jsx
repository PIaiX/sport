import React from 'react'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom'
import { FcSportsMode } from "react-icons/fc"

const NotFound = () => {
  return (
    <main>
      <Container>
        <section className='not-found py-4 py-md-5'>
          <h1>404</h1>
          <hr />
          <div>
            <h2 className='mb-4'>Страница не найдена</h2>
            <div className="d-flex">
              <p className='fs-13'>Рекомендуем Вам вернуться <br/>на главную страницу...</p>
              <FcSportsMode className='fs-40 ms-4'/>
            </div>
            <Link to="/" className='btn-3 fs-11 mt-4 mx-auto mx-md-0'>Перейти на главную</Link>
          </div>
        </section>
      </Container>
    </main>
  )
}

export default NotFound