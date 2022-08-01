import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../features/detailSlice';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import { resize } from '../utils/resize';

const Game = ({name, released, id, image}) => {
    
    const dispatch=useDispatch();

    const getDetailHandler=()=>{
        document.body.style.overflow="hidden";
        dispatch(fetchDetail(id));
    }


    return(
        <EachGame onClick={getDetailHandler}>
            <Link to={`/game/${id}`}>
                <img src={resize(image, 1280)} alt={name}/>
                <div>
                    <h3>{name}</h3>
                    <p>{released}</p>
                </div>
            </Link>
        </EachGame>
    )
};

const EachGame=styled(motion.div)`
    box-shadow:0px 5px 20px rgba(0,0,0,0.3);
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
        transition: all 0.2s ease-in
    }
    img:hover{
        // opacity:0.6;
    }

`;

export default Game;