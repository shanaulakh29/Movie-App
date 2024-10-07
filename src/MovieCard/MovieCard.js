import React from 'react';
import style from "./Moviecard.module.css";
import {Link} from 'react-router-dom';
function MovieCard({ movie }) {

  return (
    <div className={style.carditem}>
    <Link to={`/movie/${movie.imdbID}`}>
      <div className={style.cardinner}>
        <div className={style.cardtop}>
          <img src={movie.Poster} alt={movie.Title} className={style.imgposter}/>
        </div>
        <div className={style.cardbottom}>
          <div className={style.cardinfo}>
            <h4 className={style.h4}>{movie.Title}</h4>
            <p className={style.p}>{movie.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default MovieCard;
