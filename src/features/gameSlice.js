import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../apis";
import {fromLastYear} from '../utils/date';

const initialState={
    popular:[],
    searching:[],
    error:"",
    loading:null,
};

export const fetchGames=createAsyncThunk(
    'games/fetchGames',
    async()=>{
        const popGames=await instance.get(`games?key=${process.env.REACT_APP_KEY}`,{
            params:{
                dates:fromLastYear,
                page_size:10,
                ordering:'-rated'
            }
        })

        return popGames.data.results;
    }
)

export const fetchSearch=createAsyncThunk(
    'games/fetchSearch',
    async(gameName)=>{
        const searchGames=await instance.get(`games?key=${process.env.REACT_APP_KEY}`,{
            params:{
                search:gameName,
                page_size:12,
            }
        })
        if(searchGames.data.results.length===0) return `"${gameName}"에 대한 검색 결과가 없습니다`
        return searchGames.data.results;
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
            state.popular=action.payload;
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
