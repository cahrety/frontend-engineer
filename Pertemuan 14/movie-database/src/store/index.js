import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../components/features/moviesSlice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

export default store;