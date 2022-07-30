import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../features/detailSlice';

const Game = ({name, released, id, image}) => {
    
    const dispatch=useDispatch();
    const data=useSelector(state=>state.detail.game)

    const getDetailHandler=()=>{
        dispatch(fetchDetail(id))
        console.log(data);
    }


    return(
        <div onClick={getDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            {/* <img src={image} alt={name}/> */}
        </div>
    )
};

export default Game;