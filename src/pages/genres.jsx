import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Genres = () => {

    const {type}=useParams();

    const {genreInfo}=useSelector(state=>state.genre);

    const selected=genreInfo.find(genre=>genre.id===parseInt(type))
    const {games}=selected;
    
    useEffect(()=>{

    },[type]);

    return (
        <div>
            {games.map(game=>(
                <div key={game.id}>
                    <span>{game.name}</span>
                    {/* <div></div> */}
                </div>
            ))}
        </div>
    );
};

export default Genres;