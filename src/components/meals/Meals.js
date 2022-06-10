// Imports
import React from "react";
import MealsSummary from "./MealsSummery";
import AvailableMeals from "./AvailableMeals";

// Component
const Meals = () => {

	// Return
	return(
		<React.Fragment>
			
			{/* Meals summary */}
			<MealsSummary/>
			{/* Meals summary */}

			{/* Available meals */}
			<AvailableMeals/>
			{/* Available meals */}

		</React.Fragment>
	);

};

// Styled

// Export
export default Meals;