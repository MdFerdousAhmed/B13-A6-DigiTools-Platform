import React, { use } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  return (
    <div className='p-20'>
      <div className='text-center'>
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="py-6">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>
      <div className='grid grid-cols-3 gap-5'>
        {
          models.map((model) => (
            <ModelCard key={model.id} model={model}></ModelCard>
          )
          
          )
        }
      </div>

    </div>
  );
};

export default Models;