// Imports
import React, { useContext, useReducer } from "react";
import cartReducer from "./cart-reducer";

// Initial state
const initialState = {
	items:[],
	totalAmount:0,
	showCart:false
};

// Context
const CartContext = React.createContext();

// Provider
const CartProvider = ({ children }) => {

	// Reducer
	const [state, dispatch] = useReducer(cartReducer, initialState);

	// Methods
	const addItem = (item) => {
		dispatch({ type:'ADD_ITEM', payload:item });
	};
	const removeItem = (id) => {
		dispatch({ type:'REMOVE_ITEM', payload:id });
	};
	const clearCart = () => {
		dispatch({ type:'CLEAR_CART' });
	};
	const openCart = () => {
		dispatch({ type:'OPEN_CART' });
	};
	const closeCart = () => {
		dispatch({ type:'CLOSE_CART' });
	};

	// Return
	return <CartContext.Provider value={ {
		...state, addItem, removeItem, clearCart, openCart, closeCart
	} }>{ children }</CartContext.Provider>

};

// Custom hook
export const useCartContext = () => {
	return useContext(CartContext);
};

// Provider export
export { CartProvider };