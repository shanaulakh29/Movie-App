import React,{useEffect}from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import MovieListing from './MovieListing/MovieListings.js';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncSeries } from '/Users/shan/Desktop/movie project/src/Movie/MovieSlice.js';

const Home = () => {
    const dispatch=useDispatch();
const movietext="Harry";
const seriestext="friends"
useEffect(()=>{
     //so when i receive an object containing all the movies i update the global moviesslice state by calling dispatch
dispatch(fetchAsyncMovies(movietext));
dispatch(fetchAsyncSeries(seriestext));
    },[dispatch])

    return (
         <>
        
        
        <MovieListing/>
        
        
         </>
    );
};

export default Home;