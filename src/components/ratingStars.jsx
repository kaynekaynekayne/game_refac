import React from 'react';
import StarRatings from 'react-star-ratings';
import { useSelector } from 'react-redux';

const RatingStars = (props) => {

    const {detailInfo}=useSelector(state=>state.detail);

    return(
            <StarRatings 
                rating={detailInfo.rating}
                numberOfStars={detailInfo.rating_top}
                starDimension="1.2rem"
                starRatedColor="rgb(62,62,62)"
                starEmptyColor="lightgrey"
                starSpacing="0.5px"
                name="rating"
            />
    )
};

export default RatingStars;