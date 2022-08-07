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
                starRatedColor="rgb(250, 225, 112)"
                starEmptyColor="rgb(230, 229, 227)"
                starSpacing="0.5px"
                name="rating"
            />
    )
};

export default RatingStars;