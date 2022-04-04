import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useReviews from '../../customHooks/useReviews';
import Review from './review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    // useEffect(() => {
    //     fetch('fakeData.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // },[])
    return (
        <div>
            <h1>Reviews</h1>
            <div className="reviews ">
                <Row>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Reviews;