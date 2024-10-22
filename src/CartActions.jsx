import React from 'react';

const CartActions = ({ addItem }) => {
  const products = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
  ];

  return (
    <div>
      <h2>Add Products</h2>
      {products.map((product) => (
        <button key={product.id} onClick={() => addItem(product)}>
          Add {product.name} (${product.price})
        </button>
      ))}
    </div>
  );
};

export default CartActions;