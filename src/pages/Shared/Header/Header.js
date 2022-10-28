import React, { useContext } from 'react';
import { Image, NavLink } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import img4 from '../../../slider-img/LanguageLA.png';
import { FaUser } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
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
                        <Nav.Link>

                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} type="button" className="btn btn-primary me-4">
                                            Log Out
                                        </Button>
                                    </>
                                    :
                                    <>

                                        <Button type="button" className="btn btn-primary me-4">
                                            <Link className='text-white' to='/login'>Login</Link>
                                        </Button>
                                        <Button type="button" className="btn btn-info">
                                            <Link className='text-white' to='/signup'>Signup</Link>
                                        </Button>
                                    </>
                            }

                        </Nav.Link>
                        <NavLink eventKey={2} >
                            {
                                user?.PhotoURL ?
                                    <Image
                                        style={{ height: '30px' }} roundedCircle
                                        src={user?.PhotoURL}>

                                    </Image>
                                    : <FaUser></FaUser>


                            }
                        </NavLink>

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;