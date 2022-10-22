import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Load from '../components/load';
import { resize } from '../utils/resize';
import RatingStars from '../components/ratingStars';
import { fetchDetail, removeGamesDetail } from '../features/detailSlice';
import {
    FaPlaystation, 
    FaLinux, 
    FaSteam, 
    FaXbox, 
    FaApple, 
    FaGamepad, 
    FaPlay, 
    FaAndroid,
    FaRegGrinStars,
    FaRegGrinBeam,
    FaRegMehRollingEyes,
    FaRegFrown
} from 'react-icons/fa';

const Detail = () => {
    const {id}=useParams();
    const dispatch=useDispatch();
    
    const data=useSelector(state=>state.detail);
    const {detailInfo: {
        background_image, 
        name, 
        rating, 
        rating_top,
        ratings, 
        metacritic, 
        description_raw,
        tags, 
        ratings_count,
        platforms
    }, screenShots, loading}=data;

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

    const showRating=(rating)=>{
        switch(rating){
            case "exceptional":
                return "최고예요 "
                return <FaRegGrinStars size="24" color="FF2424"/>
            case "recommended":
                return "추천해요 "
                return <FaRegGrinBeam size="24"/>
            case "meh":
                return "별로예요 "
                return <FaRegMehRollingEyes size="24"/>
            case "skip":
                return "싫어요 "
                return <FaRegFrown size="24"/>
            default:
                return;
        }
    };

    const showPlatform=(platform)=>{
        switch(platform.split(" ")[0]){
            case "PlayStation":
                return <FaPlaystation/>
            case "Xbox":
                return <FaXbox/>
            case "Nintendo":
                return <FaGamepad/>
            case "PC":
                return <FaSteam/>
            case "iOS":
                return <FaApple/>
            case "Android":
                return <FaAndroid/>
            case "Linux":
                return <FaLinux/>
            default:
                return <FaPlay/>
        }
    };

    return(
        <div className="external" onClick={goBackHandler}>
            {loading ? <Load /> : (
                <div className='board'>
                    <h1>{name}</h1>
                    <img src={resize(background_image,1280)} alt="image"/>
                    <div className="main">
                        <div>
                            <h3>평가</h3>
                            <div className='rating-stars'>
                                <RatingStars />
                                <h4>{rating_top===0 ? "아직 평점이 없습니다" : `(${rating}/${rating_top}) [${ratings_count}]`}</h4>
                            </div>
                            <div className='rating'>
                                {ratings && ratings.map(mark=>
                                    <div key={mark.id} >
                                        <span>{showRating(mark.title)}</span>
                                        {/* <span>{highPercent(mark.percent)}</span> */}
                                        <span>{`${mark.percent}%`}</span>
                                        {console.log(mark)}
                                    </div>
                                )}
                                {metacritic &&
                                    <strong>{`메타크리틱 - ${metacritic}`}</strong>
                                }
                            </div>
                        </div>
                        <div className="platforms">
                            <h3>플랫폼</h3>
                            <div>
                                {platforms && platforms.map(item=>(
                                    <div key={item.platform.id}>
                                        <span>{showPlatform(item.platform.name)}</span>
                                        <span>{item.platform.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {screenShots.results && screenShots.results.map(shot=>
                        <div className='playshots' key={shot.id}>
                            <img src={resize(shot.image,1280)} key={shot.id} alt="game"/> 
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};



export default Detail;