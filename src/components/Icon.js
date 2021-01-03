import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCarrot, faCheck, faCircleNotch, faEdit, faExternalLinkAlt, faImage, faPlus, faSearch, faStore, faStoreAlt, faTimes, faUserCircle, faUtensils } from '@fortawesome/free-solid-svg-icons';

export const icons = {
    'calendar-alt': faCalendarAlt,
    'carrot': faCarrot,
    'check': faCheck,
    'circle-notch': faCircleNotch,
    'edit': faEdit,
    'external-link-alt': faExternalLinkAlt,
    'image': faImage,
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