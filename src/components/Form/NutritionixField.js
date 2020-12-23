import { useState } from 'react';
import { useField, useFormikContext } from 'formik';
import { Button, Loader } from '../index';
import clsx from 'clsx';

export default function NutritionixField({
                                             name,
                                             label,
                                             ...props
                                         }) {

    const [field] = useField(name);
    const formikContext = useFormikContext();
    const [loading, setLoading] = useState(false);
    const [suggest, setSuggest] = useState(false);
    const [suggestions, setSuggestions] = useState();

    async function request(path, data) {
        setLoading(true);

        const response = await fetch(`https://trackapi.nutritionix.com/v2/${path}`, {
            body: data ? JSON.stringify(data) : null,
            headers: new Headers({
                'Content-Type': 'application/json',
                'x-app-id': process.env.REACT_APP_NUTRITIONIX_APP_ID,
                'x-app-key': process.env.REACT_APP_NUTRITIONIX_API_KEY,
            }),
            method: data ? 'post' : 'get',
        });
        const results = await response.json();

        setLoading(false);
        return results;
    }

    async function handleSearch() {
        const results = await request(`search/instant?query=${field.value}`);
        setSuggest(true);
        setSuggestions(results);
    }

    async function handleSelect(suggestion) {
        let results;
        if (suggestion.nix_item_id) {
            results = await request(`search/item?nix_item_id=${suggestion.nix_item_id}`);

        }  else {
            results = await request('natural/nutrients', {
                query: suggestion.food_name,
            });
        }

        if (results.foods.length) {
            //TODO: Base calculations on volume, weight or unit
            const food = results.foods[0];
            const multiplier = 100 / (food.serving_weight_grams || 1);
            formikContext.setFieldValue('calories', Math.round(food.nf_calories * multiplier * 10) / 10);
            formikContext.setFieldValue('carbs', Math.round(food.nf_total_carbohydrate * multiplier * 10) / 10);
            formikContext.setFieldValue('fat', Math.round(food.nf_total_fat * multiplier * 10) / 10);
            formikContext.setFieldValue('image', food.photo.thumb);
            formikContext.setFieldValue('name', food.food_name);
            formikContext.setFieldValue('protein', Math.round(food.nf_protein * multiplier * 10) / 10);
        }

        setSuggestions(null);
    }

    const inputClasses = clsx('mr-1 px-2 py-1 w-full', {
        'pointer-events-none opacity-50': loading,
    });

    const suggestionsClasses = clsx('p-1 max-h-60 min-h-30 overflow-auto', {
        'pointer-events-none opacity-50': loading,
    });

    return <div className="flex relative">
        <input autoComplete="off" className={inputClasses} name={name} {...field} {...props} onBlur={() => setSuggest(false)} onFocus={() => setSuggest(true)} onKeyDown={() => setSuggestions(null)}/>
        {loading ? (
            <Loader/>) : (
            <Button icon="search" onClick={handleSearch}/>)}
        {suggest && suggestions && (
            <div className="absolute bg-gray-200 left-0 mt-1 p-1 top-full w-full">
                <div className="p-1">{suggestions.common.length} common, {suggestions.branded.length} branded</div>
                <div className={suggestionsClasses}>
                    <div className="bg-gray-300 p-1">Common</div>
                    <ul className="bg-gray-50 p-1">
                        {suggestions.common.map((suggestion, index) =>
                            <li className="p-1 even:bg-gray-100 hover:bg-gray-200" key={index} onClick={() => handleSelect(suggestion)}>
                                {suggestion.food_name}
                            </li>)}
                    </ul>
                    <div className="bg-gray-300 p-1 mt-2">Branded</div>
                    <ul className="bg-gray-50 p-1">
                        {suggestions.branded.map((suggestion, index) =>
                            <li className="p-1 even:bg-gray-100 hover:bg-gray-200" key={index} onClick={() => handleSelect(suggestion)}>
                                {suggestion.food_name}
                            </li>)}
                    </ul>
                </div>
            </div>)}
    </div>;

}