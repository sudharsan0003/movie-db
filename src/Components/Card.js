import React from 'react';

const Card = (movie) => {
  let img_path = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className='movie'>
      <img src={img_path + movie.info.poster_path} className='poster-img' />
      <div className='movie-details'>
        <div className='card'>
          <h4 className='movie-title'>{movie.info.title}</h4>
          <p className='rating'>{movie.info.vote_average}</p>
        </div>
        <div className='about'>
          <h1 className='title-about'>About</h1>
          <h4>{movie.info.overview}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
// API_key="&0a9a1d8f063cc7744ef307ec4172a7b4"
// API_URL="https://api.themoviedb.org/3/movie/popular?api_key=0a9a1d8f063cc7744ef307ec4172a7b4"
// API_IMG="https://image.tmdb.org/t/p/w500/"
// API_URL="https://api.themoviedb.org/3/movie/popular?api_key=bcc4ff18c2939665232d75d8bf0ec093"
// API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=0a9a1d8f063cc7744ef307ec4172a7b4&query
