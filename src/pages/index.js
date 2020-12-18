import { Nav } from '../components';
import Ingredients from './Ingredients';
import Meals from './Meals';
import Restaurants from './Restaurants';
import Stores from './Stores';

export default function Pages() {

    return <>
        <Nav/>
        <main className="container mx-auto p-3 sm:py-4 md:py-5 lg:py-6">
            <Ingredients/>
            <Meals/>
            <Restaurants/>
            <Stores/>
        </main>
    </>;

}