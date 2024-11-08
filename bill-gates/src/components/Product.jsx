import React from 'react';
import { useSpendingStore } from '../hooks/useSpendingStore';

const Product = ({ product }) => {
  const { balance, buyProduct, sellProduct, purchases } = useSpendingStore();
  const quantity = purchases[product.id] || 0;

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'semibold', marginBottom: '0.5rem' }}>
        {product.name}
      </h3>
      <p style={{ color: '#00c853', fontWeight: 'bold', marginBottom: '1rem' }}>
        ${product.price.toLocaleString()}
      </p>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={() => sellProduct(product)}
          disabled={!quantity}
          style={{
            backgroundColor: quantity ? '#ef4444' : '#d1d5db',
            color: quantity ? '#ffffff' : '#6b7280',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
          }}
        >
          Sell
        </button>
        <span style={{ width: '3rem', textAlign: 'center' }}>{quantity}</span>
        <button
          onClick={() => buyProduct(product)}
          disabled={balance < product.price}
          style={{
            backgroundColor: balance >= product.price ? '#00c853' : '#d1d5db',
            color: balance >= product.price ? '#ffffff' : '#6b7280',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
          }}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;