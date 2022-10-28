import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='bg-primary ' >
            <Row className='login-body ' >
                <Col></Col>
                <Col>
                    <Form className='bg-white p-5 rounded' onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" required />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Form.Text className="text-danger">

                        </Form.Text>
                    </Form>
                </Col>
                <Col></Col>
            </Row>

        </div>


    )
};

export default Login;