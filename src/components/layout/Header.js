// Imports
import React from "react";
import styled from "styled-components";
import HeaderCartButton from "./HeaderCartButton";
import HeaderImage from "./HeaderImage";

// Component
const Header = ({ openCart }) => {

	// Return
	return(
		<React.Fragment>
			<Wrapper>
				<h1>ReactMeals</h1>
				<HeaderCartButton openCart={ openCart }/>
			</Wrapper>
			<HeaderImage/>
		</React.Fragment>
	);

};

// Styled
const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	background-color: #8a2b06;
	color: white;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10%;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	z-index: 10;
`;

// Export
export default Header;