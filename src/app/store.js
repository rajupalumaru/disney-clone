import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from "../features/movies/movieSlice";
import userSlice from "../features/user/userSlice";

export const store=configureStore({
    reducer:{
        movie:MovieReducer,
        user:userSlice
    }

})