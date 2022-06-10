// Imports
import React from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

// Data
const DUMMY_MEALS = [
	{
	  id: 'm1',
	  name: 'Sushi',
	  description: 'Finest fish and veggies',
	  price: 22.99
	},
	{
	  id: 'm2',
	  name: 'Schnitzel',
	  description: 'A german specialty !',
	  price: 16.5
	},
	{
	  id: 'm3',
	  name: 'Barbecue Burger',
	  description: 'American, raw, meaty',
	  price: 12.99
	},
	{
	  id: 'm4',
	  name: 'Green Bowl',
	  description: 'Healthy... and green...',
	  price: 18.99
	}
];

// Component
const AvailableMeals = () => {

	// Return
	return(
		<Wrapper className="card">
			<ul>
				{
					DUMMY_MEALS.map((meal) => {
						return <MealItem key={ meal.id } { ...meal }/>
					})
				}
			</ul>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.section`
	max-width: 60rem;
	width: 90%;
	margin: 2rem auto;
	animation: meals-appear 1s ease-out forwards;
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	@keyframes meals-appear {
		from {
			opacity: 0;
			transform: translateY(3rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;

// Export
export default AvailableMeals;