// custom hook for load and share data 
import { useEffect, useState } from "react";

const useReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('./fakeData/reviewsData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    
    return [reviews, setReviews]
};

export default useReviews;