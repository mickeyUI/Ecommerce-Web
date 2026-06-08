import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import Products from '../products/products.json';


// 1. Your context object is named CartContext
const CartContext = createContext(undefined);

export function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState();

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
  const removeFromCart= (id) => {
    setCart(prev => {
            return prev.map(i => (i.id == id) && (i.quantity >= 1)? {...i, quantity: i.quantity - 1}: i)
        }
    )
  }
  useEffect(() => {
    const TT= cart?.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
    setTotal(TT);

  }, [cart]);
  
  const clearCart= () => {
    setCart([]);
  }

  const purchase= () => {
    alert("not implemented yet");
  }
  

  return (
   
    <CartContext.Provider value={{cart, total, addToCart, removeFromCart, clearCart, purchase}}>
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