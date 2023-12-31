import React, { useState, useEffect } from 'react';
import Card from './Card';
import { FaSearch } from 'react-icons/fa';
import Footer from './Footer';

let API_key = '&api_key=0a9a1d8f063cc7744ef307ec4172a7b4';
let base_url = 'https://api.themoviedb.org/3';
let url = base_url + '/movie/popular?' + API_key;

const Home = () => {
  const [data, setdata] = useState([]);
  const [url_set, seturl] = useState(url);
  const [query, setquery] = useState('');

  useEffect(() => {
    fetch(url_set).then((res) =>
      res.json().then((data) => {
        setdata(data.results);
      })
    );
  }, [seturl]);

  const searchMovie = async (e) => {
    e.preventDefault();
    try {
      const finalurl = `https://api.themoviedb.org/3/search/movie?api_key=0a9a1d8f063cc7744ef307ec4172a7b4&query=${query}`;
      const res = await fetch(finalurl);
      const data = await res.json();
      setdata(data.results);
      setquery('');
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setquery(e.target.value);
  };
  return (
    <>
      <div className='flex justify-center items-center md:-mt-14 sm:mt-3 sm:-mb-14 '>
        <form onSubmit={searchMovie} className='mb-10'>
          <input
            className='p-2 rounded-full outline-none border-none '
            type='text'
            name='query'
            placeholder='Search Movies'
            value={query}
            onChange={changeHandler}
          ></input>
          <button className='-ml-8 bg-orange-300 text-xl p-2 rounded-full '>
            <FaSearch className='h-4 w-4 -mt-1 -ml-1' />
          </button>
        </form>
      </div>
      <div className='container '>
        {data.length == 0 ? (
          <p className='not-found'>Not Found</p>
        ) : (
          data.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
