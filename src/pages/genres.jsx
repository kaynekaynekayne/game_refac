import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Load from '../components/load';
import { fetchGamesByGenre} from '../features/genreSlice';
import { resize } from '../utils/resize';
import styled from 'styled-components';

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
            <Box>
                {gamesByGenre.map(game=>(
                    <Games key={game.id} style={{margin:'0 auto'}}>
                        <Link to={`/detail/${game.id}`} >
                            <Games>
                                <ImgBox>
                                    <img src={resize(game.background_image, 1280)} alt={game.name}/>
                                </ImgBox>
                                    <h3>{game.name}</h3>
                            </Games>
                        </Link>
                    </Games>
                ))}
            </Box>
            }
        </div>
    );
};

const Box=styled.div`
    // overflow-x:hidden;
    // padding:0.8rem 2rem;
    font-family: 'Poppins', sans-serif;

`;

const Games=styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap:1rem;
    padding:0.3rem;
    
`
const ImgBox=styled.div`
    width:100%;
    height:15rem;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        transition: all 0.2s ease-in-out;
        display:block;
    }
    img:hover{
        opacity:0.5;
    }
    
`
export default Genres;