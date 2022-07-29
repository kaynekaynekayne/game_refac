import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const GAME_URL=`https://api.rawg.io/api/games?dates=${new Date().getFullYear()-1},${new Date().toISOString().slice(0,10)}&ordering=-rating&page_size=10`;

//짭
const GAME_URL="https://jsonplaceholder.typicode.com/users"

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
            const resp=await axios.get(GAME_URL, {
                // params:{
                //     key:process.env.REACT_APP_KEY,
                // }
            });
            // return resp.data.results;

            //짭
            return resp.data;
        }catch(err){
            alert(err.message);
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
            state.popular=action.payload;
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.loading=false;
            
        })
    }
})

export default gameSlice;
