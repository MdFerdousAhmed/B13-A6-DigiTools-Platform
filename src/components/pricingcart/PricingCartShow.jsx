import React from 'react';

const PricingCartShow = ({ cart }) => {
  return (
    <div>
      <div className={`${cart?.name ==  'Pro' ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white" : ""} card w-80 bg-base-100 shadow-sm`}>
        <div className="card-body">
          <span className="badge badge-xs badge-warning">{cart.tag}</span>
          <div className="">
            <h2 className="text-3xl font-bold">{cart.name}</h2>
            <p className="text-base-content/70">{cart.description}</p>
            <span className="text-xl">${cart.price}/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{cart.features[0]}</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{cart.features[1]}</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{cart.features[2]}</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{cart.features[3]}</span>
            </li>
            <li className="opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">{cart.features[4]}</span>
            </li>
            <li className="opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span className="line-through">{cart.features[5]}</span>
            </li>
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCartShow;