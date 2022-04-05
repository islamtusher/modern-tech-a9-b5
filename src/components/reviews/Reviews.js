import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../customHooks/useReviews';
import Review from './review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div className="reviews">
            <Container>
                <div >
                    <Row className=''>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Reviews;