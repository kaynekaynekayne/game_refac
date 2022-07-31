import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../features/detailSlice';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Game = ({name, released, id, image}) => {
    
    const dispatch=useDispatch();

    const getDetailHandler=()=>{
        dispatch(fetchDetail(id))
    }


    return(
        <EachGame onClick={getDetailHandler}>
            <img src={image} alt={name}/>
            <div>
                <h3>{name}</h3>
                <p>{released}</p>
            </div>
        </EachGame>
    )
};

const EachGame=styled(motion.div)`
    box-shadow:0px 5px 20px rgba(0,0,0,0.1);
    text-align:center;
    border-radius:0.5rem;    
    overflow:hidden;
    cursor:pointer;
    div{
        padding:2rem 0;
    }
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

`;

export default Game;