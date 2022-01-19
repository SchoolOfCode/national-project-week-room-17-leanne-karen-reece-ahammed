import './App.css';
import NavBar from '../Nav-bar';
import SearchForm from '../SearchForm';
import UserDisplay from '../UserDisplay';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<div>
						<NavBar />
						<SearchForm />
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
