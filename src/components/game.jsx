import React from 'react';
import {Link} from 'react-router-dom';
import { resize } from '../utils/resize';
import RatingStars from './ratingStars';

const Game = ({name, released, id, image, rating, ratingTop}) => {

    return(
        <div className="game-card">
            <Link to={`/detail/${id}`}>
                <img src={resize(image, 1280)} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    {released && 
                        <span>{released}</span>
                    }
                    {rating && ratingTop &&
                        <span>
                            <RatingStars rating={rating} ratingTop={ratingTop}/>
                        </span>
                    }
                </div>
            </Link>
        </div>
    )
};

export default Game;