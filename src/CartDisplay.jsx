import React from 'react';

const CartDisplay = ({ cart, increaseQuantity, decreaseQuantity }) => {
  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <section className="relative ">
      <div className="w-[90vw] px-2 md:px-5 lg:px-6 mx-auto">
        <div className="hidden font-semibold lg:grid grid-cols-2 py-5">
          <div className="text-lg mr-[250px] font-semibold">Product</div>
          <p className="text-lg leading-8 flex items-center justify-between">
            <span className="w-full font-semibold max-w-[200px] text-center">Unit</span>
            <span className="w-full font-semibold  max-w-[260px] text-center">Quantity</span>
            <span className="w-full font-semibold max-w-[200px] text-center">Total</span>
          </p>
        </div>

        {cart.map((item) => (
          <div key={item.id} className="grid font-medium grid-cols-2 lg:grid-cols-2 min-[550px]:gap-6 border-t border-b border-gray-200 py-2">
            <div className="flex items-center flex-col h-[110px] min-[550px]:flex-row gap-3 w-full">
              <div className="img-box">
                <img src={item.image } alt={item.name} className="w-[134px] h-[85px] rounded-xl object-cover" />
              </div>
              <div className=" w-full max-w-sm">
                <h5 className="mr-[150px] leading-8 text-black">{item.name}</h5>
              </div>
            </div>
            <div className="flex items-center flex-col min-[550px]:flex-row w-full gap-2">
              <h6 className=" text-[18px] leading-9 text-black w-full text-center">
                ${item.price.toFixed(2)}
              </h6>
              <div className="flex items-center w-full  justify-center">
              <div className="flex items-center w-full justify-center">
  <button
    onClick={() => decreaseQuantity(item.id)}
    className="group h-[30px]  px-3 py-[6px]  bg-[#F6F7F8]  flex items-center justify-center  transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50  text-[#33A0FF] font-semibold  "
  >
    -
  </button>
  <input
    type="text"
    value={item.quantity}
    readOnly
    className=" outline-none h-[30px] text-gray-900 font-semibold text-lg bg-[#F6F7F8] w-full max-w-[40px] placeholder:text-gray-900 text-center bg-transparent"
  />
  <button
    onClick={() => increaseQuantity(item.id)}
    className="group h-[30px] bg-[#F6F7F8] px-3 py-[8px] text-[#33A0FF] font-semibold  flex items-center justify-center  transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
  >
    +
  </button>
</div>
              </div>
              <h6 className="  text-[18px] leading-9 w-full text-center">
                ${(item.price * item.quantity).toFixed(2)}
              </h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CartDisplay;