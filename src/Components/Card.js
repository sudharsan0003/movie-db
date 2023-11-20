import React from 'react';
import { useState } from 'react';
import Model from 'react-modal';

const Card = (movie) => {
  const [show, setShow] = useState(false);
  let img_path = 'https://image.tmdb.org/t/p/w500';
  const [visible, setVisible] = useState(false);
  return (
    <div className='movie'>
      <img src={img_path + movie.info.poster_path} className='poster-img' />
      <div className='movie-details'>
        <div className='card'>
          <h4 className='movie-title'>{movie.info.title}</h4>
          <p className='rating'>{movie.info.vote_average.toFixed()}</p>
        </div>

        <div>
          <button onClick={() => setVisible(true)}>About</button>
          <div className='flex justify-center items-center '>
            <Model
              isOpen={visible}
              className='bg-blue-400 text-white w-[90%] h-[80%] mt-10 ml-10 '
            >
              <div className='flex justify-center items-center'>
                <img
                  src={img_path + movie.info.poster_path}
                  className='h-60 w-60 mt-5 mb-5 '
                />
              </div>
              <div>
                <div className='flex flex-row justify-center items-center gap-5'>
                  <h4 className='font-semibold text-center '>
                    {movie.info.title}
                  </h4>
                  <p className='h-9 w-9 bg-slate-300 rounded-full  p-3 flex text-black justify-center items-center'>
                    {movie.info.vote_average.toFixed()}
                  </p>
                </div>
              </div>
              <h4 className='ml-10 mt-3 '>{movie.info.overview}</h4>
              <div className='m-5 flex justify-center items-center'>
                <button
                  onClick={() => setVisible(false)}
                  className='bg-yellow-300 text-black rounded-full p-2 mb-5'
                >
                  Back to Home
                </button>
              </div>
            </Model>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
