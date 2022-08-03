import React from 'react';
import { useSelector } from 'react-redux';
import { resize } from '../utils/resize';
import styled from 'styled-components';

const Searched = (props) => {
    
    const {searching}=useSelector(state=>state.search);
    console.log(searching);
    return(
        <SearchResults>
            {searching.map(item=>
                <div key={item.id}>
                    <span>{item.name}</span>
                    <div>
                        <img src={resize(item.background_image,1280)} alt={item.name}/>
                    </div>
                </div>
                )
            }
        </SearchResults>
    )
};

const SearchResults=styled.section`
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap:1.3rem;
    grid-row-gap:4rem;
    div{
        width:100%;
        height:100%;
        overflow:hidden;
    }
    img{
        width:100%;
        height:100%;
    }
`

export default Searched;