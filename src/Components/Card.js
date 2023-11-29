import React from 'react';
import { useState } from 'react';
import Model from 'react-modal';
import { CiLogout } from 'react-icons/ci';

const Card = (movie) => {
  const [show, setShow] = useState(false);
  let img_path = 'https://image.tmdb.org/t/p/w500';
  const [visible, setVisible] = useState(false);
  return (
    <div className='movie w-full h-full overflow-hidden'>
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
              className='bg-slate-300 text-black lg:w-[90%] lg:h-[90%] lg:mt-10 lg:ml-10 sm:h-[90%] sm:w-[60%]'
            >
              <div className='m-5 flex justify-start '>
                <button
                  onClick={() => setVisible(false)}
                  className='bg-white text-black rounded-full p-2  lg:mt-3 flex items-center gap-2 sm:m-1 sm:p-1 '
                >
                  <span>Back to</span>
                  <CiLogout className='h-8 w-8 sm:h-4 ' />
                </button>
              </div>

              <div className='flex justify-center items-center'>
                <img
                  src={img_path + movie.info.poster_path}
                  className='h-60 w-60 mt-5 mb-5 sm:-mt-3 '
                  alt='img'
                />
              </div>
              <div>
                <div className='flex flex-row justify-center items-center gap-5'>
                  <h4 className='font-semibold text-center lg:mt-1 sm:-mt-5 '>
                    {movie.info.title}
                  </h4>
                </div>
              </div>
              <h4 className='ml-10 lg:mt-1 sm:mt-1 '>{movie.info.overview}</h4>
            </Model>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
