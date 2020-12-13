import { useState } from 'react';
import { useDatabase } from '../../providers';
import { Icon } from '../';

export default function Login() {

    const [password, setPassword] = useState('');
    const db = useDatabase();

    function handleLogin(e) {
        e.preventDefault();

        if (password === process.env.REACT_APP_PASSWORD) {
            db.login();
        }

        setPassword('');
    }

    return <div className="group p-3 relative">
        <Icon name="user-circle"/>
        <div className="absolute bg-gray-700 hidden p-2 right-0 top-full group-hover:block" onSubmit={handleLogin}>
            <form className="flex" onSubmit={handleLogin}>
                <input className="p-2 text-black" name="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                <button className="p-2" type="submit">
                    <Icon name="sign-in-alt"/>
                </button>
            </form>
        </div>
    </div>;

}