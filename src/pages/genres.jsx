import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Game from '../components/game';
import Load from '../components/load';
import { fetchGamesByGenre} from '../features/genreSlice';
import { resize } from '../utils/resize';

const Genres = () => {

    const {type}=useParams();
    const dispatch=useDispatch();

    const {gamesByGenre, loading}=useSelector(state=>state.genre);
    
    useEffect(()=>{
        dispatch(fetchGamesByGenre(type))
    },[type, dispatch]);

    return (
        <div className="genre-container" >
            <h2>{`${type} games`}</h2>
            {loading ? <Load /> :
            <div className="games">
                {gamesByGenre.map(game=>(
                    <Game 
                        name={game.name}
                        released={game.released}
                        id={game.id} 
                        image={game.background_image}
                        key={game.id}
                    />
                ))}
            </div>
            }
        </div>
    );
};

export default Genres;