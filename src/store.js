import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./features/gameSlice";
import detailSlice from "./features/detailSlice";
import searchSlice from "./features/searchSlice";

const store=configureStore({
    reducer:{
        games:gameSlice.reducer,
        detail:detailSlice.reducer,
        search:searchSlice.reducer,
    }
})

export default store;