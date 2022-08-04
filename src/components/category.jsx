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
        <Section>
            {/* <h2>Categories</h2> */}
            <Box>
                <Slider {...Settings}>
                    {genreInfo.map(genre=>(
                        <div key={genre.id}>
                            <h3>{genre.name}</h3>

                            <Games>
                                <ImgBox>   
                                    <img src={resize(genre.image_background, 1280)} />
                                </ImgBox>
                            </Games>
                        </div>
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
    position:relative;
    div{
        padding:2rem 0;
    }
    img{
        width:100%;
        object-fit:cover;
        transition: all 0.5s ease-in-out;
        opacity:0.8;
        display:block;
    }
    img:hover{
        transform: scale(1.3);
    }
`
const ImgBox=styled.section`
    width:100%;
    height:13.5rem;
`;

export default Category;