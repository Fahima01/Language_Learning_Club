import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import LeftsideBody from '../RightSidebody.js/LeftsideBody';
import RightSideNav from '../Right_side_nav/RightSideNav';

const Category = () => {
    const courses = useLoaderData([])
    return (
        <div>
            {/* <h1>category {courses.length}</h1>
            {
                courses.map(course => <p key={course.id}>
                    <Link >{courses.title}</Link>
                </p>)
            } */}
            {/* <Container>
                <Row>
                    <Col xs={12} md={12} sm={12} lg='8' >
                        <LeftsideBody></LeftsideBody>
                    </Col>
                    <Col xs={12} md={12} sm={12} lg='4' >
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>

            </Container> */}
        </div>
    );
};

export default Category;