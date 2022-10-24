import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../apis";
import {fromLastYear} from '../utils/date';

const initialState={
    genreInfo:[],
    gamesByGenre:[],
    loading:null,
};

export const fetchGenre=createAsyncThunk(
    "genre/fetchGenre",
    async()=>{
        try{
            const genres=await instance.get(`genres?key=${process.env.REACT_APP_KEY}`,{
                params:{
                    page_size:8,
                }
            });
            return genres.data.results;

        }catch(err){
            return err.message;
        }
    }
);

export const fetchGamesByGenre=createAsyncThunk(
    "genre/fetchGamesByGenre",
    async(genreName)=>{
        try{
            const games=await instance.get(`games?key=${process.env.REACT_APP_KEY}`,{
                params:{
                    ordering:'-rating',
                    page_size:8,
                    dates:fromLastYear,
                    genres:genreName,
                }
            });
            return games.data.results;
            
        }catch(err){
            return err.message;
        }
    }
)

const genreSlice=createSlice({
    name:"genre",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchGenre.fulfilled, (state,action)=>{
            state.genreInfo=action.payload;
        })
        .addCase(fetchGamesByGenre.pending, (state,action)=>{
            state.loading=true;
        })
        .addCase(fetchGamesByGenre.fulfilled, (state,action)=>{
            state.gamesByGenre=action.payload;
            state.loading=false;
        })
    }
});

export default genreSlice;