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
    async(urlName)=>{ //url을 받아올 것임 (pop, upcome, new 각각 다른 값을 리턴함)
        try{
            const resp=await axios.get(urlName, {
                params:{
                    key:process.env.REACT_APP_KEY,
                }
            });
            console.log(urlName, resp)
            return {
                results:resp.data.results,
                urlName,
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
            state.loading=false;
            const {results,urlName}=action.payload;
            switch (urlName){
                case GAME_POP_URL:
                    state.popular=results;
                case GAME_NEW_URL:
                    state.newGames=results;
                case GAME_UP_URL:
                    state.upComing=results;
            }
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
    }
})

export default gameSlice;
