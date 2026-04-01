import React, { use, useState } from 'react';
import ModelCard from './ModelCard';
import Cart from '../cart/Cart';
import { CgSlack } from 'react-icons/cg';

const Models = ({ modelsPromise }) => {
  const models = use(modelsPromise);
  const [activeTab, setActiveTab] = useState('products');
  const [cartItems, setCartItems] = useState([]);

  console.log(activeTab);

  return (
    <div className='p-20'>
      <div className='text-center'>
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p className="py-6">
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-box justify-center bg-transparent border border-zinc-300 my-8 w-85 mx-auto rounded-full">

        {/* Products Tab */}
        <input
          type="radio"
          name="tabs"
          className={`tab rounded-full w-40 ${
            activeTab === "products"
              ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
              : ""
          }`}
          aria-label="Products"
          checked={activeTab === "products"}
          onChange={() => setActiveTab("products")}
        />

        {/* Card Tab */}
        <input
          type="radio"
          name="tabs"
          className={`tab rounded-full w-40 ${
            activeTab === "card"
              ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
              : ""
          }`}
          aria-label={`Cart (${cartItems.length})`}
          checked={activeTab === "card"}
          onChange={() => setActiveTab("card")}
        />
      </div>

      {/* Conditional Render */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {activeTab === "products" &&
          models.map((model) => (
            <ModelCard key={model.id} model={model} cartItems={cartItems} setCartItems={setCartItems} />
          ))
        }

        {activeTab === "card" && (
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        )}
      </div>
    </div>
  );
};

export default Models;