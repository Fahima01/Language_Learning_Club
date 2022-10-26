import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Main = () => {
    return (

        <div>
            <Container>

                <Row>
                    <Col xs={12} md={8} sm={12} lg='9' className='bg-primary' >
                        <Outlet></Outlet>
                        <h2>This is main conetent container</h2>
                    </Col>
                    <Col xs={12} md={4} sm={12} lg='3' className='bg-info' >
                        <h2>This is sidebar container</h2>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default Main;