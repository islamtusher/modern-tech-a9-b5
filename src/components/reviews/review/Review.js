import React from 'react';
import './Reviwe.css'
import Rating from 'react-rating';
import { Col } from 'react-bootstrap';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Review = ({ review }) => {
    const {name, comment, picture, rating} = review
    console.log(name)
    return (
        <Col className='review-col' sm={12} lg={4}>
            <div className='review-cart '>
                <img className='reviewer-img' src={picture} alt="" />
                <h4>{name}</h4>
                <p>{comment}</p>
                <Rating
                    initialRating={rating}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{color: 'goldenrod'}} icon={faStar} />}
                    readonly
                ></Rating>
            </div>
        </Col>
    );
};

export default Review;