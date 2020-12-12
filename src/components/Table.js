export function Table({
                          columns,
                          rows,
                      }) {

    return <table className="w-full">
        <thead>
            <tr className="bg-gray-300">
                {columns.map((column, index) =>
                        <th className="capitalize px-2 py-1 text-left" key={index}>{column.name}</th>)}
            </tr>
        </thead>
        <tbody>
            {rows.map((row, r) =>
                <tr className="even:bg-gray-100 hover:bg-gray-200" key={r}>
                    {columns.map((column, c) =>
                            <td className="px-2 py-1" key={c}>{row[column.name]}</td>)}
                </tr>)}
        </tbody>
    </table>;

}