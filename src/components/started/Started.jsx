import React from 'react';
import userImg from '../../assets/user.png';

const Started = () => {
  return (
    <div className='mix-w-[80%] mx-auto grid'>
      <h1>Get Started in 3 Steps</h1>
      <p>Start using premium digital tools in minutes, not hours.</p>
      <div>
        <div className='border'>
          <span className=' rounded-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'>01</span>
          <img src={userImg} alt="User" />
          <h3>Create Account</h3>
          <p>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Started;