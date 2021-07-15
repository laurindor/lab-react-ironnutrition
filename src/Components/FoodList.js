import React, { useState } from 'react';
import Allfoods from '../foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import SearchBar from './SearchBar';

export default function FoodList() {

    const [foods, setFoods] = useState(Allfoods)
    function addFood(newFood){
        const updatedFoodData = [ ...foods, newFood]
        setFoods(updatedFoodData)
    }


     const filterFood = (query) => {
         if (!query) {
             setFoods(Allfoods)
             return
        }
        const filteredArrayFoods = foods.filter((food) => {
            const foodName = food.name.toLowerCase ();
            return foodName.includes(query);
        });
            setFoods(filteredArrayFoods)
     };


    return(
        <div>  
        <SearchBar 
            filterFood = { filterFood }
        /> 
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

