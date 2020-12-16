import { Link } from 'react-router-dom';
import { Icon } from './';

export default function Button({
                                   icon,
                                   to,
                                   ...props
                               }) {

    const classNames = 'bg-gray-100 leading-none p-2 rounded-full';

    if (to) {
        return <Link className={classNames} to={to} {...props}>
            <Icon name={icon}/>
        </Link>
    }

    return <button className={classNames} type="button" {...props}>
        <Icon name={icon}/>
    </button>;

}