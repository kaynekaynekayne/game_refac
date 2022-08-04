import React,{useState} from 'react';
import styled from 'styled-components';
import {FaGamepad} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchSearch,clearSearching } from '../features/gameSlice';
import { Link } from 'react-router-dom';

const SearchHeader = (props) => {
    
    const dispatch=useDispatch();

    const [text, setText]=useState("");
    const inputHandler=(e)=>{
        setText(e.target.value);
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(fetchSearch(text));
        setText("");
    }

    const clearResults=()=>{
        dispatch(clearSearching());
    }

    return(
        <HeaderSection>
            <Link to="/">
                <h1 onClick={clearResults}><FaGamepad></FaGamepad></h1>
            </Link>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    value={text}
                    onChange={inputHandler}
                    placeholder="게임 검색"    
                />
            </form>
        </HeaderSection>
    )
};

const HeaderSection=styled.header`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:2rem;

    h1{
        color:rgb(106, 237, 196);
        cursor:pointer;
        font-weight:bolder;
    }

    input{
        color:black;
        padding:1.2rem 1rem;
        border-radius:0.5rem;
        outline:0;
        border:none;
        opacity:0.9;
    }
    `;


export default SearchHeader;