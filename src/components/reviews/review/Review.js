import React from 'react';
import { Col } from 'react-bootstrap';
import './Reviwe.css'
const Review = ({ review }) => {
    const {name, comment, picture} = review
    console.log(name)
    return (
            <Col sm={12} md={6}>
                <img className='reviewer-img' src={picture} alt="" />
                <h4>{name}</h4>
                <p>{comment}</p>
            </Col>
    );
};

export default Review;