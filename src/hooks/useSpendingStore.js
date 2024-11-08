import { create } from 'zustand';

export const useSpendingStore = create((set) => ({
  balance: 100000000000,
  products: [
    { id: 'skyscraper', name: 'Skyscraper', price: 850000000 },
    { id: 'cruise', name: 'Cruise Ship', price: 930000000 },
    { id: 'nba', name: 'NBA Team', price: 2120000000 },
    { id: 'bigmac', name: 'Big Mac', price: 2 },
    { id: 'echo', name: 'Amazon Echo', price: 99 },
    { id: 'airpods', name: 'Airpods', price: 199 },
    { id: 'drone', name: 'Drone', price: 350 },
    { id: 'bike', name: 'Bike', price: 800 },
    { id: 'horse', name: 'Horse', price: 2500 },
    { id: 'f1', name: 'Formula 1 Car', price: 15000000 },
  ],
  purchases: {},
  buyProduct: (product) => 
    set((state) => {
      const newBalance = state.balance - product.price;
      if (newBalance < 0) return state;
      
      return {
        balance: newBalance,
        purchases: {
          ...state.purchases,
          [product.id]: (state.purchases[product.id] || 0) + 1
        }
      };
    }),
  sellProduct: (product) =>
    set((state) => {
      if (!state.purchases[product.id]) return state;
      
      return {
        balance: state.balance + product.price,
        purchases: {
          ...state.purchases,
          [product.id]: state.purchases[product.id] - 1
        }
      };
    }),
}));