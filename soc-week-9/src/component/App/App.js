import './App.css';
import NavBar from '../Nav-bar';
import SearchForm from '../SearchForm';
import UserDisplay from '../UserDisplay';
import { Routes, Route } from 'react-router-dom';
import {useState} from "react";

function App() {


	const [reflect, setReflect] = useState([]);
	const [sharedWork, setSharedWork] = useState([]);

	async function getWork(){
		const response = await fetch("https://soc-app-17.herokuapp.com/users")
		const data = await response.json()
		const arr = [];
		data.payload.map((item)=>{
			arr.push(item.url);
			return arr;
		})
	setSharedWork(arr);
	console.log(sharedWork)
	}

	async function getReflection() {
		const response = await fetch('https://soc-app-17.herokuapp.com/users');
		const data = await response.json();
		console.log(data.payload);
		const arr = [];
		data.payload.map((item)=>{
			arr.push(item.reflection);
			return arr;
		})
		setReflect(arr);

	}
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
						<UserDisplay reflect={reflect} sharedWork={sharedWork}/>
						<h5 onClick={getReflection}>GET REFLECTion</h5>
						<h5 onClick={getWork}>GET THE WORK</h5>
					</div>
				}
			/>
		</Routes>
	);
}
export default App;
