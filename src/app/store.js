import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '/Users/shan/Desktop/movie project/src/Movie/MovieSlice.js'
export const store=configureStore({
  reducer:{
    movies:moviesReducer

  }
})