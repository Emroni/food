import { useEffect, useState } from 'react';
import { Icon } from './index';
import clsx from 'clsx';

export default function Image({
                                  circular,
                                  className,
                                  icon = 'image',
                                  size,
                                  src,
                                  ...props
                              }) {

    const [loader, setLoader] = useState(null);
    const [path, setPath] = useState(null);

    useEffect(() => {
        const handleLoad = () => setPath(loader.src);

        const loader = new window.Image();
        loader.addEventListener('load', handleLoad);
        setLoader(loader);

        return () => {
            loader.removeEventListener('load', handleLoad);
            setLoader(null);
        };
    }, []);

    useEffect(() => {
        if (loader && src) {
            setPath(null);
            loader.src = src;
        }
    }, [
        loader,
        src,
    ]);

    const classNames = clsx('bg-center bg-cover leading-none', className, {
        border: path,
        rounded: !circular,
        'rounded-full': circular,
        [`text-${size}`]: size,
    });

    const style = {
        backgroundImage: `url(${path})`,
        height: '1em',
        width: '1em',
    };

    return <div className={classNames} style={style} {...props}>
        {!path && (
            <Icon className="text-gray-400" name={icon}/>)}
    </div>;

}