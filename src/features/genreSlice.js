import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GENRE_URL } from "../utils/api";

const initialState={
    genreInfo:[],
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
    }
});

export default genreSlice;