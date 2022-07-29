import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    popular:[],
    upComing:[],
    newGames:[],
    loading:null,
    error:"",
};

export const fetchGames=createAsyncThunk(
    'games/fetchGames',
    async(url)=>{ //url을 받아올 것임 (pop, upcome, new 각각 다른 값을 리턴함)
        try{
            const resp=await axios.get(url, {
                params:{
                    key:process.env.REACT_APP_KEY,
                }
            });
            return resp.data.results;
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
            console.log(action.payload)
        })
        .addCase(fetchGames.rejected, (state,action)=>{
            state.loading=false;
            
        })
    }
})

export default gameSlice;
