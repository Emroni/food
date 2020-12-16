import Row from './Row';

export default function Table({
                                  collection,
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
            {rows.map((row, index) =>
                <Row collection={collection} columns={columns} data={row} key={index}/>)}
        </tbody>
    </table>;

}