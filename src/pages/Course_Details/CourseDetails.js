import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import RightSideNav from '../Shared/Right_side_nav/RightSideNav';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { id, title, rating, total_student, image_url, details } = courseDetails;
    return (
        <div>

            <Container>
                <Row>
                    <Col xs={12} md={12} sm={12} lg='8' >
                        <CardGroup>

                            <Card className='card shadow-lg' >
                                <Card.Header>


                                </Card.Header>
                                <Card.Img className='detail-card-img' variant="top" src={image_url} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                </Card.Body>
                                <Card.Text className='p-3'>

                                    <p>{details}</p>

                                </Card.Text>
                                <Card.Footer className='py-3'>
                                    <div className='d-flex justify-content-evenly align-items-center'>
                                        <p className='d-flex justify-content-evenly align-items-center'>
                                            <span className='me-2 text-warning'><FaStar></FaStar> </span> {rating.number} </p>
                                        <p>Total View: <span className='text-info'> {total_student} </span></p>


                                    </div>

                                </Card.Footer>
                            </Card>
                        </CardGroup>
                    </Col>
                    <Col xs={12} md={12} sm={12} lg='4' >
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CourseDetails;