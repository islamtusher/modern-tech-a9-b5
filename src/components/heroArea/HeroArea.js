import React from 'react';
import './HeroArea.css'
import { Carousel } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <div className='d-flex align-items-center my-5'>
            <div className="banner-title w-50">
                <h1>PICK-UP YOUR MORDERN DREAM TECHNOLOGY</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate atque consectetur pariatur neque adipisci nemo id unde necessitatibus debitis quam?
                </p>
                <button className='py-2 px-3' type="submit">Pick Up</button>
            </div>
            <div className="banner-slides w-50">
                <div className='carousel'>
                <Carousel controls={false}>
                    <Carousel.Item interval={1000} >
                        <img
                        className="banner-img d-block w-100 h-100 img-fluid"
                        src="images/c1.jpg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                                
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="banner-img d-block w-100 h-100 img-fluid"
                        src="images/c2.jpg"
                        alt="Second slide"
                            />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner-img d-block w-100 h-100 img-fluid"
                        src="images/c3.jpg"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                                
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;