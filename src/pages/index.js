import { Nav } from '../components';
import Ingredients from './Ingredients';
import Meals from './Meals';
import Restaurants from './Restaurants';
import Stores from './Stores';

export default function Pages() {

    return <>
        <Nav/>
        <main className="container mx-auto p-3">
            <Ingredients/>
            <Meals/>
            <Restaurants/>
            <Stores/>
        </main>
    </>;

}