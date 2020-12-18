import { Link } from 'react-router-dom';
import { Icon } from './';

export default function Button({
                                   children,
                                   className,
                                   icon,
                                   href,
                                   to,
                                   ...props
                               }) {

    const classNames = `bg-gray-100 leading-none p-2 rounded-full focus:bg-gray-200 hover:bg-gray-200 ${className || ''}`;

    children = children ||
        <Icon name={icon}/>;

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