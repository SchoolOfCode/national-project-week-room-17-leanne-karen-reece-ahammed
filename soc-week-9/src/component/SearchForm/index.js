import React, {useEffect, useState} from 'react';
import './index.css';
import logo from './SOClogo.png';
import { Link } from 'react-router-dom';
import { connectionString } from '../../config';

function SearchForm({onSubmitClick}) {
	const [range, setRange] = useState(0);
	const [post, setPost] = useState("");
	const [work, setWork] = useState("");



	useEffect(() => {
	  async function getApi(){
		  const response = await fetch(connectionString + "users",
		  {
			  method: "POST",
			  mode: "no-cors",
			  headers:{
				  'Content-type': "application/json"
			  },

			  body: JSON.stringify({name:"Sam", comments: "testing"})
			 
		  }
		  );
		  const data = await response.json();
		  console.log(data);
		
		
		

	  }
	  getApi()

	 
	}, []);
	
	

function formSubmit(e){
e.preventDefault();

onSubmitClick(range,post,work);
setRange(0);
setWork("");
setPost("");
}

	console.log(post);

	return (
		<div className="container">
			<img src={logo} alt="school of code logo" style={{ width: '200px', height: '200px' }} />
			<h3>Welcome Bootcamper! </h3>
			<h4>
				You are not alone... we know you might be feeling the pressure. Here is a place to relate to your fellow
				bootcampers
			</h4>
			<form onSubmit={formSubmit} className="form-container">
				<div className="form-box">
					<label>How are you feeling today?</label>
					<input onChange={e=> setRange(parseInt(e.target.value))} type="range" min="0" max="2" />
					<div className="emoji-meter">
						<option value="0">😟</option>
						<option value="1">😐</option>
						<option value="2">😀</option>
					</div>
				</div>
				<div className="form-box">
					<label> Write to inspire or reflect...</label>
					<input onChange={e=> setPost(e.target.value)} type="text" placeholder="daily-reflection" />
				</div>
				<div className="form-box">
					<label> How did you find today's workshop?</label>
					<div className="button-choices">
						<button>1</button>
						<button>2</button>
						<button>3</button>
						<button>4</button>
						<button>5</button>
					</div>
				</div>
				<div className="form-box">
					<label>Share Your Work</label>
					<input onChange={e=> setWork(e.target.value)}
						style={{
							textAlign: 'center',
							margin: 'auto'
						}}
						type="file"
					/>
				</div>
				<Link to="/UserDisplay">
					<button type="submit">Submit</button>
				</Link>
			</form>
		</div>
	);
}

export default SearchForm;
