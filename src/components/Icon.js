import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faEdit, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const icons = {
    'circle-notch': faCircleNotch,
    'edit': faEdit,
    'plus': faPlus,
    'user-circle': faUserCircle,
};

export function Icon({name, ...props}) {

    const icon = icons[name];

    return <FontAwesomeIcon icon={icon} {...props}/>;

}