import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useNavigate} from 'react-router-dom';
import Load from './load';
import { resize } from '../utils/resize';
import RatingStars from './ratingStars';

import playstation from '../assets/img/playstation.svg';
import steam from '../assets/img/steam.svg';
import xbox from '../assets/img/xbox.svg';
import nintendo from '../assets/img/nintendo.svg';
import apple from '../assets/img/apple.svg';
import gamepad from '../assets/img/gamepad.svg';

const Detail = (props) => {
    
    const {detailInfo, screenShots, loading}=useSelector(state=>state.detail)

    const navigate=useNavigate();
    const backHomeHandler=(event)=>{
        const {target}=event;
        if(target.classList.contains('external')){
            document.body.style.overflow="auto";
            navigate("/");
        }
    };

    const showPlatform=(platform)=>{
        return(
            {
                "PlayStation 4":playstation,
                "PlayStation 5":playstation,
                "Xbox Series S/X":xbox,
                "Xbox S":xbox,
                "Xbox One":xbox,
                "Nintendo Switch":nintendo,
                "PC":steam,
                "iOS":apple,
            }[platform]||gamepad
        )
    };

    return(
        <External onClick={backHomeHandler} className="external">
            <Board>
                {loading ? <Load /> : (
                    <div>
                        <h1>{detailInfo.name}</h1>
                        <section className="main">
                            <img src={resize(detailInfo.background_image,1280)} alt="image"/>
                            <div style={{padding:'1.5rem'}}>
                                <RatingStars />
                                <span>{`(${detailInfo.rating}/${detailInfo.rating_top})`}</span>
                            </div>
                            <h4>{detailInfo.description_raw}</h4>
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
                            {detailInfo.platforms && detailInfo.platforms.map(item=>(
                                <div key={item.platform.id} style={{width:'2rem'}}>
                                    <img src={showPlatform(item.platform.name)}></img>
                                    <h5>{item.platform.name}</h5>
                                </div>
                            ))}
                        </section>
                        <section className='playshots'>
                            {screenShots.results && screenShots.results.map(shot=>
                                <div key={shot.id}>
                                    <img src={resize(shot.image,1280)} key={shot.id} alt="game"/> 
                                    {/* <button>full</button>    */}
                                </div>
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

    &::-webkit-scrollbar{
        display:none;
    }
    h1,h3{
        padding:1.5rem;
    }

    h4{
        text-align:left;
        padding:0 1.5rem;
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
    span{
        font-weight:bolder;
    }
`
export default Detail;