import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './home';
import Detail from './detail';

const Pages = (props) => {
    
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/detail/:id" element={<Detail/>}/>
        </Routes>
    )
};

export default Pages;