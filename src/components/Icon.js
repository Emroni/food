import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faCheck, faCircleNotch, faEdit, faPlus, faSearch, faStore, faStoreAlt, faTimes, faUserCircle, faUtensils } from '@fortawesome/free-solid-svg-icons';

export const icons = {
    'carrot': faCarrot,
    'check': faCheck,
    'circle-notch': faCircleNotch,
    'edit': faEdit,
    'plus': faPlus,
    'search': faSearch,
    'store': faStore,
    'store-alt': faStoreAlt,
    'times': faTimes,
    'user-circle': faUserCircle,
    'utensils': faUtensils,
};

export default function Icon({
                                 name,
                                 ...props
                             }) {

    const icon = icons[name];

    return <FontAwesomeIcon icon={icon} {...props}/>;

}