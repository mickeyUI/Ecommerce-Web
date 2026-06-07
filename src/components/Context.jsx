import { createContext, useContext, useState, useMemo } from 'react';
import Products from '../products/products.json';


// 1. Your context object is named CartContext
const CartContext = createContext(undefined);

export function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const product= Products.find(item => item.id == id);
    setCart(prev => {
        const exists= prev.find( eachItem => eachItem.id == product.id);
        if (exists) {
            return prev.map(i => 
                i.id == product.id? {...i, quantity: i.quantity + 1}: i
            )
        }
        return [...prev, {...product, quantity: 1}];
    })
  }
  const totalItems= () => {
    return cart;
  }
  

  return (
   
    <CartContext.Provider value={{cart, addToCart, totalItems}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    // 3. FIXED: Updated error message to match this context
    throw new Error('useCart must be used within a ContextProvider');
  }
  
  return context;
}