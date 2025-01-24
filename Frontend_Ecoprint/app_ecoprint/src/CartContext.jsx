import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Cargar el carrito desde localStorage al inicializar
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Guardar el carrito en localStorage cada vez que se actualiza
  useEffect(() => { 
  localStorage.setItem('cart', JSON.stringify(cart)); 
  }, [cart]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id
        ?{...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const incrementQuantity = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId
       ? {...item, quantity: item.quantity + 1}
        : item
      ));
  }

  const decrementQuantity = (itemId) => { setCart(cart.map(item => item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item )); };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
