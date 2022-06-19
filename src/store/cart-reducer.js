// Reducer function
const cartReducer = (state, action) => {
	// Open / Close cart
	if (action.type === 'OPEN_CART'){
		return { ...state, showCart:true };
	}
	if (action.type === 'CLOSE_CART'){
		return { ...state, showCart:false };
	}
	// Add / remove item
	if (action.type === 'ADD_ITEM'){
		const newItem = action.payload;
		// Update total amount
		const updatedTotalAmount = state.totalAmount + (newItem.price * newItem.amount);
		// Already in the cart ?
		const existingItemIndex = state.items.findIndex((item) => {
			return item.id === newItem.id;
		});
		const existingItem = state.items[existingItemIndex];
		let updatedItems;
		if (existingItem){
			// Increase amount
			const updatedItem = {
				...existingItem,
				amount:newItem.amount + existingItem.amount
			};
			updatedItems = [ ...state.items ];
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			// Add new item
			updatedItems = state.items.concat(newItem);
		}
		return { ...state, items:updatedItems, totalAmount:updatedTotalAmount };
	};
	if (action.type === 'REMOVE_ITEM'){
		// ID
		const id = action.payload;
		// Get item
		const existingItemIndex = state.items.findIndex((item) => {
			return item.id === id;
		});
		const existingItem = state.items[existingItemIndex];
		// Update total amount
		// With decrease of -1 then we decrease totalAmount of the price
		const updatedTotalAmount = state.totalAmount - existingItem.price;
		let updatedItems;
		if (existingItem.amount === 1){
			// Remove item from cart
			updatedItems = state.items.filter((item) => {
				return item.id !== id;
			});
		} else {
			// Apply decrease
			const updatedItem = { ...existingItem, amount:existingItem.amount - 1 };
			updatedItems = [ ...state.items ];
			updatedItems[existingItemIndex] = updatedItem;
		}
		// Return
		return { ...state, items:updatedItems, totalAmount:updatedTotalAmount };
	}
	if (action.type === 'CLEAR_CART'){
		return { ...state, items:[], totalAmount:0 };
	}
	// Error
	throw new Error(`No actions matches ${ action.type }`);
};

// Export
export default cartReducer;