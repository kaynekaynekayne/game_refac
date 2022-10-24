import React from 'react';
import StarRatings from 'react-star-ratings';

const RatingStars = ({rating, ratingTop}) => {

    return(
        <StarRatings 
            rating={rating}
            numberOfStars={ratingTop}
            starDimension="1.2rem"
            starRatedColor="rgb(250, 225, 112)"
            starEmptyColor="rgb(230, 229, 227)"
            starSpacing="0.5px"
            name="rating"
        />
    )
};

export default RatingStars;