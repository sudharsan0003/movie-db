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
