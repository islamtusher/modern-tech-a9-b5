import React from 'react';
import { Col } from 'react-bootstrap';
import './Reviwe.css'
const Review = ({ review }) => {
    const {name, comment, picture} = review
    console.log(name)
    return (
        <Col className='review-col' sm={12} lg={6}>
            <div className='review-cart'>
                <img className='reviewer-img' src={picture} alt="" />
                <h4>{name}</h4>
                <p>{comment}</p>
            </div>
        </Col>
    );
};

export default Review;