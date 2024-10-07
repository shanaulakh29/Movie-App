import React from 'react';
import Slider from 'react-slick';
import style from './MovieListing.module.css'
import { GetAllMovies , GetAllSeries } from '/Users/shan/Desktop/movie project/src/Movie/MovieSlice.js';
import { useSelector } from'react-redux';
import MovieCard from '../../MovieCard/MovieCard.js';
import {settings} from '/Users/shan/Desktop/movie project/src/components/settings.js'
const MovieListings = () => {

    const allmovies= useSelector(GetAllMovies);
    const allseries=useSelector(GetAllSeries);
    let rendermovies="";
    let renderseries="";

rendermovies=allmovies.Response==="True"?(allmovies.Search.map((movie,index)=><MovieCard key={index} movie={movie}/>)):(<div><h3>Error</h3></div>)
renderseries=allseries.Response==="True"?(allseries.Search.map((show,index)=><MovieCard key={index} movie={show}/>)):(<div><h3>Error</h3></div>)
    return (
    
        <div>
            <h1>Movies</h1>
        <div className={style.moviescontainer}>
        <Slider {...settings}>{rendermovies}</Slider> 
         </div>
         <h1>Series</h1>
        <div className={style.moviescontainer}>
        <Slider {...settings}>{renderseries}</Slider> 
         
         </div>
        </div>
    );
};

export default MovieListings;