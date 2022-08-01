import React from 'react';
import styled from 'styled-components';

const Load = (props) => (
    <LoadingSection>
        <div></div>
    </LoadingSection>
);

const LoadingSection=styled.div`
    width:100%;
    height:100vh;
    background: rgb(27, 27, 27);
    display:flex;
    justify-content:center;
    align-items:center;

    div{
        width:4rem;
        height:4rem;
        border-radius:50%;
        border:0.4rem solid rgb(50, 185, 135);
        border-top:0.4rem solid whitesmoke;
        animation:spin 2s linear infinite;
    }

    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
}
`;
export default Load;