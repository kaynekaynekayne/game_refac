import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Load from '../components/load';
import { fetchGamesByGenre } from '../features/genreSlice';
import { resize } from '../utils/resize';

const Genres = () => {

    const {type}=useParams();
    const dispatch=useDispatch();

    const {gamesByGenre, loading}=useSelector(state=>state.genre);
    
    useEffect(()=>{
        dispatch(fetchGamesByGenre(type))
    },[type, dispatch]);

    return (
        <div>
            {loading ? <Load /> :
            gamesByGenre.map(game=>
                <div key={game.id}>
                    <span>{game.name}</span>
                    <img src={resize(game.background_image, 1280)} alt={game.name}/>
                </div>
            )}
        </div>
    );
};

export default Genres;