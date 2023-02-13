import React from 'react';
import {Outlet} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AccountMenu from '../pages/account/AccountMenu';

const AccountLayout = () => {
  return (
    <main className="account">
      <Container>
        <section className="">
          <Row className='gx-0'>
            <Col xs={12} lg={3}>
              <AccountMenu />
            </Col>
            <Col xs={12} lg={9}>
              <Outlet />
            </Col>
          </Row>
        </section>
      </Container>
  </main>
  );
};

export default AccountLayout;