import React, { use } from 'react';
import PricingCartShow from './PricingCartShow';

const PricingCart = ({ pricingCartPromise }) => {
  const pricingCart = use(pricingCartPromise);
  return (
    <div className='mix-w-[80%] mx-auto grid pb-20'>
      <div className=' text-center p-4'>
        <h1 className='text-4xl font-bold mb-4'>Simple, Transparent Pricing</h1>
        <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 p-4 mx-auto'>
        {
          pricingCart.map((cart) => (
            <PricingCartShow key={cart.id} cart={cart}></PricingCartShow>
          ))
        }
      </div>

      
    </div>
  );
};

export default PricingCart;