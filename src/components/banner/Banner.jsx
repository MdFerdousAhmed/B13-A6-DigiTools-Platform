import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="hero-content text-center p-15">
          <div className="">
            <h1 className="text-5xl font-bold text-[#FFFFFF]">Ready to Transform Your Workflow?</h1>
            <p className="py-6 text-[#FFFFFF]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. <br></br>In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div className='flex gap-4 justify-center items-center'>
              <button className="btn  rounded-full"><span className='bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Explore Products</span></button>
              <button className="btn text-white bg-purple-500 rounded-full">View Pricing</button>
            </div>
            <p className='text-[#FFFFFF] mt-6'>14-day free trial • No credit card required • Cancel anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;