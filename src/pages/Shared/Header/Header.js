import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img4 from '../../../slider-img/LanguageLA.png';


const Header = () => {
    return (
        <Navbar className='shadow-lg' bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" ><img style={{ maxHeight: '200px', width: '200px' }} src={img4} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontWeight: '700' }}
                        navbarScroll
                    >
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                    </Nav>

                    <Form className="d-flex">

                        <Button type="button" className="btn btn-primary me-4">Login</Button>
                        <Button type="button" className="btn btn-info">Signup</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;