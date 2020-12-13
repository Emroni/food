import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleNotch, faEdit, faPlus, faTimes, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const icons = {
    'check': faCheck,
    'circle-notch': faCircleNotch,
    'edit': faEdit,
    'plus': faPlus,
    'times': faTimes,
    'user-circle': faUserCircle,
};

export function Icon({name, ...props}) {

    const icon = icons[name];

    return <FontAwesomeIcon icon={icon} {...props}/>;

}