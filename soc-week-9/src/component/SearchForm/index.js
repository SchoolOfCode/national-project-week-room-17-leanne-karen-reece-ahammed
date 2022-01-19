import React from 'react';
import './index.css';
import logo from './SOClogo.png';
import { Link } from 'react-router-dom';

function SearchForm() {
	return (
		<div className="container">
			<img src={logo} alt="school of code logo" style={{ width: '200px', height: '200px' }} />
			<h3>Welcome Bootcamper! </h3>
			<h4>
				You are not alone... we know you might be feeling the pressure. Here is a place to relate to your fellow
				bootcampers
			</h4>
			<form className="form-container">
				<div className="form-box">
					<label>How are you feeling today?</label>
					<input type="range" min="0" max="5" />
					<div className="emoji-meter">
						<option value="0">😟</option>
						<option value="3">😐</option>
						<option value="5">😀</option>
					</div>
				</div>
				<div className="form-box">
					<label> Write to inspire or reflect...</label>
					<input type="text" placeholder="daily-reflection" />
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
					<input
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
