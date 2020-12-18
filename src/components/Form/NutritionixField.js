import { useState } from 'react';
import { useField, useFormikContext } from 'formik';
import nutritionix from 'nutritionix-api';
import { Button, Loader } from '../index';

nutritionix.init(process.env.REACT_APP_NUTRITIONIX_APP_ID, process.env.REACT_APP_NUTRITIONIX_API_KEY);

export default function NutritionixField({
                                             name,
                                             label,
                                             ...props
                                         }) {

    const [field] = useField(name);
    const formikContext = useFormikContext();
    const [loading, setLoading] = useState(false);
    const [suggest, setSuggest] = useState(false);
    const [suggestions, setSuggestions] = useState(null);

    async function handleSearch() {
        setLoading(true);
        const result = await nutritionix.natural.search(field.value);
        if (result && result.foods) {
            const suggestions = result.foods.map(food => {
                const multiplier = 100 / food.serving_weight_grams;
                return {
                    calories: Math.round(food.nf_calories * multiplier * 10) / 10,
                    carbs: Math.round(food.nf_total_carbohydrate * multiplier * 10) / 10,
                    fat: Math.round(food.nf_total_fat * multiplier * 10) / 10,
                    name: food.food_name,
                    protein: Math.round(food.nf_protein * multiplier * 10) / 10,
                };
            });
            setSuggest(true);
            setSuggestions(suggestions);
        }
        setLoading(false);
    }

    function handleSelect(suggestion) {
        formikContext.setValues(suggestion);
        setSuggestions(null);
    }

    return <div className="flex relative">
        <input autoComplete="off" className="mr-1 px-2 py-1 w-full" name={name} {...field} {...props} onBlur={() => setSuggest(false)} onFocus={() => setSuggest(true)}/>
        {loading ? (
            <Loader/>) : (
            <Button icon="search" onClick={handleSearch}/>)}
        {suggest && suggestions && (
            <ul className="absolute bg-gray-200 left-0 p-1 top-full w-full">
                {suggestions.map((suggestion, index) =>
                    <li className="bg-gray-100 p-1 hover:bg-gray-300" key={index} onClick={() => handleSelect(suggestion)}>
                        {suggestion.name}
                    </li>)}
            </ul>)}
    </div>;

}