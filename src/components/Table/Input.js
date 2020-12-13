import { useState } from 'react';
import { useNutritionix } from '../../providers';
import { Icon } from '../Icon';

export function Input({
                          autocomplete,
                          name,
                          type = 'text',
                          value,
                          onSuggestion,
                          onUpdate,
                          ...props
                      }) {

    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const nutritionix = useNutritionix();

    function handleBlur(e) {
        let {
            name,
            value: val,
        } = e.currentTarget;

        if (!isNaN(val)) {
            val = parseFloat(val);
        }

        if (val !== value) {
            onUpdate(name, val);
        }

        setTimeout(setSuggestions, 100, []);
    }

    function handleChange(e) {
        const {
            value,
        } = e.currentTarget;

        if (autocomplete === 'nutritionix') {
            setLoading(true);
            nutritionix.search(value)
                .then(foods => {
                    setSuggestions(foods);
                    setLoading(false);
                });
        }
    }

    return <div className="relative">
        <input className="pl-1 w-full" defaultValue={autocomplete ? value : undefined} name={name} type={type} value={autocomplete ? undefined : value} onBlur={handleBlur} onChange={handleChange} {...props}/>
        {loading && (
            <Icon className="absolute animate-spin -mt-2 right-1 top-1/2 z-10" name="circle-notch"/>)}
        <ul className="absolute bg-gray-300 left-0 top-full w-full z-10">
            {!loading && suggestions.map((suggestion, index) =>
                <li className="m-1" key={index}>
                    <button className="bg-gray-100 px-1 text-left w-full hover:bg-gray-200" type="button" onClick={() => onSuggestion(suggestion)}>
                        {suggestion.name}
                    </button>
                </li>)}
        </ul>
    </div>;

}