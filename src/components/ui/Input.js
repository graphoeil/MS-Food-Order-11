// Imports
import React from "react";
import styled from "styled-components";

// Component
const Input = React.forwardRef((props, ref) => {

	// Variables
	const { input, label } = props;

	// Return
	return(
		<Wrapper>
			<label htmlFor={ input.id }>{ label }</label>
			<input ref={ ref } { ...input }/>
		</Wrapper>
	);

});

// Styled
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;
	label{
		font-weight: bold;
		margin-right: 1rem;
	}
	input{
		width: 3rem;
		border-radius: 5px;
		border: 1px solid #ccc;
		font: inherit;
		padding-left: 0.5rem;
	}
`;

// Export
export default Input;