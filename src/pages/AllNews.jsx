import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NewsPreview from '../components/NewsPreview'
import NavPagination from '../components/NavPagination'

const AllNews = () => {
  return (
    <main>
      <Container className='py-4 py-md-5'>
        <h1>Статьи</h1>
        <Row xs={1} sm={2} md={3} xl={4} className="gx-3 gx-md-4 gy-4 gy-md-5">
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
          <Col>
            <NewsPreview/>
          </Col>
        </Row>
        <NavPagination />
      </Container>
    </main>
  )
}

export default AllNews