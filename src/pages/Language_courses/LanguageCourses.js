import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from '../Shared/Right_side_nav/RightSideNav';

const LanguageCourses = () => {


    return (

        <div style={{ backgroundColor: '#F4F4F4' }}>
            <Container className='py-5'  >
                <Row>
                    <Col sm={8} xs={12} md={8} lg={8}>

                    </Col>
                    <Col sm={4} xs={12} md={8} lg={4}>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default LanguageCourses;