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

    return <tr onClick={handleClick}>
        {columns.map((column, index) =>
            <Cell column={column} key={index} row={data}>
                {data[column.name]}
            </Cell>)}
    </tr>;

}