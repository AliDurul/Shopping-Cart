import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /*  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    // if cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }else{
      setCart([...cart, newItem])
    }
  }; */

  const addToCart = (id, product) => {
    const newItem = { ...product, amount: 1 };
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      // The item is already in the cart, increase its amount
      const newCart = [...cart];
      newCart[existingItemIndex].amount += 1;
      setCart(newCart);
    } else {
      // The item is not in the cart, add it as a new item
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([])
  }

  const increaseAmount = (id) => {
    const updatedItem = cart.find((item => item.id === id))
    addToCart(updatedItem.id)
  }


  


  const values = { addToCart, removeFromCart, cart ,clearCart,increaseAmount};

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCartContext = () => {
  return useContext(CartContext);
};
