import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { DETAIL_URL } from "../api";

const initialState={game:{}};

export const fetchDetail=createAsyncThunk(
    "detail/fetchDetail",
    async (id)=>{
        try{
            const resp=await axios.get(DETAIL_URL(id))
            return resp.data;
        }catch(err){
            return err;
        }
    }
)
const detailSlice=createSlice({
    name:"detail",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.
        addCase(fetchDetail.fulfilled, (state,action)=>{
            state.game=action.payload
        })
    }
})

export default detailSlice;