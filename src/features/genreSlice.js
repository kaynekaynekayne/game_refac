import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GENRE_URL, GENRE_GAMES_URL } from "../api";

const initialState={
    genreInfo:[],
    gamesByGenre:[],
    loading:null,
};

export const fetchGenre=createAsyncThunk(
    "genre/fetchGenre",
    async()=>{
        try{
            const genres=await axios.get(GENRE_URL());
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
            const games=await axios.get(GENRE_GAMES_URL(genreName),{
                params:{
                    ordering:'-rating',
                    page_size:10
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