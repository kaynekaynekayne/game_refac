import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GAME_POP_URL, GAME_NEW_URL, GAME_UP_URL } from "../api";

const initialState={
    popular:[],
    newGames:[],
    upComing:[],
    loading:null,
    error:"",
};

export const fetchGames=createAsyncThunk(
    'games/fetchGames',
    async()=>{
        try{
            const popGames=await axios.get(GAME_POP_URL);
            const upGames=await axios.get(GAME_UP_URL);
            const latestGames=await axios.get(GAME_NEW_URL);
            
            return {
                popular:popGames.data.results,
                upComing:upGames.data.results,
                newGames:latestGames.data.results,
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
        .addCase(fetchGames.pending, (state,action)=>{
            state.loading=true;
        })
        .addCase(fetchGames.fulfilled, (state,action)=>{
            const {popular, upComing, newGames}=action.payload;
            state.popular=popular;
            state.upComing=upComing;
            state.newGames=newGames;
            state.loading=false;
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
    }
})

export default gameSlice;
