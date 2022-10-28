import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from '../Shared/Right_side_nav/RightSideNav';
import { Outlet } from 'react-router-dom';
import Category from '../Shared/category/Category';
import LeftsideBody from '../Shared/RightSidebody.js/LeftsideBody';

const LanguageCourses = () => {


    return (

        <div>
            <Container>
                <Row>
                    <Col xs={12} md={12} sm={12} lg='8' >
                        <LeftsideBody></LeftsideBody>
                    </Col>
                    <Col xs={12} md={12} sm={12} lg='4' >
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default LanguageCourses;