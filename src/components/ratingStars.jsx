import React from 'react';
import StarRatings from 'react-star-ratings';
import { useSelector } from 'react-redux';

const RatingStars = (props) => {

    const {detailInfo}=useSelector(state=>state.detail);

    return(
        <div>
            <StarRatings 
                rating={detailInfo.rating}
                numberOfStars={5}
                starRatedColor="rgb(52,52,52)"
                starEmptyColor="lightgrey"
                starSpacing="0.3rem"
                name="rating"
            />
        </div>

    )
};

export default RatingStars;