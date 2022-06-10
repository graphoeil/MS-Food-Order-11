// Imports
import React from "react";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import Cart from "./components/cart/Cart";
import { useCartContext } from "./store/cart-context";

// Component
const App = () => {

	// Context
	const { showCart, openCart, closeCart } = useCartContext();

	// Return
	return(
		<React.Fragment>

			{/* Cart */}
			{
				showCart && <Cart closeCart={ closeCart }/>
			}
			{/* Cart */}

			{/* Header */}
			<Header openCart={ openCart }/>
			{/* Header */}

			{/* Meals */}
			<main>
				<Meals/>
			</main>
			{/* Meals */}

		</React.Fragment>
	);

};

// Export
export default App;