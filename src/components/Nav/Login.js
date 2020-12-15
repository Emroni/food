import { useState } from 'react';
import { useAuth } from '../../providers';
import { Icon } from '../';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);
    const auth = useAuth();

    function handleLogin(e) {
        e.preventDefault();
        auth.login(email, password);
    }

    return <div>
        <button className="p-3" type="button" onClick={() => setOpen(true)}>
            <Icon name="user-circle"/>
        </button>
        {open && (
            <div className="fixed h-full left-0 top-0 w-full z-50">
                <div className="flex h-full items-center justify-center">
                    <div className="absolute bg-black bg-opacity-70 h-full left-0 top-0 w-full z-40" onClick={() => setOpen(false)}/>
                    <form className="bg-gray-900 p-4 w-full max-w-sm relative z-50" onSubmit={handleLogin}>
                        <input className="block mb-2 p-2 text-black w-full" disabled={auth.authenticating} name="email" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        <input className="block mb-2 p-2 text-black w-full" disabled={auth.authenticating} minLength={6} name="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                        <button className="bg-gray-700 w-full p-2 hover:bg-gray-600" disabled={auth.authenticating || !email || password.length < 6} type="submit">Login</button>
                        {auth.error && (
                            <div className="p-2 text-red-500">{auth.error}</div>)}
                    </form>
                </div>
            </div>)}
    </div>;

}