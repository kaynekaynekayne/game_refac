import React,{useState} from 'react';
import {FaGamepad} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchSearch,clearSearching } from '../features/gameSlice';
import { Link, useNavigate } from 'react-router-dom';

const SearchHeader = (props) => {
    
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [text, setText]=useState("");
    const inputHandler=(e)=>{
        setText(e.target.value);
    }
    
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(fetchSearch(text));
        setText("");
        navigate("/");
    }

    const clearResults=()=>{
        dispatch(clearSearching());
    }

    return(
        <header>
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
        </header>
    )
};

export default SearchHeader;