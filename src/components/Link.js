import { Link as ReactLink } from 'react-router-dom';

export default function Link({
                                 children,
                                 ...props
                             }) {

    return <ReactLink className="underline" onClick={e => e.stopPropagation()} {...props}>
        {children}
    </ReactLink>;

}