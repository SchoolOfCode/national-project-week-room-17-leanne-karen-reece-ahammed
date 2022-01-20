import DoughnutChart from "../doughnut/";
import {useState} from "react";
import "./index.css"
function App() {

const [happiness, setHappniess] = useState("");

    async function getApi() {
		const response = await fetch('https://soc-app-17.herokuapp.com/users');
		const data = await response.json();
		console.log(data.payload);
        let newArr = []
        data.payload.map((item) => {
            newArr.push(item.feeling)
            return newArr;
        })
        const countOccurrences = (array, val) => array.reduce((a, v) => (v === val ?  a + 1 : a), 0)

        const sad = countOccurrences(newArr, 1);
        const ok = countOccurrences(newArr, 2);
        const happy = countOccurrences(newArr, 3)
        newArr = [sad, ok, happy];
        setHappniess(newArr);
        return newArr;

	}


    return (
        <div className="App">
            <div className="container" style={{width : "200px"}}>
                <DoughnutChart happinessData={happiness}/>
                <h1 onClick={getApi}>Refresh Pie!!</h1>
            </div>
        </div>
    );
}

export default App;