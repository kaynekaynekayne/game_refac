import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Load from '../components/load';
import { resize } from '../utils/resize';
import RatingStars from '../components/ratingStars';
import { fetchDetail, removeGamesDetail } from '../features/detailSlice';
import {FaPlaystation, FaLinux, FaSteam, FaXbox, FaApple, FaGamepad, FaPlay, FaAndroid} from 'react-icons/fa';

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

    const showPlatform=(platform)=>{
        switch(platform.split(" ")[0]){
            case "PlayStation":
                return <FaPlaystation></FaPlaystation>
            case "Xbox":
                return <FaXbox></FaXbox>
            case "Nintendo":
                return <FaGamepad></FaGamepad>
            case "PC":
                return <FaSteam></FaSteam>
            case "iOS":
                return <FaApple></FaApple>
            case "Android":
                return <FaAndroid></FaAndroid>
            case "Linux":
                return <FaLinux></FaLinux>
            default:
                return <FaPlay></FaPlay>
        }
    };

    return(
        <div className="external" onClick={goBackHandler}>
            {loading ? <Load /> : (
                <div className='board'>
                    <h1>{name}</h1>
                    <img src={resize(background_image,1280)} alt="image"/>
                    <div className="main">
                        <div className='rating-stars'>
                            <RatingStars />
                            <span>{`(${rating}/${rating_top})`}</span>
                        </div>
                        <div className='plot'>
                            <h4>{description_raw}</h4>
                        </div>
                        <div className='info'>     
                            
 
                     
                            <div style={{ padding:'1rem', display:'flex', justifyContent:'space-between'}}>
                                <div className='rating' style={{textAlign:'left',}}>
                                    <p>Ratings</p>
                                    {ratings && ratings.map(mark=>
                                        <p key={mark.id}>{`${mark.title} ${mark.percent}% (${mark.count})`}</p>
                                    )}
                                    {metacritic &&
                                        <p>{`Metacritic: ${metacritic}`}</p>
                                    }
                                </div>
                                <div style={{width:'60%'}}>
                                    <div>
                                        <p>Genres</p>
                                        {tags && tags.slice(0,3).map(tag=>
                                            <span key={tag.id}>#{tag.name} </span>
                                        )}
                                    </div>
                                    <p>Platforms</p>
                                    <div className="platforms" style={{flexWrap:'wrap', display:'flex', justifyContent:'space-between'}}>
                                        {platforms && platforms.map(item=>(
                                            <div key={item.platform.id}>
                                                <span>{showPlatform(item.platform.name)}</span>
                                                <span>{item.platform.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                      
                            </div>
                        </div>
                    </div>
      
                    {screenShots.results && screenShots.results.map(shot=>
                        <div className='playshots' key={shot.id}>
                            <img src={resize(shot.image,1280)} key={shot.id} alt="game"/> 
                            {/* <button>full</button>    */}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
};



export default Detail;