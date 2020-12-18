import { useHistory } from 'react-router-dom';
import Cell from './Cell';

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
            <Cell column={column} key={index}>
                {data[column.name]}
            </Cell>)}
    </tr>;

}