import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../features/gameSlice';
import { GAME_POP_URL, GAME_UP_URL, GAME_NEW_URL } from '../api';
import Game from './game';

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, upComing, newGames, loading}=useSelector(state=>state.games);
    useEffect(()=>{
        dispatch(fetchGames(GAME_POP_URL))
        dispatch(fetchGames(GAME_NEW_URL))
        dispatch(fetchGames(GAME_UP_URL))
    },[dispatch]);


    return(
        <div>
            {loading ? <div>loading...</div> : (
                <div>
                    <h2>Popular games</h2>
                    {popular.map(item=>
                        <Game 
                            name={item.name}
                            released={item.released}
                            id={item.id} 
                            image={item.background_image}
                            key={item.id}
                        />
                    )} 

                    <h2>Upcoming games</h2>
                    {upComing.map(item=>
                        <Game 
                            name={item.name}
                            released={item.released}
                            id={item.id} 
                            image={item.background_image}
                            key={item.id}
                        />
                    )} 

                    <h2>Latest games</h2>
                    {newGames.map(item=>
                        <Game 
                            name={item.name}
                            released={item.released}
                            id={item.id} 
                            image={item.background_image}
                            key={item.id}
                        />
                    )} 
                    
                </div>
            )}
        </div>
    )
};

export default Home;