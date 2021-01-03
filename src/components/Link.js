import { Link as ReactLink } from 'react-router-dom';
import { useDatabase } from '../providers';

export default function Link({
                                 children,
                                 className,
                                 href,
                                 meal,
                                 restaurant,
                                 to,
                                 ...props
                             }) {

    const db = useDatabase();
    const classNames = `underline hover:no-underline ${className}`;

    if (meal) {
        meal = db.find('meals', meal);
        if (meal) {
            to = `/meals/${meal.id}`;
            children = meal.name;
        }

    } else if (restaurant) {
        restaurant = db.find('restaurants', restaurant);
        if (restaurant) {
            to = `/restaurants/${restaurant.id}`;
            children = restaurant.name;
        }

    } else if (href) {
        return <a className={classNames} href={href} rel="noreferrer" target="_blank" onClick={e => e.stopPropagation()} {...props}>{children}</a>;
    }

    if (to) {
        return <ReactLink className={classNames} to={to} onClick={e => e.stopPropagation()} {...props}>{children}</ReactLink>;
    }

    return children || null;

}