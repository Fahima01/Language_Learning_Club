import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../slider-img/slider-1.jpg';
import img2 from '../../slider-img/slider-2.jpg';
import img3 from '../../slider-img/slider-3.jpg';

import Card from 'react-bootstrap/Card';



const Home = () => {
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item interval={1000}>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-center' style={{ backgroundImage: 'url("https://www.gofluent.com/blog/wp-content/uploads/2017/10/Advantages-of-Language-Training-Rectangle.jpg")', backgrondPosition: 'center center', backgroundSize: 'cover', height: '90vh' }}>
                        <h1 className='text-white '>Best language learning Platform </h1>
                        <p className='w-50 text-white '>It takes only 10 minutes a day to learn on Learning language club. With lessons that are grounded in real-life conversations. </p>
                        <Button style={{ backgroundColor: 'rgb(255, 58, 45)', borderRadius: '30px', padding: '8px 15px', border: 'none' }} >Our courses</Button>

                    </div>
                </Carousel.Item >
                <Carousel.Item interval={500}>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-center' style={{ backgroundImage: 'url("https://cdn.nbyula.com/public/613b4f52bfb63300e0b8fded/497-e1453684438903-768x433-500x500.jpeg")', backgrondPosition: 'center center', backgroundSize: 'cover', height: '90vh' }}>
                        <h1 className='text-white '>Best tools for self-studying</h1>
                        <p className='w-50 text-white '>One of the best tools for self-studying, Ling features interactive lessons that cater to learners of all proficiency levels. </p>
                        <Button style={{ backgroundSize: 'cover', backgroundColor: 'rgb(255, 58, 45)', borderRadius: '30px', padding: '8px 15px', border: 'none' }} >Our courses</Button>

                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='w-100 d-flex flex-column justify-content-center align-items-center text-center' style={{ backgroundSize: 'cover', backgroundImage: 'url("https://miro.medium.com/max/1000/1*0_lexK6paPtwHCJGGAiZtA.jpeg")', backgrondPosition: 'center-center', backgroundRepeat: 'no-repeat', height: '90vh' }}>
                        <h1 className='text-white '>Best resource for grammar</h1>
                        <p className='w-50 text-white '>One of the most popular language learning apps, we provides a free, fun, and effective way to learn languages.</p>
                        <Button style={{ backgroundColor: 'rgb(255, 58, 45)', borderRadius: '30px', padding: '8px 15px', border: 'none' }} >Our courses</Button>

                    </div>
                </Carousel.Item>
            </Carousel>
            <div>

                <Container className='my-5'>
                    <Row>
                        <Col xs={12} md={6} sm={12} lg='4'>
                            <img className='w-100 h-100 rounded' src={img1} alt="" />


                        </Col>
                        <Col xs={12} md={6} sm={12} lg='8'>
                            <p >ABOUT OUR UNIVERSITY</p>
                            <h2>Take A Tour</h2>
                            <p>Donec rutrum ut nunc in faucibus. Nulla facilisi. Praesent fringilla sapien vitae sollicitudin pellentesque. Nam pharetra mauris eget dolor ultrices condimentum.

                                Morbi ac nisl dolor. Nam luctus accumsan diam, quis varius dolor rhoncus eget. Nunc malesuada dignissim volutpat. Nunc eu tincidunt mi, eu dapibus elit.</p>
                            <ul>
                                <li>Education is extremely important because you overcome superstitions.</li>
                                <li>Education is extremely important because you overcome superstitions.</li>
                                <li>Education is extremely important because you overcome superstitions.</li>
                            </ul>
                            <Button style={{ backgroundColor: 'rgb(255, 58, 45)', borderRadius: '30px', padding: '8px 15px', border: 'none' }} >About us</Button>
                        </Col>

                    </Row>

                </Container>

                <div>
                    <h1 className='text-center py-5'>Our Popular Courses</h1>
                    <div>
                        <Container>
                            <Row>
                                <Col xs={12} md={12} sm={12} lg='4' >
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={img2} alt="Card image" />
                                        <Card.ImgOverlay style={{ backgroundColor: 'rgba(24, 24, 24, 0.55)' }}>
                                            <Card.Title>English Language Course</Card.Title>

                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col xs={12} md={12} sm={12} lg='4' >
                                    <Card className="bg-dark text-white">
                                        <Card.Img src={img3} alt="Card image" />
                                        <Card.ImgOverlay style={{ backgroundColor: 'rgba(24, 24, 24, 0.55)' }}>
                                            <Card.Title>French Language Course</Card.Title>

                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col xs={12} md={12} sm={12} lg='4' >
                                    <Card className=" bg-dark text-white">
                                        <Card.Img src={img1} alt="Card image" />
                                        <Card.ImgOverlay style={{ backgroundColor: 'rgba(24, 24, 24, 0.55)' }}>
                                            <Card.Title>Korean language Cousre</Card.Title>

                                            <Card.Text>Last updated 3 mins ago</Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>

                            </Row>
                        </Container>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;