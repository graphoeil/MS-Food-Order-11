// Imports
import React from "react";
import styled from "styled-components";
import mealsImage from "../../assets/meals.jpg";

// Component
const HeaderImage = () => {

	// Return
	return(
		<Wrapper>
			<img src={ mealsImage } alt="table with food" />
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.div`
	width: 100%;
	height: 25rem;
	z-index: 0;
	overflow: hidden;
	img{
		width: 110%;
		height: 100%;
		object-fit: cover;
		transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
	}
`;

// Export
export default HeaderImage;