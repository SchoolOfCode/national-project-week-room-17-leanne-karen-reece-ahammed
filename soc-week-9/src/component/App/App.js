import './App.css';
import NavBar from '../Nav-bar';
import SearchForm from '../SearchForm';
import UserDisplay from '../UserDisplay';
import { Routes, Route } from 'react-router-dom';

function App() {
	const [ feeling, setfeeling ] = useState(0);
	const [ reflection, setreflection ] = useState('');
	const [ workshop, setWorkshop ] = useState('');
	const [ work, setwork ] = useState('');

	const object = {
		feeling: feeling,
		reflection: reflection,
		workshop: workshop,
		work: work
	};

	async function getApi() {
		const response = await fetch('https://soc-app-17.herokuapp.com/users');
		const data = await response.json();
		console.log(data);
	}
}

async function postApi() {
	const response = await fetch('https://soc-app-17.herokuapp.com/users', {
		method: 'POST',
		mode: 'no-cors',
		headers: {
			'Content-type': 'application/json'
		},

		body: JSON.stringify(object)
	});
	const data = await response.json();
	console.log(data);

	function handleClick(e) {
		e.preventDefault();
		getApi();
		postApi();
	}

	return (
		<Routes>
			<Route
				path="/"
				element={
					<div>
						<NavBar />
						<SearchForm setfeeling={setfeeling} handleClick={handleClick} />
					</div>
				}
			/>
			<Route
				path="/UserDisplay"
				element={
					<div>
						<NavBar />
						<UserDisplay />
					</div>
				}
			/>
		</Routes>
	);
}

export default App;
