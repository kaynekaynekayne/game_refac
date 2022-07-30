import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./features/gameSlice";
import detailSlice from "./features/detailSlice";

const store=configureStore({
    reducer:{
        games:gameSlice.reducer,
        detail:detailSlice.reducer,
    }
})

export default store;