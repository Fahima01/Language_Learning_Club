import React from 'react';
import { Card, CardGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import RightSideNav from '../Shared/Right_side_nav/RightSideNav';

const CourseDetails = () => {
    const courseDetails = useLoaderData()
    const { id, title, rating, total_student, image_url, details, mentor } = courseDetails;
    return (
        <div>

            <Container>
                <Row>
                    <Col xs={12} md={12} sm={12} lg='8' >
                        <CardGroup className='mt-5'>

                            <Card className='card shadow-lg' >
                                <Card.Header className='d-flex justify-content-between align-items-center'>

                                    <div className='d-flex'>
                                        <div>
                                            <Image
                                                roundedCircle
                                                className='me-2 '
                                                src={mentor.img}
                                                style={{ height: '50px', width: '50px' }}
                                            ></Image>
                                        </div>
                                        <div>
                                            <p>{mentor.name}</p>
                                            <p>{mentor.published_date}</p>
                                        </div>
                                    </div>

                                    <div className='d-flex'>
                                        <p className='me-3 '>
                                            <span className='me-2 text-warning'><FaStar></FaStar> </span> {rating.number} </p>
                                        <p className='fw-bold'>Total View: <span className='text-info'> {total_student} </span></p>
                                    </div>

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