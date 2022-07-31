import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../features/detailSlice';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ({name, released, id, image}) => {
    
    const dispatch=useDispatch();
    const data=useSelector(state=>state.detail.detailInfo)
    console.log(data);

    const getDetailHandler=()=>{
        dispatch(fetchDetail(id))
    }


    return(
        <EachGame onClick={getDetailHandler}>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <p>{released}</p>
        </EachGame>
    )
};

const EachGame=styled(motion.div)`
    box-shadow:0px 5px 20px rgba(0,0,0,0.1);
    text-align:center;
    border-radius:0.5rem;
    img{
        width:100%;
        height:65vh;
        // height:100%; 
        // 모바일용 height!!!
        object-fit:cover;
        transition: all 0.2s ease-out
    }
    img:hover{
        opacity:0.6;
    }
    overflow:hidden;
    cursor:pointer;
`;

export default Game;