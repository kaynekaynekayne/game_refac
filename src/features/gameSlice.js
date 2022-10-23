import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GAME_UP_URL, SEARCH_URL } from "../api";

const initialState={
    popular:[],
    upComing:[],
    searching:[],
    error:"",
};


export const fetchGames=createAsyncThunk(
    'games/fetchGames',
    async()=>{
        try{
            const upGames=await axios.get(GAME_UP_URL(),{
                params:{
                    ordering:'-added',
                    page_size:10
                }
            });
            // const popGames=await axios.get(GAME_POP_URL(), {
            //     params:{
            //         ordering:'-rating',
            //         page_size:10
            //     }
            // });
            
            return {
                upComing:upGames.data.results,
                // popular:popGames.data.results,
            };

        }catch(err){
            return err.message;
        }
    }
)

export const fetchSearch=createAsyncThunk(
    'games/fetchSearch',
    async(gameName)=>{
        try{
            const searchGames=await axios.get(SEARCH_URL(gameName),{
                params:{
                    page_size:9
                }
            });
            return searchGames.data.results;

        }catch(err){
            return err.message;
        }
    }
);

const gameSlice=createSlice({
    name:"games",
    initialState,
    reducers:{
        clearSearching:(state)=>{
            state.searching=[];
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGames.fulfilled, (state,action)=>{
            const {popular, upComing}=action.payload;
            state.popular=popular;
            state.upComing=upComing;
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.error=action.error.message
        })
        .addCase(fetchSearch.fulfilled, (state,action)=>{
            state.searching=action.payload;
        })
    }
})

export const {clearSearching}=gameSlice.actions;
export default gameSlice;
