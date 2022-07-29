import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from '../features/gameSlice';

const Home = (props) => {

    const dispatch=useDispatch();
    const {popular, loading}=useSelector(state=>state.games);

    useEffect(()=>{
        // dispatch(fetchGames(에피아주소))
    },[]);

    return(
        <div>
            {loading && <div>loading...</div>}
        </div>
    )
};

export default Home;