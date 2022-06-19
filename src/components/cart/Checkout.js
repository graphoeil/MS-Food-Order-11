// Imports
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useCartContext } from "../../store/cart-context";

// Validation methods
const isEmpty = (value) => {
	return value.trim() === '';
};
const isNotFiveDigit = (value) => {
	return value.trim().length < 5;
};

// Component
const Checkout = ({ submitOrder }) => {

	// Context
	const { closeCart } = useCartContext();

	// Ref, uncontrolled form, no live validation
	const nameRef = useRef();
	const streetRef = useRef();
	const postcodeRef = useRef();
	const cityRef = useRef();

	// State for showing errors messages
	const [formInputsValidity, setFormInputsValidity] = useState({
		name:true,
		street:true,
		postcode:true,
		city:true
	});

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		// Get values from input ref
		const name = nameRef.current.value;
		const street = streetRef.current.value;
		const postcode = postcodeRef.current.value;
		const city = cityRef.current.value;
		// Validation
		const nameIsValid = !isEmpty(name);
		const streetIsValid = !isEmpty(street);
		const postcodeIsValid = !isNotFiveDigit(postcode);
		const cityIsValid = !isEmpty(city);
		// Show errors
		setFormInputsValidity({
			name:nameIsValid,
			street:streetIsValid,
			postcode:postcodeIsValid,
			city:cityIsValid
		});
		// Form is valid ?
		const formIsValid = nameIsValid && streetIsValid && postcodeIsValid && cityIsValid;
		// Is errors ?
		if (!formIsValid){
			return;
		}
		// Submit cart data
		submitOrder({ name, street, postcode, city });
		// Reset
		nameRef.current.value = '';
		streetRef.current.value = '';
		postcodeRef.current.value = '';
		cityRef.current.value = '';
	};

	// Return
	return(
		<Wrapper onSubmit={ handleSubmit }>

			{/* Name */}
			<div className={ `checkControl ${ !formInputsValidity.name ? 'invalid' : '' }` }>
				<label htmlFor="name">Your name</label>
				<input type="text" id="name" ref={ nameRef } />
				{ !formInputsValidity.name && <p>Please enter a valid name</p> }
			</div>
			{/* Name */}

			{/* Adress */}
			<div className={ `checkControl ${ !formInputsValidity.street ? 'invalid' : '' }` }>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={ streetRef } />
				{ !formInputsValidity.street && <p>Please enter a valid street</p> }
			</div>
			<div className={ `checkControl ${ !formInputsValidity.postcode ? 'invalid' : '' }` }>
				<label htmlFor="postcode">Postcode</label>
				<input type="text" id="postcode" ref={ postcodeRef } />
				{ !formInputsValidity.postcode && <p>Please enter a valid postcode</p> }
			</div>
			<div className={ `checkControl ${ !formInputsValidity.city ? 'invalid' : '' }` }>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={ cityRef } />
				{ !formInputsValidity.city && <p>Please enter a valid city</p> }
			</div>
			{/* Adress */}

			{/* Buttons */}
			<div className="checkActions">
				<button type="button" onClick={ closeCart }>
					Cancel
				</button>
				<button type="submit" className="submit" onClick={ handleSubmit }>
					Confirm
				</button>
			</div>
			{/* Buttons */}

		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	margin: 1rem 0;
	height: 19rem;
	overflow: auto;
	.checkControl{
		margin-bottom: 0.5rem;
		label{
			font-weight: bold;
			margin-bottom: 0.25rem;
			display: block;
		}
		input{
			font: inherit;
			border: 1px solid #ccc;
			border-radius: 4px;
			width: 20rem;
			max-width: 100%;
		}
		p{
			color: #ca3e51;
		}
	}
	.checkActions{
		display: flex;
		justify-content: flex-end;
		gap: 1rem;
		button{
			font: inherit;
			color: #5a1a01;
			cursor: pointer;
			background-color: transparent;
			border: none;
			border-radius: 25px;
			padding: 0.5rem 2rem;
			&:hover, &:active{
				background-color: #ffe6dc;
			}
			&.submit{
				border: 1px solid #5a1a01;
				background-color: #5a1a01;
				color: white;
				&:hover, &:active{
					background-color: #7a2706;
				}
			}
		}
	}
	.invalid{
		label{
			color: #ca3e51;
		}
		input{
			border-color: #aa0b20;
			background-color: #ffeff1;
		}
	}
`;

// Export
export default Checkout;