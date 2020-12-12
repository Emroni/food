import { useDatabase } from '../../providers';

export default function Stores() {

    const db = useDatabase();

    return <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            {db.stores.map((meal, index) =>
                <tr key={index}>
                    <td>{meal.name}</td>
                </tr>)}
        </tbody>
    </table>;

}