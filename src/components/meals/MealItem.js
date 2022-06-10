// Imports
import React from "react";
import styled from "styled-components";
import { useCartContext } from "../../store/cart-context";
import MealItemForm from "./MealItemForm";

// Component
const MealItem = ({ id, name, description, price }) => {

	// Context
	const { addItem } = useCartContext();

	// Add to cart => context
	const addToCart = (amount) => {
		addItem({ id, name, amount, price });
	};

	// Variables
	const formatedPrice = `$${ price.toFixed(2) }`;

	// Return
	return(
		<Wrapper>
			<div>
				<h3>{ name }</h3>
				<div className="description">{ description }</div>
				<div className="price">{ formatedPrice }</div>
			</div>
			<div>
				<MealItemForm id={ id } addToCart={ addToCart }/>
			</div>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.li`
	display: flex;
	justify-content: space-between;
	margin: 1rem;
	padding-bottom: 1rem;
	border-bottom: 1px solid #ccc;
	h3{
		margin: 0 0 0.25rem 0;
	}
	.description{
		font-style: italic;
	}
	.price{
		margin-top: 0.25rem;
		font-weight: bold;
		color: #ad5502;
		font-size: 1.25rem;
	}
`;

// Export
export default MealItem;