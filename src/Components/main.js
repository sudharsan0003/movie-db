import React, { useEffect, useState } from 'react';
import Card from './Card';

let API_key = '&api_key=0a9a1d8f063cc7744ef307ec4172a7b4';
let base_url = 'https://api.themoviedb.org/3';
let url = base_url + '/movie/popular?' + API_key;

const Main = () => {
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
    } catch (e) {
      console.log(e);
    }
  };
  const changeHandler = (e) => {
    setquery(e.target.value);
  };
  return (
    <>
      <div className='header'>
        <form onSubmit={searchMovie}>
          <input
            className='search'
            type='text'
            name='query'
            placeholder='Search Movies'
            value={query}
            onChange={changeHandler}
          ></input>
          <button className='btn-search'>Search</button>
        </form>
      </div>
      <div className='container'>
        {data.length == 0 ? (
          <p className='not-found'>Not Found</p>
        ) : (
          data.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};

export default Main;
