import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Load from '../components/load';
import RatingStars from '../components/ratingStars';
import { resize } from '../utils/resize';
import { fetchDetail, removeGamesDetail } from '../features/detailSlice';
import {
    FaPlaystation, 
    FaSteam, 
    FaXbox, 
    FaApple, 
    FaGamepad, 
    FaPlay,
    FaGooglePlay,
    FaItchIo,FaRegGrinStars,FaRegGrinBeam,FaRegMehRollingEyes,FaRegFrown
} from 'react-icons/fa';
import {SiEpicgames, SiNintendo3Ds} from 'react-icons/si'

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
        ratings_count,
    }, 
    screenShots, 
    sellStores,
    loading}=data;

    console.log(sellStores.results);
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
                return <FaRegGrinStars size="24"/>
                return "최고예요 "
            case "recommended":
                return <FaRegGrinBeam size="24"/>
                return "추천해요 "
            case "meh":
                return <FaRegMehRollingEyes size="24"/>
                return "별로예요 "
            case "skip":
                return <FaRegFrown size="24"/>
                return "싫어요 "
            default:
                return;
        }
    };

    const showPlatform=(id)=>{
        switch(id){
            case 1:
                return <FaSteam size="24"/>
            case 2:
                return <FaXbox size="24"/>
            case 3:
                return <FaPlaystation size="24"/>
            case 4:
                return <FaApple size="24"/>
            case 5:
                return <FaGamepad size="24"/>
            case 6:
                return <SiNintendo3Ds size="24"/>
            case 7:
                return <FaXbox size="24"/>
            case 8:
                return <FaGooglePlay size="24"/>
            case 9:
                return <FaItchIo size="24"/>
            case 11:
                return <SiEpicgames size="24"/>
            default:
                return <FaPlay size="24"/>
        }
    };

    return(
        <div className="external" onClick={goBackHandler}>
            {loading ? <Load /> : (
                <div className='board'>
                    <h1>{name}</h1>
                    <div className="container">
                        <div className="left-section">
                            <img src={resize(background_image,1280)} alt="image"/>
                        </div>
                        <div className="right-section">
                            <div className='up-content'>
                                <h3>평가</h3>
                                <div className='rating-stars'>
                                    <RatingStars />
                                    <h4>{rating_top===0 ? "아직 평점이 없습니다" : `(${rating}/${rating_top}) [${ratings_count}]`}</h4>
                                    {metacritic && metacritic>=90 && <h4>다수의 유저들이 이 게임을 매우 높게 평가합니다!</h4>}
                                </div>
                                <div className='rating'>
                                    {ratings && ratings.map(mark=>
                                        <div key={mark.id}>
                                            <span title={mark.title}>{showRating(mark.title)}</span>
                                            <progress title={mark.percent} id="progress" value={mark.percent} min="0" max="100"></progress>
                                        </div>
                                    )}
                                    {metacritic &&
                                        <strong>{`메타크리틱 - ${metacritic}`}</strong>
                                    }
                                </div>
                            </div>
                            <div className='down-content'>
                                <h3>구매</h3>
                                {sellStores.results && sellStores.results.map(item=>(
                                    <div className='stores'
                                        key={item.id} 
                                        onClick={()=>window.open(item.url, '_blank')} 
                                    > 
                                        {showPlatform(item.store_id)}
                                        <h5>{(item.url).split(".")[1]}</h5>
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