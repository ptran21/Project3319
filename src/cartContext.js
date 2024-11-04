import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => setCart((prev) => [...prev, item]);
    const removeFromCart = (item) => {
        setCart((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
    };

    const cartTotal = cart.reduce((total, item) => total + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
