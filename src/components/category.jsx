import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenre } from '../features/genreSlice';
import { resize } from '../utils/resize';
import Slider from 'react-slick';
import { Settings } from '../common/setting';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const Category = () => {

    const {genreInfo}=useSelector(state=>state.genre);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchGenre());
    },[dispatch]);

    return (
        <Section>
            {/* <h2>Categories</h2> */}
            <Box>
                <Slider {...Settings}>
                    {genreInfo.map(genre=>(
                        <Link to={`/genres/${genre.id}`} key={genre.id}>
                            <h3>{genre.name}</h3>
                            <Games>
                                <ImgBox>   
                                    <img src={resize(genre.image_background, 1280)} />
                                </ImgBox>
                            </Games>
                        </Link>
                    ))}
                </Slider>
            </Box>
        </Section>
    );
};


const Section=styled.section`
    // width:100%;
    // height:100%;
    h2{
        padding:2rem;
    }

`;

const Box=styled.div`
    width:100%;
    height:100%;
    padding:2rem;

    // overflow:hidden;

    h3{
        margin:0.5rem;
        text-align:center;
    }
`;


const Games=styled.div`
    box-shadow:0px 5px 20px rgba(0,0,0,0.3);
    text-align:center;
    overflow:hidden;
    cursor:pointer;
    border-radius:0.8rem;
    margin:0 0.3rem;
`
const ImgBox=styled.section`
    width:100%;
    height:13.5rem;
    
    
    img{
        border-radius:0.8rem;
        width:100%;
        height:100%;
        object-fit:cover;
        transition: all 0.5s ease-in-out;
        display:block;

    }
    img:hover{
        transform: scale(1.3);
    }
`;

export default Category;