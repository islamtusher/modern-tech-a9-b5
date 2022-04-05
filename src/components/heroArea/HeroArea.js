import React from 'react';
import './HeroArea.css'
import { Carousel } from 'react-bootstrap';

const HeroArea = () => {
    return (
        <div className='hero-area d-flex align-items-center '>
            <div className="banner-title w-50">
                <h1 className='title'>PICK-UP YOUR MORDERN DREAM TECHNOLOGY</h1>
                <p className=''>
                A racecar-style gaming chair that provides luxury and comfort, whether it's used for intense gaming sessions and climbing to the top of the leaderboards, or long work days. When perusing for the best gaming chair, you should always make sure that it will take care of your Body
                </p>
                <button className='bannen-btn' type="submit">Pick Up</button>
            </div>
            <div className="banner-slides w-50">
                <div className='carousel'>
                <Carousel controls={false}>
                    <Carousel.Item interval={1000} >
                        <img
                        className="banner-img d-block w-100 h-100 img-fluid"
                        src="images/c1.png"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                                
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                        className="banner-img d-block w-100 h-100 img-fluid"
                        src="images/c2.png"
                        alt="Second slide"
                            />
                            <Carousel.Caption>
                                
                            </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="banner-img d-block w-100 h-100 img-fluid"
                        src="images/c3.png"
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