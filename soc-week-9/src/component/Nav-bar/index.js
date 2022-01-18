import './index.css';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<div className="topnav">
			<Link to="/">Home</Link>

			<div className="search-container">
				<form>
					<input type="text" placeholder="Search.." name="search" />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default NavBar;
