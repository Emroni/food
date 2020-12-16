import { useHistory } from 'react-router-dom';

export default function Row({
                                collection,
                                columns,
                                data,
                            }) {

    const history = useHistory();

    function handleClick() {
        history.push(`/${collection}/${data.id}`);
    }

    return <tr className="bg-gray-50 even:bg-gray-100 hover:bg-gray-200" onClick={handleClick}>
        {columns.map((column, index) =>
            <td align={column.align || 'left'} className="px-2 py-1" key={index}>
                {data[column.name]}
            </td>)}
    </tr>;

}