import React from 'react';
import './index.css';

function SearchForm() {
	return (
		<div className="container">
			<h3>Welcome Bootcamper! </h3>
			<h4>
				You are not alone... we know you might be feeling the pressure. Here is a place to relate to your fellow
				bootcampers
			</h4>
			<form className="form-container">
				<div className="form-box">
					<label>How are you feeling today?</label>
					<input type="range" min="0" max="5" />
					<div className="emoji">😟😐😀</div>
				</div>
				<div className="form-box">
					<label> Write to inspire or reflect...</label>
					<input type="text" placeholder="daily-reflection" />
				</div>
				<div className="form-box">
					<label>Share Your Work</label>
					<input type="file" />
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default SearchForm;
