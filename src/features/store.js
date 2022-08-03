import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import detailSlice from "./detailSlice";
import searchSlice from "./searchSlice";

const store=configureStore({
    reducer:{
        games:gameSlice.reducer,
        detail:detailSlice.reducer,
        search:searchSlice.reducer,
    }
})

export default store;