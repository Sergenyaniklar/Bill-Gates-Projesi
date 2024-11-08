import React from 'react';
import { useSpendingStore } from '../hooks/useSpendingStore';

const Receipt = () => {
  const { purchases, products } = useSpendingStore();

  const purchasedItems = Object.entries(purchases)
    .filter(([_, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const product = products.find((p) => p.id === id);
      return { ...product, quantity };
    });

  const total = purchasedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        padding: '1.5rem',
        marginTop: '2rem',
      }}
    >
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Your Receipt
      </h2>
      {purchasedItems.map((item) => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}
        >
          <span>{item.name} x{item.quantity}</span>
          <span style={{ color: '#00c853' }}>
            ${(item.price * item.quantity).toLocaleString()}
          </span>
        </div>
      ))}
      <div
        style={{
          borderTop: '1px solid #e5e7eb',
          marginTop: '1rem',
          paddingTop: '1rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontWeight: 'bold',
          }}
        >
          <span>TOTAL</span>
          <span style={{ color: '#00c853' }}>
            ${total.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Receipt;