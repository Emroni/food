export default function Divider({
                                    className,
                                    margin = 2,
                                    ...props
                                }) {

    const classNames = `my-${margin} ${className}`

    return <hr className={classNames} {...props}/>;

}