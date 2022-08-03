import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGenre } from '../features/genreSlice';

const Category = () => {

    const {genreInfo}=useSelector(state=>state.genre);
    console.log(genreInfo);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(fetchGenre());
    },[dispatch]);

    return (
        <section>
            <div>
                hahahaa
            </div>
        </section>
    );
};

export default Category;