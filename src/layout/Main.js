import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightSideNav from '../pages/Shared/Right_side_nav/RightSideNav';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import LanguageCourses from '../pages/Language_courses/LanguageCourses';
const Main = () => {
    return (

        <div>
            <Header></Header>

            <Row>
                <Col xs={12} md={12} sm={12} lg='12' >
                    <Outlet></Outlet>

                </Col>

            </Row>

            <Footer></Footer>
        </div>

    );
};

export default Main;