import { useEffect, useState } from 'react';
import * as gravatar from 'gravatar';
import clsx from 'clsx';
import { useAuth } from '../../providers';
import { Image, Loader } from '../';

export default function Account() {

    const [email, setEmail] = useState('');
    const [img, setImg] = useState(null);
    const [open, setOpen] = useState(false);
    const [password, setPassword] = useState('');
    const auth = useAuth();

    function handleLogin(e) {
        e.preventDefault();
        auth.login(email, password);
    }

    function handleLogout() {
        auth.logout();
        setOpen(false);
    }

    useEffect(() => {
        setOpen(false);
        if (!auth.user) {
            setImg(null);
        }
    }, [
        auth.user,
    ]);

    useEffect(() => {
        if (auth.user && auth.user.email) {
            const img = gravatar.url(auth.user.email, {
                d: 404,
                s: 20,
            }, true);
            setImg(img);
        }
    }, [
        auth.user,
        img,
    ]);

    const buttonClasses = clsx('flex h-full items-center px-2 hover:text-gray-300', {
        'bg-opacity-10 bg-white': open,
    });

    return <div className="h-full relative">
        <button className={buttonClasses} type="button" onClick={() => setOpen(true)}>
            <Image circular icon="user-circle" size="xl" src={img}/>
        </button>
        {open && <>
            <div className="fixed h-full left-0 top-0 w-full z-40" onClick={() => setOpen(false)}/>
            <div className="absolute bg-white border right-0 top-full text-sm z-50">
                {auth.user ?
                    <div className="text-black whitespace-nowrap ">
                        <button className="p-2 hover:bg-gray-100" type="button" onClick={handleLogout}>Log out</button>
                    </div> :
                    <form className="p-4 w-48 relative z-50" onSubmit={handleLogin}>
                        <input className="block border mb-2 p-2 text-black w-full" disabled={auth.authenticating} name="email" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
                        <input className="block border mb-2 p-2 text-black w-full" disabled={auth.authenticating} minLength={6} name="password" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                        <button className="bg-gray-700 w-full p-2 text-white hover:bg-gray-600" disabled={auth.authenticating || !email || password.length < 6} type="submit">
                            {auth.authenticating ?
                                <Loader/> : 'Log in'}
                        </button>
                        {auth.error && (
                            <div className="p-2 text-red-500">{auth.error}</div>)}
                    </form>}
            </div>
        </>}
    </div>;

}