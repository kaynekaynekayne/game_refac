import { createSlice } from "@reduxjs/toolkit";

const initialStates={
    popular:[],
    newGames:[],
    upComing:[]
};

const gameSlice=createSlice({
    name:"games",
    initialState:{value:initialStates},
    reducers:{
        fetch_games:(state,action)=>{
            state.value=state.value;
        }
    }
})

export default gameSlice;