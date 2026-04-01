import React, { use, useState } from 'react';
import ModelCard from './ModelCard';

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  const [activeTab, setActiveTab] =   useState('models');
  console.log(activeTab)
  return (
    <div className='p-20'>
      <div className='text-center'>
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="py-6">Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent border border-zinc-300 my-8 w-85 mx-auto rounded-full">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white" aria-label="Products" defaultChecked onClick={() => setActiveTab("models")} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 " aria-label="Card" onClick={() => setActiveTab("card")}/>
        
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
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