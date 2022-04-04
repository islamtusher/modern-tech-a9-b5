import React from 'react';
import './Home.css'
import { Container, Row } from 'react-bootstrap';
import HeroArea from '../heroArea/HeroArea';
import Review from '../reviews/review/Review';
import useReviews from '../../customHooks/useReviews';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div className='home'>
            <Container>
                <HeroArea></HeroArea>
                <Row>
                {
                     reviews.slice(0,3).map(review => <Review key={review._id} review={review}></Review>)
                }
                </Row>
                <div className="reviews-btn">
                    <Link className='link' to={'/reviews'}>
                        Shomw All <FontAwesomeIcon className='ms-3' icon={faPaperPlane} />
                    </Link>                   
                    
                </div>
           </Container>
        </div>
    );
};

export default Home;