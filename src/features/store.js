import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import detailSlice from "./detailSlice";
import genreSlice from "./genreSlice";

const store=configureStore({
    reducer:{
        games:gameSlice.reducer,
        detail:detailSlice.reducer,
        genre:genreSlice.reducer,
    }
})

export default store;