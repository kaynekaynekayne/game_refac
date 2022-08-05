import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Load from '../components/load';
import { fetchGamesByGenre } from '../features/genreSlice';
import { resize } from '../utils/resize';
import Slider from 'react-slick';
// import { GamesByGenreSettings } from '../common/setting';
// import styled from 'styled-components';

const Genres = () => {

    const {type}=useParams();
    const dispatch=useDispatch();

    const {gamesByGenre, loading}=useSelector(state=>state.genre);
    
    useEffect(()=>{
        dispatch(fetchGamesByGenre(type))
    },[type, dispatch]);

    return (
        <div style={{padding:'2rem'}}>
            <h2>{`${type} games`}</h2>
            {loading ? <Load /> :
                gamesByGenre.map(game=>
                    <div key={game.id} style={{margin:'0 auto'}}>
                        <Link to={`/detail/${game.id}`} >
                            {/* <ImgBox> */}
                                <img src={resize(game.background_image, 1280)} alt={game.name}/>
                            {/* </ImgBox> */}
                            <span>{game.name}</span>
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

// const Box=styled.div`
//     width:100%;
//     height:100%;
//     padding:1rem 2rem;
// `;


// const ImgBox=styled.div`
// width:100%;
// height:100%;
// `
export default Genres;