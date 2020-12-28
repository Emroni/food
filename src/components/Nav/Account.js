import { useState } from 'react';
import { useAuth } from '../../providers';
import { Icon } from '../';
import clsx from 'clsx';

export default function Account() {

    const [open, setOpen] = useState(false);
    const auth = useAuth();

    const buttonClasses = clsx('h-full px-2 hover:text-gray-300', {
        'bg-opacity-10 bg-white': open,
    });

    return <div className="flex h-full relative">
        <button className={buttonClasses} type="button" onClick={() => setOpen(true)}>
            <Icon name="user-circle"/>
        </button>
        {open && <>
            <div className="fixed h-full left-0 top-0 w-full z-40" onClick={() => setOpen(false)}/>
            <div className="absolute bg-white border right-0 text-black top-full z-50">
                <button className="p-2" type="button" onClick={auth.logout}>Logout</button>
            </div>
        </>}
    </div>;

}