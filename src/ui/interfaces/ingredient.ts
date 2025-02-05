interface Ingredient {
    name: string;
    img: string;
    flavors: Array<{flavor: string, value: number}>;
    meal_powers: Array<{power: string, value: number}>;
    type_boosts: Array<{type: string, value: number}>;
}

export default Ingredient;