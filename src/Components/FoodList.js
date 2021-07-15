import React, { useState } from 'react';
import Allfoods from '../foods.json';
import FoodBox from './FoodBox';


const foodList = [...Allfoods]

export default function FoodList() {
	const [foods, setFoods] = useState(foodList)
    
    return(
        <div>
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


