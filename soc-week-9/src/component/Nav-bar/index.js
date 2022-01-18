import './index.css';

function NavBar() {
	return (
		<div class="topnav">
			<a class="active" href="#home">
				Home
			</a>
			<a href="#about">About</a>
			<a href="#contact">Contact</a>
			<div class="search-container">
				<form onSubmit="/action_page.php">
					<input type="text" placeholder="Search.." name="search" />
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
}

export default NavBar;
