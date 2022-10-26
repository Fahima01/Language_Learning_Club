import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from '../pages/Shared/Right_side_nav/RightSideNav';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
const Main = () => {
    return (

        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col xs={12} md={8} sm={12} lg='9' className='bg-primary' >
                        <Outlet></Outlet>
                        <h2>This is main conetent container</h2>
                    </Col>
                    <Col xs={12} md={4} sm={12} lg='3' className='bg-info' >
                        <h2>This is sidebar container</h2>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>

    );
};

export default Main;