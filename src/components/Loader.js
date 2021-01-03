import { Icon } from './';
import clsx from 'clsx';

export default function Loader({className}) {

    const containerClasses = clsx('inline-block leading-none p-2', className);

    return <div className={containerClasses}>
        <Icon className="animate-spin" name="circle-notch"/>
    </div>;

}