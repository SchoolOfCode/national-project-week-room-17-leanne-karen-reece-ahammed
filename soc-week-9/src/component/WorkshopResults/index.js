import React from 'react';
import {useState} from "react"

function WorkshopResults(props) {
	const [percent, setPercent] = useState([]);

	async function getApi() {
	const response = await fetch('https://soc-app-17.herokuapp.com/users');
		const data = await response.json();
		let newArr = [];
		data.payload.map((item) =>{
			return newArr.push(item.workshop)
		});

		const countOccurrences = (array, val) => array.reduce((a, v) => (v === val ?  a + 1 : a), 0)

        const one = countOccurrences(newArr, 1);
        const two = countOccurrences(newArr, 2);
        const three = countOccurrences(newArr, 3)
        const four = countOccurrences(newArr, 4)
        const five = countOccurrences(newArr, 5)

        newArr = [one, two, three, four, five];

		const totalOfVotes = newArr.reduce((acc, curr) => {
			return acc + curr;
		});

		const percentArr = newArr.map((item)=>{
			console.log(item / totalOfVotes * 100) ;
			return Math.floor(item / totalOfVotes * 100);
		})
		setPercent(percentArr);
	}
	return (<div>
	<h1 onClick={getApi}>Workshop Results</h1>
	<h2>{percent}</h2>
	</div>)
}

export default WorkshopResults;
