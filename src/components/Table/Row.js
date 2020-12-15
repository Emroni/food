export default function Row({
                                columns,
                                data,
                            }) {

    return <tr className="bg-gray-50 even:bg-gray-100 hover:bg-gray-200">
        {columns.map((column, index) =>
            <td align={column.align || 'left'} className="px-2 py-1" key={index}>
                {data[column.name]}
            </td>)}
    </tr>;

}