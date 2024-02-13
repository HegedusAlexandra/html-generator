import React from 'react';

const ProductList = ({ products, onIncrement, onDecrement }) => (
  <div>
    {products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p>Mennyiség: {product.quantity}</p>
        <button onClick={() => onDecrement(product.id)}>-</button>
        <button onClick={() => onIncrement(product.id)}>+</button>
      </div>
    ))}
  </div>
);

export default ProductList;