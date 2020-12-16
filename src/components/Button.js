import { Link } from 'react-router-dom';
import { Icon } from './';

export default function Button({
                                   className,
                                   icon,
                                   to,
                                   ...props
                               }) {

    const classNames = `bg-gray-100 leading-none p-2 rounded-full hover:bg-gray-200 ${className || ''}`;

    if (to) {
        return <Link className={classNames} to={to} {...props}>
            <Icon name={icon}/>
        </Link>
    }

    return <button className={classNames} type="button" {...props}>
        <Icon name={icon}/>
    </button>;

}