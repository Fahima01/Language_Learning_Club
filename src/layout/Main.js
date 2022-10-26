import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Main = () => {
    return (

        <Container>

            <Row>
                <Col xs={12} md={8} sm={8}>
                    <Outlet></Outlet>
                    <h2 className=''>This is main conetent container</h2>
                </Col>
                <Col xs={6} md={4} sm={4}>
                    <h2>This is sidebar container</h2>
                </Col>
            </Row>
        </Container>

    );
};

export default Main;