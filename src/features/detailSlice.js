import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../apis";

const initialState={
    detailInfo:{},
    screenShots:[],
    sellStores:[],
    loading:null,
};

export const fetchDetail=createAsyncThunk(
    "detail/fetchDetail",
    async (id)=>{
        try{
            const detail=await instance.get(`games/${id}.json?key=${process.env.REACT_APP_KEY}`);
            const screenShot=await instance.get(`games/${id}/screenshots?key=${process.env.REACT_APP_KEY}`);
            const store=await instance.get(`games/${id}/stores?key=${process.env.REACT_APP_KEY}`);
            
            return {
                details:detail.data,
                screens:screenShot.data.results,
                stores:store.data.results,
            }
        }catch(err){
            return err.message;
        }
    }
)
const detailSlice=createSlice({
    name:"detail",
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchDetail.pending, (state,action)=>{
            state.loading=true;
        })
        .addCase(fetchDetail.fulfilled, (state,action)=>{
            const {screens, details, stores}=action.payload;
            state.detailInfo=details;
            state.screenShots=screens;
            state.sellStores=stores;
            state.loading=false;
        })
    }
})

export default detailSlice;