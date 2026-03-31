import React from 'react';

const Rating = () => {
  return (
    <div className='bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='flex justify-between max-w-[60%] mx-auto text-[#FFFFFF] p-4'>
        <div>
          <h1 className='text-4xl font-bold'>50K+</h1>
          <p>Active Users</p>
        </div>
        <div>
          <h1 className='text-4xl font-bold'>200+</h1>
          <p>Premium Tools</p>
        </div>
        <div>
          <h1 className='text-4xl font-bold'>4.9</h1>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;