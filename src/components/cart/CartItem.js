// Imports
import React from "react";
import styled from "styled-components";

// Component
const CartItem = (props) => {

	// Variables
	const { name, price, amount, remove, add } = props;
	const formatedPrice = `$${ price.toFixed(2) }`;

	// Return
	return(
		<Wrapper>
			<div>
				<h2>{ name }</h2>
				<div className="summary">
				<span className="price">{ formatedPrice }</span>
				<span className="amount">x { amount }</span>
				</div>
			</div>
			<div className="itemActions">
				<button onClick={ remove }>−</button>
				<button onClick={ add }>+</button>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid #8a2b06;
	padding: 1rem 0;
	margin: 1rem 0;
	h2{
		margin: 0 0 0.5rem 0;
		color: #363636;
	}
	.summary{
		width: 10rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.price{
		font-weight: bold;
		color: #8a2b06;
	}
	.amount{
		font-weight: bold;
		border: 1px solid #ccc;
		padding: 0.25rem 0.75rem;
		border-radius: 6px;
		color: #363636;
	}
	.itemActions{
		display: flex;
		flex-direction: column;
		@media only screen and (min-width:768px){
			flex-direction: row;
		}
		button{
			font: inherit;
			font-weight: bold;
			font-size: 1.25rem;
			color: #8a2b06;
			border: 1px solid #8a2b06;
			width: 3rem;
			text-align: center;
			border-radius: 6px;
			background-color: transparent;
			cursor: pointer;
			margin-left: 1rem;
			margin: 0.25rem;
			&:hover, &:active{
				background-color: #8a2b06;
				color: white;
			}
		}
	}
`;

// Export
export default CartItem;