import React, { useEffect } from 'react';
import { Details, RemoveSelectedMovieOrShow, MovieOrShowDetails } from '/Users/shan/Desktop/movie project/src/Movie/MovieSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import style from './MovieDetial.module.css'
const MovieDetail = () => {
    const dispatch = useDispatch();
    let { imdbID } = useParams();
    // let newstr="";
    // for(let i=1;i<imdbID.length;i++) {
    //   newstr+=imdbID[i];
    // }
    const details = useSelector(MovieOrShowDetails);
    console.log(details);
    useEffect(() => {
        dispatch(Details(imdbID))
        return () => {
            dispatch(RemoveSelectedMovieOrShow())
        }
    }, [dispatch, imdbID]);

    return (
        
            Object.keys(details).length === 0 ? (<div>Loading...</div>):
                (<div className={style.moviesection}>
                    <div className={style.left}>
                        <div className={style.movietitle}>{details.Title}</div>
                        <div className={style.movierating}>
                            <span className={style.head}>IMDB RATING <i className={style.imdbRating}><svg className={style.starsvg} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z" /></svg>:{details.imdbRating}</i></span>
                            <span className={style.head}>IMDB Votes <i className={style.votessubhead}><svg className={style.thumbsup} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M720-120H280v-520l280-280 50 50q7 7 11.5 19t4.5 23v14l-44 174h258q32 0 56 24t24 56v80q0 7-2 15t-4 15L794-168q-9 20-30 34t-44 14Zm-360-80h360l120-280v-80H480l54-220-174 174v406Zm0-406v406-406Zm-80-34v80H160v360h120v80H80v-520h200Z" /></svg> :{details.imdbVotes}</i></span>
                            <span className={style.head}>Runtime <i className={style.runtimesubhead}><svg className={style.runtimeicon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q88 0 166.5 36T782-742L480-440v-360q-134 0-227 93t-93 227q0 134 93 227t227 93q69 0 132-28.5T720-270v110q-53 38-114 59T480-80Zm320-160v-320h80v320h-80Zm40 160q-17 0-28.5-11.5T800-120q0-17 11.5-28.5T840-160q17 0 28.5 11.5T880-120q0 17-11.5 28.5T840-80Z" /></svg> :{details.Runtime}</i></span>
                            <span className={style.head}>Year <i className={style.yearsubhead}>< svg className={style.yearicon} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B2A8D3"><path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z" /></svg> :{details.Year}</i></span>
                        </div>
                        <div className={style.plot}>{details.Plot}</div>
                        <div className={style.subhead}>
                            <div>
                                <span className={style.extrahead}>Director </span>
                                <span className={style.extra}>{details.Director}</span>
                            </div>
                            <div>
                                <span className={style.extrahead}>Stars </span>
                                <span className={style.extra}>{details.Actors}</span>
                            </div>
                            <div>
                                <span className={style.extrahead}>Genres </span>
                                <span className={style.extra}>{details.Genre}</span>
                            </div>
                            <div>
                                <span className={style.extrahead}>Languages </span>
                                <span className={style.extra}>{details.Language}</span>
                            </div>
                            <div>
                                <span className={style.extrahead}>Awards </span>
                                <span className={style.extra}>{details.Awards}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.sectionright}>
                        <img src={details.Poster} alt={details.Title} />


                    </div>
                </div>
                )
        

    );
};

export default MovieDetail;