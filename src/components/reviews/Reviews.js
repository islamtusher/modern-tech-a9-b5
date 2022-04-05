//user reviews components
import { Row } from 'react-bootstrap';
import useReviews from '../../customHooks/useReviews';
import Review from './review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    return (
        <div className="reviews mx-5">
            <div >
                <Row className=''>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Reviews;