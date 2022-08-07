import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import Load from '../components/load';
import { resize } from '../utils/resize';
import RatingStars from '../components/ratingStars';
import { fetchDetail, removeGamesDetail } from '../features/detailSlice';
import {FaPlaystation, FaLinux, FaSteam, FaXbox, FaApple, FaGamepad, FaPlay, FaAndroid} from 'react-icons/fa';

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
            <div className='board'>
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
            </div>
        </div>
    )
};



export default Detail;