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
            <div className="container">
                <Slider {...CategorySettings}>
                    {genreInfo.map(genre=>(
                        <Link to={`/genres/${genre.slug}`} key={genre.id}>
                            <h3>{genre.name}</h3>
                            <div className="box">
                                <div className="img_box">   
                                    <img src={resize(genre.image_background, 1280)} />
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