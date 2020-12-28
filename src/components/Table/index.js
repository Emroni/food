import Row from './Row';

export default function Table({
                                  collection,
                                  columns,
                                  rows,
                              }) {

    return <div className="overflow-y-auto">
        <table>
            <thead>
                <tr>
                    {columns.map((column, index) =>
                        <th align={column.align} key={index}>
                            {column.name}
                        </th>)}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) =>
                    <Row collection={collection} columns={columns} data={row} key={index}/>)}
            </tbody>
        </table>
    </div>;

}