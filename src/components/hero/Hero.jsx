import React from 'react';
import heroImg from "../../assets/banner.png"
import playImg from "../../assets/play.png"
import circleImg from "../../assets/circle.png"

const Hero = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroImg}
          />
          <div className=''>
            <button className='bg-[#E1E7FF] border-none rounded-full p-4'> <img className='inline-block' src={circleImg}></img> <p className=' font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block '>New: AI-Powered Tools Available</p></button>
            <h1 className="text-5xl font-bold">Supercharge Your Digital Workflow</h1>
            <p className="py-6 text-[#627382]">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
            </p>
            <div className='flex gap-4'>
              <button className="btn btn-primary font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full">Explore Products</button>
              <button className="btn font-bold bg-white  btn-primary rounded-full"> <img src={playImg} alt="" />
                <span className='font-bold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent '>Watch Demo</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;