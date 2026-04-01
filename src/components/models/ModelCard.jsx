import React, { useState } from 'react';

const ModelCard = ({model,cartItems, setCartItems}) => {
  const [isBuying, setIsBuying] = useState(false);

  const handleBuy = () => {
    setIsBuying(true);
    setCartItems([...cartItems, model]);
  };


  return (
    <div className='border p-4 shadow-lg rounded-lg overflow-hidden border-zinc-300 card-body'>
      <div className='flex justify-between'>
        <div className='border p-2 border-zinc-300 rounded-full'>{model.icon}</div>
        <div>
          <button className="btn btn-soft btn-primary rounded-full">{model.tag}</button>

        </div>
      </div>
      <h2 className="text-2xl font-bold">{model.name}</h2>
      <p className="py-2 text-[#627382]">{model.description}</p>
      <div className='font-semibold text-xl'>${model.price}/Month</div>
      <p className="py-2 text-[#627382]">{model.features}</p>
      <div className="mt-6">
        <button onClick={handleBuy} className="btn bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white btn-block rounded-full">{isBuying ? 'Successfully Purchased' : 'Buy Now'}</button>
      </div>

    </div>
  );
};

export default ModelCard;