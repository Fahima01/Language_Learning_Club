import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../Context/Authprovider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { providerLogin } = useContext(AuthContext)
    const { createUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGooglesignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(e => console.error(e));
    }
    return (
        <div className='bg-primary ' >
            <Row className='login-body ' >
                <Col></Col>
                <Col>

                    <Form className='bg-white p-5 rounded' onSubmit={handleSubmit}>
                        <h3 className='text-center pb-4'>Please Signup</h3>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Photo URL</Form.Label>
                            <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>
                        <div className='m-auto justify-content-center align-items-center'>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <p>or,</p>
                            <p> <button onClick={handleGooglesignIn} type="button" class="me-2 btn btn-outline-success">Signup with <FaGoogle></FaGoogle> </button>
                                <button type="button" class="btn btn-outline-secondary">Signup with <FaGithub></FaGithub> </button>


                            </p>
                        </div>

                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
                <Col></Col>
            </Row>

        </div>
    );
};

export default SignUp;