import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './home';
import Detail from '../components/detail';

const Pages = (props) => {
    
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/game/:id" element={<Home/>}/>
        </Routes>
    )
};

export default Pages;