import { createContext, useContext, useState } from 'react';
import nutritionix from 'nutritionix-api';

export const NutritionixContext = createContext(null);

export const useNutritionix = () => useContext(NutritionixContext);

export function NutritionixProvider({children}) {

    const [loading, setLoading] = useState(false);
    nutritionix.init(process.env.REACT_APP_NUTRITIONIX_APP_ID, process.env.REACT_APP_NUTRITIONIX_API_KEY);

    async function search(value) {
        setLoading(true);
        const result = await nutritionix.natural.search(value);
        setLoading(false);
        const foods = (result && result.foods) || [];
        return foods.map(food => {
            const multiplier = 100 / food.serving_weight_grams;
            return {
                calories: Math.round(food.nf_calories * multiplier * 10) / 10,
                carbs: Math.round(food.nf_total_carbohydrate * multiplier * 10) / 10,
                fat: Math.round(food.nf_total_fat * multiplier * 10) / 10,
                name: food.food_name,
                protein: Math.round(food.nf_protein * multiplier * 10) / 10,
            };
        });
    }
    
    const value = {
        loading,
        search,
    };

    return <NutritionixContext.Provider value={value}>
        {children}
    </NutritionixContext.Provider>;

}