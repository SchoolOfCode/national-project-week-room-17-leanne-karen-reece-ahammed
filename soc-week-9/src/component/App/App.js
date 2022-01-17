import "./App.css";

function App() {
  return (
    <div>
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
      <div class="form-container flex-container">
        
        <form className="comments-form">
        <label className="top-label">How you feeling</label>
          <input type="text" placeholder="daily-reflection" />
          <textarea />
          <button type="submit">Submit</button>
          <input type="range" min="0" max="5" />
        </form>
      </div>
      
    </div>
  );
}

export default App;
