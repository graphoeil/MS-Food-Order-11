// Imports
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../../store/cart-context";
import CartIcon from "../cart/CartIcon";

// Component
const HeaderCartButton = ({ openCart }) => {

	// Context
	const { items } = useCartContext();

	// Number of items
	const numberOfItems = items.reduce((acc, current) => {
		acc += current.amount;
		return acc;
	},0);

	// Anime button on items change
	const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
	useEffect(() => {
		setButtonIsHighlighted(true);
		const timer = setTimeout(() => {
			setButtonIsHighlighted(false);
		},[300]);
		return () => {
			clearTimeout(timer);
		}
	},[items]);

	// Return
	return(
		<Wrapper className={ buttonIsHighlighted ? 'bump' : '' } onClick={ openCart }>
			<span>
				<CartIcon/>
			</span>
			<span>Your cart</span>
			<span>{ numberOfItems }</span>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.button`
	cursor: pointer;
	font: inherit;
	border: none;
	background-color: #4d1601;
	color: white;
	padding: 0.75rem 3rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-radius: 25px;
	font-weight: bold;
	&:hover, &:active{
		background-color: #2c0d00;
		span:last-child{
			background-color: #92320c;
		}
	}
	span:first-child {
		width: 1.35rem;
		height: 1.35rem;
		margin-right: 0.5rem;
	}
	span:last-child{
		background-color: #b94517;
		padding: 0.25rem 1rem;
		border-radius: 25px;
		margin-left: 1rem;
		font-weight: bold;
	}
	&.bump{
		animation: bump 300ms ease-out;
		@keyframes bump {
			0% { transform: scale(1); }
			10% { transform: scale(0.9); }
			30% { transform: scale(1.1); }
			50% { transform: scale(1.15); }
			100% { transform: scale(1); }
		}
	}
`;

// Export
export default HeaderCartButton;