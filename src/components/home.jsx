import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../features/gameSlice';
import { GAME_POP_URL } from '../api';

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, loading}=useSelector(state=>state.games);

    useEffect(()=>{
        dispatch(fetchGames(GAME_POP_URL))
    },[]);

    return(
        <div>
            {loading ? <div>loading...</div> : (
                popular.map(pop=>(<div key={pop.id}>{pop.name}</div>))
            ) 
        }
        </div>
    )
};

export default Home;