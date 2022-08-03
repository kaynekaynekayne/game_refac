import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './home';
import Detail from './detail';
import Searched from './searched';

const Pages = (props) => {
    
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/detail/:id" element={<Home/>}/> */}
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/searched/:title" element={<Searched />}/>
        </Routes>
    )
};

export default Pages;