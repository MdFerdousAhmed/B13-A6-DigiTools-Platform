import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ModelCard = ({model,cartItems, setCartItems}) => {
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = () => {
    setIsBuying(true);
    setCartItems([...cartItems, model]);
    toast.success( "added to cart!");

  }
  return (
    <div className='border p-4 shadow-lg rounded-lg overflow-hidden border-zinc-300 card-body'>
      <div className='flex justify-between'>
        <div className='border p-3 border-zinc-300 rounded-full'>{model.icon}</div>
        <div>
          <button className="btn btn-soft btn-primary rounded-full">{model.tag}</button>

        </div>
      </div>
      <h2 className="text-2xl font-bold">{model.name}</h2>
      <p className="py-2 text-[#627382]">{model.description}</p>
      <div className='font-semibold text-xl'>${model.price}/Month</div>
      <div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{model.features[0]}</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{model  .features[1]}</span>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              <span>{model.features[2]}</span>
            </li>
          </ul>
      </div>
      <div className="mt-6">
        <button onClick={handleBuy} className="btn bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white btn-block rounded-full">{isBuying ? 'Successfully Purchased' : 'Buy Now'}</button>
      </div>

    </div>
  );
};

export default ModelCard;