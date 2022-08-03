import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GAME_POP_URL, GAME_NEW_URL, GAME_UP_URL } from "../utils/api";

const initialState={
    popular:[],
    newGames:[],
    upComing:[],
    error:"",
};


export const fetchGames=createAsyncThunk(
    'games/fetchGames',
    async()=>{
        try{
            const upGames=await axios.get(GAME_UP_URL());
            // const popGames=await axios.get(GAME_POP_URL());
            // const latestGames=await axios.get(GAME_NEW_URL());
            
            return {
                upComing:upGames.data.results,
                // popular:popGames.data.results,
                // newGames:latestGames.data.results,
            };

        }catch(err){
            return err;
        }
    }
)

const gameSlice=createSlice({
    name:"games",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGames.fulfilled, (state,action)=>{
            const {popular, upComing, newGames}=action.payload;
            state.popular=popular;
            state.upComing=upComing;
            state.newGames=newGames;
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.error=action.error.message
        })
    }
})

export default gameSlice;
