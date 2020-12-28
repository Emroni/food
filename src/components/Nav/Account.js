import { useEffect, useState } from 'react';
import clsx from 'clsx';
import * as gravatar from 'gravatar';
import { useAuth } from '../../providers';
import { Image } from '../';

export default function Account() {

    const [img, setImg] = useState(null);
    const [open, setOpen] = useState(false);
    const auth = useAuth();

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
            <div className="absolute bg-white border right-0 text-black top-full text-sm whitespace-nowrap z-50">
                <button className="p-2 hover:bg-gray-100" type="button" onClick={auth.logout}>Log out</button>
            </div>
        </>}
    </div>;

}