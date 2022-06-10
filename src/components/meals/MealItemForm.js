// Imports
import React, { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../ui/Input";

// Component
const MealItemForm = ({ id, addToCart }) => {

	// State
	const [amountIsValid, setAmountIsValid] = useState(true);

	// Submit form
	const submitForm = (e) => {
		e.preventDefault();
		const enteredAmount = Number(amountInputRef.current.value);
		if (enteredAmount < 1 || enteredAmount > 5){
			setAmountIsValid(false);
			return;
		}
		addToCart(enteredAmount);
	};

	// Uncontrolled form ...
	const amountInputRef = useRef();

	// Return
	return(
		<Wrapper onSubmit={ submitForm }>
			<Input ref={ amountInputRef } label="Amount" input={ {
				id:`amount_${ id }`,
				type:'number',
				min:'1',
				max:'5',
				step:'1',
				defaultValue:'1'
			} } />
			<button type="submit">+ Add</button>
			{
				!amountIsValid && <p>Please enter a valid amount</p>
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	text-align: right;
	button{
		font: inherit;
		cursor: pointer;
		background-color: #8a2b06;
		border: 1px solid #8a2b06;
		color: white;
		padding: 0.25rem 2rem;
		border-radius: 20px;
		font-weight: bold;
		&:hover, &:active{
			background-color: #641e03;
			border-color: #641e03;
		}
	}
`;

// Export
export default MealItemForm;