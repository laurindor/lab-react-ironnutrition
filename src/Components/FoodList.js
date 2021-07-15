import React, { useState } from 'react';
import Allfoods from '../foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';


const foodList = [...Allfoods]

export default function FoodList() {

    const [foods, setFoods] = useState(foodList)
    function addFood(newFood){
        const updatedFoodData = [ ...foods, newFood]
        setFoods(updatedFoodData)
    }
    
    return(
        <div>   
        <AddFood
            addFoodHandler = {addFood}
        />

        {foods.map(food=> 
            <FoodBox 
            key={food.name}
            name={food.name}
            image={food.image}
            calories={food.calories} 

            />
            
        )}
        </div>
    )   
}


