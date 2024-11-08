import React from 'react';
import { useSpendingStore } from '../hooks/useSpendingStore';

const Balance = () => {
  const balance = useSpendingStore((state) => state.balance);

  return (
    <div
      style={{
        backgroundColor: '#00c853',
        color: '#ffffff',
        padding: '1rem',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
      }}
    >
      ${balance.toLocaleString()}
    </div>
  );
};

export default Balance;