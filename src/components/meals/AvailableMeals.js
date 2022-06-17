// Imports
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MealItem from "./MealItem";

// Component
const AvailableMeals = () => {

	// State
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState();

	// Get data
	useEffect(() => {
		// Fetch data from firebase
		const fetchMeals = async() => {
			try {
				const response = await fetch('https://ms-food-order-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
				// Error ?
				if (!response.ok){
					throw new Error('Something went wrong, wait a while and try to refresh...');
				}
				const data = await response.json();
				// Firebase send collection of objects
				const mealsArray = [];
				for (const key in data){
					mealsArray.push({
						id:key,
						name:data[key].name,
						description:data[key].description,
						price:data[key].price
					});
				}
				setMeals(mealsArray);
				setTimeout(() => {
					setIsLoading(false);
				},100);
			} catch (error){
				setIsLoading(false);
				setIsError(error.message);
			}
		};
		// Init ,-)
		/* We can also remove try/catch block from the function, and because 
		async function returns a promise, catch the error on the function :
		fetchMeals.catch((error) => {
			setIsLoading(false);
			setIsError(error.message);
		}); */
		fetchMeals();
	},[]);

	// Returns
	if (isLoading){
		return(
			<Wrapper className="meals-loading">
				<p>Loading...</p>
			</Wrapper>
		);
	}
	if (isError){
		return(
			<Wrapper className="meals-error">
				<p>{ isError }</p>
			</Wrapper>
		);
	}
	return(
		<Wrapper className="card">
			<ul>
				{
					meals.map((meal) => {
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
	&.meals-loading{
		text-align: center;
		color: white;
	}
	&.meals-error{
		text-align: center;
		color: #f1c40f;
	}
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