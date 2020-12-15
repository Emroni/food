import Row from './Row';

export default function Table({
                                  columns,
                                  rows,
                              }) {

    return <table className="w-full">
        <thead>
            <tr className="bg-gray-300">
                {columns.map((column, index) =>
                    <th align={column.align || 'left'} className="capitalize px-2 py-1" key={index}>
                        {column.name}
                    </th>)}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, r) =>
                <Row columns={columns} data={row} key={r}/>)}
        </tbody>
    </table>;

}