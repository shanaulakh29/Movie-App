import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import baseurlwithapikey from '/Users/shan/Desktop/movie project/src/app/apicalls/MovieApii.js';
const initialstate={
    movies:{},
    shows:{},
    details:{}
}
//fetching movies
export const fetchAsyncMovies=createAsyncThunk("movies/fetchAsyncMovies",
     async(searchText)=>{
   
    let response= await fetch(`${baseurlwithapikey()}&s=${searchText}&type=movie`)
     let moviesobj= await response.json();
     return moviesobj;
});
//http://www.omdbapi.com/?apikey=fba132d0&i=tt1201607&plot=full
//fetching series
export const fetchAsyncSeries=createAsyncThunk("movies/fetchAsyncSeries",
    async(searchText)=>{

   let response= await fetch(`${baseurlwithapikey()}&s=${searchText}&type=series`)
    let moviesobj= await response.json();
    return moviesobj;
});
//fetching movie or show details
export const Details=createAsyncThunk("movies/Details",
    async(id)=>{

   let response= await fetch(`${baseurlwithapikey()}&i=${id}&plot=full`)
    let moviesobj= await response.json();
    return moviesobj;
});
const moviesslice=createSlice({
    name:"movies",
    initialState:initialstate,
    reducers:{
    //  addmovies:function(state,action){
    //     state.movies=action.payload;
    //  },
     RemoveSelectedMovieOrShow:(state)=>{
     state.details={};
     }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
         console.log("Loading...");
        } ,
        [fetchAsyncMovies.fulfilled]:(state,actions)=>{
            console.log("fullfilled movies request");
         return{ ...state,movies:actions.payload}
        },
        [fetchAsyncSeries.fulfilled]:(state,actions)=>{
            console.log("fullfilled series request");
         return{ ...state,shows:actions.payload}
        },
        [fetchAsyncMovies.rejected]:()=>{
         console.log("Rejected");
        },
        [Details.fulfilled]:(state,actions)=>{
            console.log("fullfilled details request");
         return{ ...state,details:actions.payload}
        }
    }

})
//function to get the state of the moviesslice
export function GetAllMovies(state){
    return state.movies.movies;
    //this is accessing the movies state and within moves state i am accessing here movies array
}
export function GetAllSeries(state){
    return state.movies.shows;
    //this is accessing the movies state and within moves state i am accessing here movies array
}
export function MovieOrShowDetails(state){
    return state.movies.details;
    //this is accessing the movies state and within moves state i am accessing here movies array
}
export const {RemoveSelectedMovieOrShow}=moviesslice.actions
export default moviesslice.reducer;