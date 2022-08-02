import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SEARCH_URL } from "../utils/api";

const initialState={
    searching:[],
}

export const fetchSearch=createAsyncThunk(
    'games/fetchSearch',
    async(gameName)=>{
        try{
            const searchGames=await axios.get(SEARCH_URL(gameName));
            return{
                searchedGames:searchGames.data,
            };

        }catch(err){
            return err;
        }
    }
);

const searchSlice=createSlice({
    name:"search",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchSearch.fulfilled, (state,action)=>{
            const {searchedGames}=action.payload;
            state.searching=searchedGames;
        })
    }
})

export default searchSlice;