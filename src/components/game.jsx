import React from 'react';
import {Link} from 'react-router-dom';
import { resize } from '../utils/resize';

const Game = ({name, released, id, image}) => {

    return(
        <div className="game-card">
            <Link to={`/detail/${id}`}>
                <img src={resize(image, 1280)} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <span>{released}</span>
                </div>
            </Link>
        </div>
    )
};

export default Game;