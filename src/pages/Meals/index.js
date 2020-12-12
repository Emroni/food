import { useDatabase } from '../../providers';

export default function Meals() {

    const db = useDatabase();

    return <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {db.meals.map((meal, index) =>
                <tr key={index}>
                    <td>{meal.name}</td>
                </tr>)}
        </tbody>
    </table>;

}