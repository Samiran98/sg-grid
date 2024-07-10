import './style.css'

function Table({ columns, rows }: { columns: any[], rows: any[] }) {
	return (
		<div>
			<table>
				<thead>
					<tr>
						{
							columns.map((column) => {
								return (
									<th key={column.id} id={column.field}>
										{column.displayHeader}
									</th>
								)
							})
						}
					</tr>
				</thead>
				<tbody>
					{
						rows.map(row => {
							return (
								<tr key={row.id}>
									{columns.map(column => (
										<td contentEditable={true} suppressContentEditableWarning={true} style={{ left: 0 }} key={column.id}>{row[column.field]}</td>
									))}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</div>
	)
}

export default Table

