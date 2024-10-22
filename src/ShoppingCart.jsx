import React, { useState, useEffect } from 'react';
import CartDisplay from './CartDisplay';
import pro1 from "./assests/pro1.png";
import pro2 from "./assests/pro2.png";

const ShoppingCart = () => {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const initialProducts = [
        { id: 1, name: 'Nike Airmax 270 react', price: 998, image: pro1 },
        { id: 2, name: 'Nike Airmax 270 react', price: 990, image: pro2 },
      ];
  
      const initialCart = initialProducts.map(product => ({
        ...product,
        quantity: 1,
      }));
      setCart(initialCart);
    }, []); // Empty dependency array to run only on mount
  
    const increaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    const decreaseQuantity = (id) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
      );
    };
  
    const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <div>
      <CartDisplay cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
<div className='w-full flex justify-end pr-12 '>

<div class="  p-6 w-[400px]  mt-5">
                <div class="flex items-center justify-between w-full mb-2">
                    <p class="font-normal text-sm  ">Sub Total</p>
                    <h6 class="font-semibold text-sm  text-gray-900">${totalCost.toFixed(2)}</h6>
                </div>
                <div class="flex items-center justify-between w-full pb-1 border-b border-gray-200">
                    <p class="font-normal text-sm leading-8 ">Delivery Charge</p>
                    <h6 class="font-semibold text-sm leading-8 text-gray-900">Free</h6>
                </div>
                <div class="flex items-center justify-between w-full py-4">
                    <p class="font-manrope font-medium text-xl leading-9 text-gray-900">Total</p>
                    <h6 class="font-manrope font-medium text-xl leading-9 ">${totalCost.toFixed(2)}</h6>
                </div>
                <div className='p-2 bg-[#33A0FF] hover:bg-[#6aa3d4] text-white'>
                    <button className='font-medium' > Check out </button>
                </div>
            </div>
           
    </div>





    </div>
  );
};

export default ShoppingCart;