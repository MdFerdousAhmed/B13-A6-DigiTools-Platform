import React from 'react';

const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  const handelPayment = () => {
    alert('Payment Successful');
    setCartItems([]);
  }
  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold'>Your Cart</h1>
      {
        cartItems.length === 0 ? <p className='py-5 text-[#627382]'>Your cart is empty. Please add some products to proceed.</p> : <>
          <div>
            {
              cartItems.map(item => <div key={item.id} className=' flex items-center justify-between border p-4 rounded-lg border-zinc-300'>
                <div>
                  <div className='rounded-lg shadow-md p-4 flex gap-4'>
                    <div className='border p-4 border-zinc-300 rounded-full w-15'>{item.icon}

                    </div>

                    <div>
                      <h2 className="text-2xl font-bold">{item.name}</h2>
                      <p className='font-semibold text-xl'>${item.price}/Month</p>
                    </div>
                  </div>
                  <div className='flex justify-end'>
                    <button onClick={() => setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))} className='btn bg-red-500 text-white btn-sm rounded-full mt-2'>Remove</button>
                  </div>
                </div>

              </div>)

            }
          </div>
        </>
      }

      <div className='flex justify-between bg-black p-5 mt-5 rounded-lg text-2xl text-white'>
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
      <button onClick={handelPayment} className='btn bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white btn-block rounded-full mt-5'>Proceed to Checkout</button>
    </div >

  );
};

export default Cart;