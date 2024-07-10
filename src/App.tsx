import Table from "./components/table";

const columns = [
	{ id: 1, field: 'name', displayHeader: 'Name' },
	{ id: 2, field: 'age', displayHeader : 'Age' },
	{ id: 3, field: 'country', displayHeader : 'Country' },
	{ id: 4, field: 'phone', displayHeader : 'Phone' },
	{ id: 5, field: 'code', displayHeader : 'Code' },
	{ id: 6, field: 'gender', displayHeader : 'Gender' },
	{ id: 7, field: 'order', displayHeader : 'Order' },
	{ id: 8, field: 'status', displayHeader : 'Status' },
]

const rows = [
	{
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	}, {
		id: 1,
		name: 'Samiran Ghosh',
		age: 25,
		country: 'India',
		phone: '+91 6409826472',
		code: '721458',
		gender: 'Male',
		order: '8',
		status: 'Active'
	},
]

function App() {
	return (
		<div className="App">
			<Table columns={columns} rows={rows} />
		</div>
	);
}

export default App;
