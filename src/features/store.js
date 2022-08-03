import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import detailSlice from "./detailSlice";

const store=configureStore({
    reducer:{
        games:gameSlice.reducer,
        detail:detailSlice.reducer,
    }
})

export default store;