import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const icons = {
    'edit': faEdit,
    'user-circle': faUserCircle,
};

export function Icon({name, ...props}) {

    const icon = icons[name];

    return <FontAwesomeIcon icon={icon} {...props}/>;

}