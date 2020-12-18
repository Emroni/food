import Fuse from 'fuse.js';

export default function Search({
                                   className,
                                   data,
                                   onChange,
                                   ...props
                               }) {

    const classNames = `bg-gray-100 px-2 py-1 w-full ${className}`

    const fuse = new Fuse(data, {
        keys: data.length && Object.keys(data[0]),
        threshold: 0.3,
    });

    function handleChange(e) {
        const {value} = e.currentTarget;

        const results = value && fuse.search(value)
            .map(result => result.item);
        onChange(results || data);
    }

    return <input className={classNames} placeholder="Search..." type="search" onChange={handleChange} {...props}/>;

}