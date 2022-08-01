import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import Load from './load';
import { resize } from '../utils/resize';

const Detail = (props) => {
    
    const {detailInfo, screenShots, loading}=useSelector(state=>state.detail)

    const navigate=useNavigate();
    const backHomeHandler=(event)=>{
        const {target}=event;
        if(target.classList.contains('external')){
            document.body.style.overflow="auto";
            navigate("/");
        }
    }

    return(
        <External onClick={backHomeHandler} className="external">
            <Board>
                {loading ? <Load /> : (
                    <div>
                        <h1>{detailInfo.name}</h1>
                        <section className="main">
                            <img src={resize(detailInfo.background_image,1280)} alt="image"/>
                            <h3>{detailInfo.description_raw}</h3>
                            <h4>{`Rating: ${detailInfo.rating}/${detailInfo.rating_top}`}</h4>
                        </section>
                        <section className='rating'>
                            {detailInfo.ratings && detailInfo.ratings.map(mark=>
                                <h5 key={mark.id}>{mark.title} - {mark.percent}%</h5>
                            )}
                            {detailInfo.metacritic && 
                                <h5>`Metacritic: ${detailInfo.metacritic}`</h5>
                            }
                        </section>
                        <section className="platforms">
                            <h4>You can enjoy this game in</h4>
                            {detailInfo.platforms && detailInfo.platforms.map(data=>(
                                <h4 key={data.platform.id}>{data.platform.name}</h4>
                            ))}
                        </section>
                        <section className='playshots'>
                            {screenShots.results && screenShots.results.map(shot=>
                                <img src={resize(shot.image,1280)} key={shot.id} alt="game"/>    
                            )}
                        </section>
                    </div>
                )}
            </Board>
        </External>
    )
};

const External=styled(motion.div)`
    display:flex;
    justify-content:center;
    width:100%;
    min-height:100vh;
    overflow-x:hidden;
    background:rgba(0,0,0,0.7); 
    position:fixed;
    top:0;
    left:0;
    // &::-webkit-scrollbar{
    //     width:0.5rem;
    // }
    // &::-webkit-scrollbar-thumb{
    //     background-color:pink;
    // }
    // &::-webkit-scrollbar-track{
    //     background:white;
    // }
    &::-webkit-scrollbar{
        display:none;
    }
    h1,h3,h4{
        padding:1.5rem;
    }

    h3{
        text-align:left;
    }

`;

const Board=styled(motion.div)`
    width:80%;
    text-align:center;
    // padding:2rem;
    background:white;
    color:black;
    
    position:absolute;
    img{
        width:100%;
        display:block;
    }
`
export default Detail;