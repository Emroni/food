import { useDatabase } from './providers';

export default function App() {

    const db = useDatabase();

    console.log(db);

    return <div>App</div>;

}