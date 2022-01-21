import React, { useState } from "react";
import "./index.css";
import logo from "./SOClogo.png";
import { Link } from "react-router-dom";

function SearchForm() {
  const [name, setName] = useState("");
  const [feeling, setFeeling] = useState(0);
  const [reflection, setReflection] = useState("");
  const [workshop, setWorkShop] = useState(0);
  const [url, setUrl] = useState("");

  // name,feeling, reflection, workshop, url

  async function postApi() {
    const response = await fetch("https://soc-app-17.herokuapp.com/users", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ name, feeling, reflection, workshop, url }),
    });
    console.log("check", response);
    const data = await response.json();

    //   setComments([...comments, data.payload[0]])

    console.log(data);
  }
  //

  function formSubmit(e) {
    e.preventDefault();
    postApi();
    setFeeling(0);
    setReflection("");
    setWorkShop(0);
    setUrl("");
    setName("");
  }

  console.log(feeling, reflection, workshop, name, url);

  return (
    <div className="container">
      <img
        src={logo}
        alt="school of code logo"
        style={{ width: "200px", height: "200px" }}
      />
	  <div className="border">
      <h3>Welcome Bootcamper! </h3>
      <h4>
        You are not alone... we know you might be feeling the pressure. Here is
        a place to relate to your fellow bootcampers
      </h4>
      <form onSubmit={formSubmit} className="form-container">
        <div className="form-box">
          <label>How are you feeling today?</label>
          <input
            onChange={(e) => setFeeling(parseInt(e.target.value))}
            type="range"
            min="1"
            max="3"
            value={feeling}
          />
          <div className="emoji-meter">
            <option value="1">😟</option>
            <option value="2">😐</option>
            <option value="3">😀</option>
          </div>
        </div>
        <div className="form-box">
          <label> Write to inspire or reflect...</label>
          <textarea
            className="box-height" onChange={(e) => setReflection(e.target.value)}
            type="text"
            placeholder="Daily-Reflection"
            value={reflection}
          />
        </div>
        <div className="form-box">
          <label> How did you find today's workshop?</label>
          <select
            className="select-choices"
            onChange={(e) => setWorkShop(e.target.value)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-box">
          <label>Share Your Work</label>
          <input
            className="box-height" onChange={(e) => setUrl(e.target.value)}

            type="text"
            value={url}
          />
          {/* <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
          /> */}
        </div>
        <button className="submit-btn" type="submit">Submit</button>
      </form>

      <div>
        <Link to="/UserDisplay">
          <button className="btn-link">See results</button>
        </Link>
      </div>
    </div>
	</div>

  );
}

export default SearchForm;
