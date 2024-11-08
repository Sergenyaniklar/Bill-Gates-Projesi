import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;