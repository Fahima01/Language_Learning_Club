import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark py-5 mt-5 text-white h-100 d-flex justify-content-around align-items-center'>
            <Row>
                <Col xs={12} md={4}>
                    <h4>Language Learning Club</h4>
                    <p>Active learning through gamified lessons that make you want to keep advancing to the next level</p>
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
                    <FaFacebook className='fs-3 ms-3'></FaFacebook>
                    <FaInstagram className='fs-3 ms-3'></FaInstagram>
                    <FaTwitter className='fs-3 ms-3'></FaTwitter>


                </Col>
            </Row>
        </div>
    );
};

export default Footer;