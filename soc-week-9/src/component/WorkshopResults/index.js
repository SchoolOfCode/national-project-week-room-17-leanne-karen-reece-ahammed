import React, { useEffect } from 'react';
import {useState} from "react"
import WorkshopItem from '../WorkshopItem';
import "./index.css";

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

	useEffect(()=>{
		getApi();
	}, [])
	return (<div>
	<p style={{padding:"15px 300px 15px 300px"}}className="jazzy-font share" onClick={getApi}>Workshop Results</p>
	<ul>{percent.map((item, key)=>{
		return (
			<div>
			<h3 className='option'>Option: {key + 1}</h3>
			<div className='comp'>
			</div>
			<WorkshopItem percent={item} className="componentpercent"/>
			</div>
			)
	})}</ul>
	</div>)
}

export default WorkshopResults;
