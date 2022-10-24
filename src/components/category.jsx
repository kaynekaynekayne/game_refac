import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenre } from '../features/genreSlice';
import { resize } from '../utils/resize';
import Slider from 'react-slick';
import { CategorySettings } from '../common/setting';
import { Link } from 'react-router-dom';

const Category = () => {

    const {genreInfo}=useSelector(state=>state.genre);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchGenre());
    },[dispatch]);

    return (
        <section>
            <div className="category-container">
                <Slider {...CategorySettings}>
                    {genreInfo.map(genre=>(
                        <Link to={`/genres/${genre.slug}`} key={genre.id}>
                            <h3>{genre.name}</h3>
                            <div className="category-box">
                                <div className="img-box">   
                                    <img src={resize(genre.image_background, 600)} alt="game-genre"/>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    );
};


export default Category;