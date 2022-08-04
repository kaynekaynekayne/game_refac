import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenre } from '../features/genreSlice';
import { resize } from '../utils/resize';
import Slider from 'react-slick';
import { Settings } from '../common/setting';
import styled from 'styled-components';

const Category = () => {

    const {genreInfo}=useSelector(state=>state.genre);
    console.log(genreInfo);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchGenre());
    },[dispatch]);

    return (
        <section>
            <Box>
                <Slider {...Settings}>
                    {genreInfo.map(genre=>(
                        <Games key={genre.id}>
                            <span>{genre.name}</span>
                            <img src={resize(genre.image_background, 1280)} />
                        </Games>
                    ))}
                </Slider>
            </Box>
        </section>
    );
};


const Box=styled.div`
    height:15rem;
    overflow:hidden;
    padding:2rem;
    `;
    
const Games=styled.div`
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
        max-height:20rem; 
        object-fit:cover;
        // transition: all 0.2s ease-in
    }
    img:hover{
        // opacity:0.5;
    }

`

export default Category;