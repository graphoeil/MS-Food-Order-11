// Imports
import React, { useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../../store/cart-context";
import Modal from "../ui/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

// Component
const Cart = ({ closeCart }) => {

	// Show / hide order form
	const [isCheckinOut, setIsCheckingOut] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

	// Context
	const { items, totalAmount, addItem, removeItem, clearCart } = useCartContext();

	// Add / remove item
	const add = (item) => {
		// amount:1 because in reducer => amount:newItem.amount + existingItem.amount
		// if we code addItem(item) it'll double on every click, because it'll take
		// actual amount + actual amount and not 1 ,-)
		addItem({ ...item, amount:1 });
	};
	const remove = (id) => {
		removeItem(id);
	};

	// Order button
	const handleOrder = () => {
		setIsCheckingOut(true);
	};

	// Submit order to firebase
	const submitOrder = async(userData) => {
		setIsSubmitting(true);
		// Send data
		// In reality we must handle error with try/catch block
		await fetch('https://ms-food-order-default-rtdb.europe-west1.firebasedatabase.app/orders.json',{
			method:'POST',
			body:JSON.stringify({
				user:userData,
				orderedItems:items
			})
		});
		clearCart();
		setIsSubmitting(false);
		setDidSubmit(true);
	};

	// Return
	return(
		// We use props instead of contex with the modal, so we can use the modal
		// component with other component (lightbox, ...), onClose props will run
		// associate methods ,-)
		// closeCart goes back to App, then goest back to context => function closeCart ,-)
		<Modal onClose={ closeCart }>
			{
				isSubmitting && <p>Sending order data...</p>
			}
			{
				didSubmit && <div style={ { textAlign:'center' } }>
					<p>Successfully sent the order!</p>
					<button className="successOrderBtn" onClick={ closeCart }>
						Close
					</button>
				</div>
			}
			{
				!isSubmitting && !didSubmit && <CartWrapper>
					<ul>
						{
							items.map((item) => {
								const { name, price, amount } = item;
								return <CartItem key={ item.id } name={ name } price={ price }  amount={ amount } 
									add={ () => { add(item); } } remove={ () => { remove(item.id); } }/>
							})
						}
					</ul>
					<div className="total">
						<span>Total amount</span>
						<span>${ totalAmount.toFixed(2) }</span>
					</div>
					{
						isCheckinOut && <Checkout submitOrder={ submitOrder }/>
					}
					{
						!isCheckinOut && <div className="actions">
							<button className="button--alt" onClick={ closeCart }>
								Close
							</button>
							{
								items.length > 0 && <button onClick={ handleOrder } className="button">
									Order
								</button>
							}
						</div>
					}
				</CartWrapper>
			}
		</Modal>
	);

};

// Styled
const CartWrapper = styled.div`
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		max-height: 20rem;
		overflow: auto;
	}
	.total{
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: bold;
		font-size: 1.5rem;
		margin: 1rem 0;
	}
	.actions{
		text-align: right;
		button{
			font: inherit;
			cursor: pointer;
			background-color: transparent;
			border: 1px solid #8a2b06;
			padding: 0.5rem 2rem;
			border-radius: 25px;
			margin-left: 1rem;
			&:hover, &:active{
				background-color: #5a1a01;
				border-color: #5a1a01;
				color: white;
			}
		}
		.button--alt {
			color: #8a2b06;
		}
		.button {
			background-color: #8a2b06;
			color: white;
		}
	}
`;

// Export
export default Cart;