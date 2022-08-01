import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { DETAIL_URL, SCREENSHOT_URL} from "../utils/api";

const initialState={
    detailInfo:{},
    screenShots:{},
    loading:null,
    error:""
};

export const fetchDetail=createAsyncThunk(
    "detail/fetchDetail",
    async (id)=>{
        try{
            const detail=await axios.get(DETAIL_URL(id))
            const screenShot=await axios.get(SCREENSHOT_URL(id))
            return {
                details:detail.data,
                screens:screenShot.data,
            }
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
        builder
        .addCase(fetchDetail.pending, (state,action)=>{
            state.loading=true;
        })
        .addCase(fetchDetail.fulfilled, (state,action)=>{
            const {screens, details}=action.payload;
            state.detailInfo=details;
            state.screenShots=screens;
            state.loading=false;
        })
        .addCase(fetchDetail.rejected, (state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
    }
})

export default detailSlice;