import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes, faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const icons = {
    'edit': faEdit,
    'times': faTimes,
    'sign-in-alt': faSignInAlt,
    'user-circle': faUserCircle,
};

export function Icon({className, name}) {

    const icon = icons[name];

    return <FontAwesomeIcon className={className} icon={icon}/>;

}