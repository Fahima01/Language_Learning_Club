import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from '../Shared/Right_side_nav/RightSideNav';
import { Outlet } from 'react-router-dom';

const LanguageCourses = () => {


    return (

        <div>


            <Row>
                <Col xs={12} md={12} sm={12} lg='8' >
                    <Outlet></Outlet>
                </Col>
                <Col xs={12} md={12} sm={12} lg='4' >
                    <RightSideNav></RightSideNav>
                </Col>
            </Row>

        </div>
    );
};

export default LanguageCourses;