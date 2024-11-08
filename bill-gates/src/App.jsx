import React from 'react';
import Balance from './components/Balance';
import ProductList from './components/ProductList';
import Receipt from './components/Receipt';
import { useSpendingStore } from './hooks/useSpendingStore';

const App = () => {
  const products = useSpendingStore((state) => state.products);

  return (
    <div
      style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem',
      }}
    >
      <Balance />
      <ProductList products={products} />
      <Receipt />
    </div>
  );
};

export default App;