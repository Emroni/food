import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarrot, faCheck, faChevronLeft, faChevronRight, faCircleNotch, faEdit, faExternalLinkAlt, faImage, faPlus, faSearch, faStore, faStoreAlt, faTimes, faUserCircle, faUtensils } from '@fortawesome/free-solid-svg-icons';

export const icons = {
    'carrot': faCarrot,
    'check': faCheck,
    'chevron-left': faChevronLeft,
    'chevron-right': faChevronRight,
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