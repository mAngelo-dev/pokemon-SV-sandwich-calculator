import {ReactElement} from "react";
import dataIngredients from "../assets/ingredients-data.json";
import Ingredient from "../interfaces/ingredient.ts";

function Ingredients(): ReactElement {

    return (
        <>
            <div>
                {dataIngredients.data.map((ingredient: Ingredient) => {
                    return (
                        <div key={ingredient.name}>
                            <h2>{ingredient.name}</h2>
                            <img src={ingredient.img} alt={ingredient.name} />
                            <h3>Flavors</h3>
                            <ul>
                                {ingredient.flavors.map((flavor) => {
                                    return <li key={flavor.flavor}>{flavor.flavor}: {flavor.value}</li>
                                })}
                            </ul>
                            <h3>Meal Powers</h3>
                            <ul>
                                {ingredient.meal_powers.map((meal_power) => {
                                    return <li key={meal_power.power}>{meal_power.power}: {meal_power.value}</li>
                                })}
                            </ul>
                            <h3>Type Boosts</h3>
                            <ul>
                                {ingredient.type_boosts.map((type_boost) => {
                                    return <li key={type_boost.type}>{type_boost.type}: {type_boost.value}</li>
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Ingredients;