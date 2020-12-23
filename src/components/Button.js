import { Link } from 'react-router-dom';
import { Icon } from './';
import clsx from 'clsx';

export default function Button({
                                   children,
                                   className,
                                   icon,
                                   href,
                                   to,
                                   ...props
                               }) {

    const classNames = clsx('bg-gray-100 leading-none p-2 rounded-full focus:bg-gray-200 hover:bg-gray-200', {
        'h-8 relative w-8': !!icon,
    }, className);

    children = children ||
        <span className="absolute flex h-full items-center justify-center left-0 top-0 w-full z-10">
            <Icon name={icon}/>
        </span>;

    if (href) {
        return <a className={classNames} href={href} rel="noreferrer" target="_blank" onClick={e => e.stopPropagation()} {...props}>
            {children}
        </a>;
    }

    if (to) {
        return <Link className={classNames} to={to} onClick={e => e.stopPropagation()} {...props}>
            {children}
        </Link>
    }

    return <button className={classNames} type="button" {...props}>
        {children}
    </button>;

}