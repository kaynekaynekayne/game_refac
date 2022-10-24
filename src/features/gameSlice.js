import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../apis";
import {fromLastYear, fromThisYear} from '../utils/date';

const initialState={
    popular:[],
    upComing:[],
    searching:[],
    error:"",
    loading:null,
};

export const fetchGames=createAsyncThunk(
    'games/fetchGames',
    async()=>{
        try{
            const upGames=await instance.get(`games?key=${process.env.REACT_APP_KEY}`,{
                params:{
                    dates:fromThisYear,
                    page_size:10,
                    ordering:'-added',
                }
            });
            
            const popGames=await instance.get(`games?key=${process.env.REACT_APP_KEY}`,{
                params:{
                    dates:fromLastYear,
                    page_size:10,
                    ordering:'-rated'
                }
            })

            return {
                up:upGames.data.results,
                pop:popGames.data.results,
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
            const searchGames=await instance.get(`games?key=${process.env.REACT_APP_KEY}`,{
                params:{
                    search:gameName,
                    page_size:12,
                }
            })
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
            const {up, pop}=action.payload;
            state.upComing=up;
            state.popular=pop;
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.error=action.error.message
        })
        .addCase(fetchSearch.pending, (state,action)=>{
            state.loading=true;
        })
        .addCase(fetchSearch.fulfilled, (state,action)=>{
            state.searching=action.payload;
            state.loading=false;
        })
    }
})

export const {clearSearching}=gameSlice.actions;
export default gameSlice;
