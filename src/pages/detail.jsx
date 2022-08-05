import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import Load from '../components/load';
import { resize } from '../utils/resize';
import RatingStars from '../components/ratingStars';
import { fetchDetail, removeGamesDetail } from '../features/detailSlice';
import {FaPlaystation, FaSteam, FaXbox, FaApple, FaGamepad, FaPlay} from 'react-icons/fa';

const Detail = (props) => {
    const {id}=useParams();
    const dispatch=useDispatch();

    const data=useSelector(state=>state.detail);
    const {detailInfo, screenShots, loading}=data;

    useEffect(()=>{
        dispatch(fetchDetail(id));
        return ()=>{
            dispatch(removeGamesDetail());
        }
    },[dispatch, id]);

    const goBackHandler=(event)=>{
        const {target}=event;
        if(target.classList.contains('external')){
            window.history.back();
        }
    };

    const showPlatform=(platform)=>{
        return(
            {
                "PlayStation 3":<FaPlaystation></FaPlaystation>,
                "PlayStation 4":<FaPlaystation></FaPlaystation>,
                "PlayStation 5":<FaPlaystation></FaPlaystation>,
                "Xbox Series S/X":<FaXbox></FaXbox>,
                "Xbox S":<FaXbox></FaXbox>,
                "Xbox One":<FaXbox></FaXbox>,
                "Xbox 360":<FaXbox></FaXbox>,
                "Nintendo Switch":<FaGamepad></FaGamepad>,
                "PC":<FaSteam></FaSteam>,
                "iOS":<FaApple></FaApple>,
            }[platform]||<FaPlay></FaPlay>
        )
    };

    return(
        <External className="external" onClick={goBackHandler}>
            <Board>
                {loading ? <Load /> : (
                    <section>
                        <h1>{detailInfo.name}</h1>
                        <section className="main">
                            <img src={resize(detailInfo.background_image,1280)} alt="image"/>
                            <div style={{padding:'1.5rem'}}>
                                <RatingStars />
                                <span>{`(${detailInfo.rating}/${detailInfo.rating_top})`}</span>
                            </div>
                            <h4>{detailInfo.description_raw}</h4>
                        </section>
                        <section>
                            <div className='rating'>
                                {detailInfo.rating && detailInfo.ratings.map(mark=>
                                    <h5 key={mark.id}>{`${mark.title} ${mark.percent}% (${mark.count})`}</h5>
                                )}
                                {detailInfo.metacritic &&
                                    <h5>{`Metacritic: ${detailInfo.metacritic}`}</h5>
                                }
                            </div>
                            <div className="platforms">
                                <p>You can enjoy this game in</p>
                                <div>
                                    {detailInfo.platforms && detailInfo.platforms.map(item=>(
                                        <div key={item.platform.id}>
                                            <span>{showPlatform(item.platform.name)}</span>
                                            <span>{item.platform.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                        <section className='playshots'>
                            {screenShots.results && screenShots.results.map(shot=>
                                <div key={shot.id}>
                                    <img src={resize(shot.image,1280)} key={shot.id} alt="game"/> 
                                    {/* <button>full</button>    */}
                                </div>
                            )}
                        </section>
                    </section>
                )}
            </Board>
        </External>
    )
};

const External=styled.div`
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

`;

const Board=styled.div`
    width:80%;
    text-align:center;
    // padding:2rem;
    background:white;
    color:black;
    font-family: 'Poppins', sans-serif;
    position:absolute;
    h1{
        margin:1rem;
    }

    h4{
        text-align:justify;
        margin:0 1.5rem;
    }

    img{
        width:100%;
        display:block;
    }
`

const PlatformsBox=styled.div`
    text-align:right;
`;
export default Detail;