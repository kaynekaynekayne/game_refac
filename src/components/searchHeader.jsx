import React,{useState} from 'react';
import styled from 'styled-components';

const SearchHeader = (props) => {
    
    const [text, setText]=useState("");
    const inputHandler=(e)=>{
        setText(e.target.value);
    }

    const submitHandler=(e)=>{
        e.preventDefault();
    }

    return(
        <HeaderSection>
            <h1>
                <i className="fas fa-gamepad"></i>
            </h1>
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
    padding:1rem;
    input{
        color:black;
        padding:1rem;
        border-radius:0.5rem;
        outline:0;
        border:none;
        opacity:0.9;
    }
`;


export default SearchHeader;