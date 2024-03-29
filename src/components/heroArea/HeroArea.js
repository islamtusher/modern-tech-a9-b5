import React from 'react';
import './HeroArea.css'
import { Carousel, Col, Row } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <div className='hero-area'>
            <Row>
                {/* banner laft */}
                <Col sm={12} lg={8} className="d-flex  align-items-center">
                    <div className="banner-title  ">
                        <h1 className='title'>PICK-UP YOUR MODERN DREAM TECHNOLOGY</h1>
                        <p className=''>
                        A racecar-style gaming chair that provides luxury and comfort, whether it's used for intense gaming sessions and climbing to the top of the leaderboards, or long work days. When perusing for the best gaming chair, you should always make sure that it will take care of your Body
                        </p>
                        <button className='bannen-btn' type="submit">Pick Up</button>
                    </div>
                </Col>
                {/* banner right */}
                <Col sm={12} lg={4} className=" d-flex align-items-center justify-content-center">
                   <div className='carousel '>
                        <Carousel controls={false}>
                            <Carousel.Item interval={1000} >
                                <img
                                className="banner-img img-fluid"
                                src="images/c1.png"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                        
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <img
                                className="banner-img  img-fluid"
                                src="images/c2.png"
                                alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        
                                    </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="banner-img  img-fluid"
                                src="images/c3.png"
                                alt="Third slide"
                                />
                                <Carousel.Caption>
                                        
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>                  
                </Col>
           </Row>
        </div>
    );
};

export default HeroArea;