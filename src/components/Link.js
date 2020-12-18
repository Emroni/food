import { Link as ReactLink } from 'react-router-dom';

export default function Link({
                                 children,
                                 className,
                                 href,
                                 to,
                                 ...props
                             }) {

    const classNames = `underline ${className}`;

    if (href) {
        return <a className={classNames} href={href} rel="noreferrer" target="_blank" onClick={e => e.stopPropagation()} {...props}>
            {children}
        </a>;
    }
    
    return <ReactLink className={classNames} to={to} onClick={e => e.stopPropagation()} {...props}>
        {children}
    </ReactLink>;

}