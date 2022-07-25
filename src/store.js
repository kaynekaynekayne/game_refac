import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./features/gameSlice";

const store=configureStore({
    reducer:{
        games:gameSlice.reducer
    }
})

export default store;