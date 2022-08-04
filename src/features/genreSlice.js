import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GENRE_URL, GENRE_GAMES_URL } from "../utils/api";

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
            return {
                genreGames:genres.data.results
            };
        }catch(err){
            return err;
        }
    }
);

export const fetchGamesByGenre=createAsyncThunk(
    "genre/fetchGamesByGenre",
    async(genreId)=>{
        try{
            const games=await axios.get(GENRE_GAMES_URL(genreId));
            return {
                gameByGenre:games.data.results
            }
        }catch(err){
            return err;
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
            const {genreGames}=action.payload;
            state.genreInfo=genreGames; 
        })
        .addCase(fetchGamesByGenre.pending, (state,action)=>{
            state.loading=true;
        })
        .addCase(fetchGamesByGenre.fulfilled, (state,action)=>{
            const {gameByGenre}=action.payload;
            state.gamesByGenre=gameByGenre;
            state.loading=false;
        })
    }
});

export default genreSlice;