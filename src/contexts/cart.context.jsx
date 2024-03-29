import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);
    
    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
    
}

const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToRemove.id);
    if(existingCartItem && productToRemove.quantity > 1) {
        return cartItems.map((cartItem) => 
            cartItem.id === productToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
        )
    }
    else if(productToRemove.quantity <= 1 ){
        return cartItems.filter(item => item.id !== productToRemove.id);
    }
    else console.log('Item doesnt exist');
}

const removeAllCopies = (cartItems, productToRemove) => {
    return cartItems.filter(item => item.id !== productToRemove.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeAllCopies: () => {},
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    
    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    },[cartItems])
    
    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity  * cartItem.price, 0);
        setCartTotal(newCartTotal);
    },[cartItems])

    const addItemToCart = ( productToAdd ) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemFromCart = ( productToRemove ) => {
        setCartItems(removeCartItem(cartItems, productToRemove));
    }

    const removeAllItems = ( productToRemove ) => {
        setCartItems(removeAllCopies(cartItems, productToRemove));
    }
    

    const value = { isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, removeAllItems, cartItems, cartCount, cartTotal };
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}