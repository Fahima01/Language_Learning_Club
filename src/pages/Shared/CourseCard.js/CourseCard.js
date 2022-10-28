import React from 'react';
import { Button, CardGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './CourseCard.css';
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
    const { id, title, rating, total_student, image_url, details } = course;

    return (
        <div >


            <CardGroup>

                <Card className='card shadow-lg' >
                    <Card.Img className='card-img' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <Card.Text className='p-3'>
                        {
                            details.length > 100 ?
                                <p> {details.slice(0, 100) + '...'} </p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                    <Card.Footer className='py-3'>
                        <div className='d-flex justify-content-evenly align-items-center'>
                            <p className='d-flex justify-content-evenly align-items-center'>
                                <span className='me-2 text-warning'><FaStar></FaStar> </span> {rating.number} </p>
                            <p>Total View: <span className='text-info'> {total_student} </span></p>

                            <Button><Link className='text-white' to={`/course/${id}`}> Go to Article  </Link></Button>
                        </div>

                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    );
};

export default CourseCard;