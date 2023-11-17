import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex flex-row bg-cyan-300 h-[80px] justify-center gap-80 items-center p-5 no-underline '>
      <Link to='/' className='no-underline flex flex-row items-center gap-24  '>
        <img
          className='-ml-32 h-16 w-20 rounded-full'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQotUGZsr7A-miCJoRWuRyI-Pvs6z0zGEqeA&usqp=CAU'
          alt=''
        />
        <h4 className='text-white  font-extrabold mt-2'>Home</h4>
      </Link>
      <Link to='/about' className='no-underline mt-2'>
        <h4 className='text-white font-extrabold'>About</h4>
      </Link>
    </div>
  );
};

export default Header;
