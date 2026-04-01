import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const Started = () => {
  return (
    <div className='mix-w-[80%] mx-auto grid pb-20'>
      <div className=' text-center p-4'>
        <h1 className='text-4xl font-bold mb-4'>Get Started in 3 Steps</h1>
        <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-[90%]  mx-auto'>
        <div className='border text-center p-4 border-zinc-300 rounded-lg shadow-md h-[300px]'>
          <div className='grid justify-end'>
            <div className=' rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 w-10'><span className=''>01</span></div>
          </div>
          <div className='border border-zinc-300 w-20 rounded-full p-4 mx-auto grid items-center justify-center text-center bg-indigo-200'>
            <img src={userImg} alt="User" />
          </div>
          <h3 className='text-2xl font-semibold'>Create Account</h3>
          <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className='border text-center p-4 border-zinc-300 rounded-lg shadow-md'>
          <div className='grid justify-end'>
            <div className=' rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 w-10'><span className=''>02</span></div>
          </div>
          <div className='border border-zinc-300 w-20 rounded-full p-4 mx-auto grid items-center justify-center text-center bg-indigo-200'>
            <img src={packageImg} alt="User" />
          </div>
          <h3 className='text-2xl font-semibold'>Choose Products</h3>
          <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className='border text-center p-4 border-zinc-300 rounded-lg shadow-md'>
          <div className='grid justify-end'>
            <div className=' rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 w-10'><span className=''>03</span></div>
          </div>
          <div className='border border-zinc-300 w-20 rounded-full p-4 mx-auto grid items-center justify-center text-center bg-indigo-200'>
            <img src={rocketImg} alt="User" />
          </div>
          <h3 className='text-2xl font-semibold'>Start Creating</h3>
          <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
        </div>
        
      </div>
    </div>
  );
};

export default Started;