import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-dark py-5 mt-5 text-white h-100 d-flex justify-content-around align-items-center'>
            <Row>
                <Col xs={12} md={4}>
                    <h3>Language Learning Club</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sunt?</p>
                </Col>
                <Col xs={12} md={4}>
                    <ul>
                        <Link> <p> Home</p></Link>
                        <Link> <p> Courses</p></Link>
                        <Link> <p> Blog</p></Link>
                        <Link> <p> FAQ</p></Link>

                    </ul>
                </Col >
                <Col xs={12} md={4}>

                    Follow us:

                </Col>
            </Row>
        </div>
    );
};

export default Footer;