import React from 'react';
import "./index.css";
import SharedItem from "../SharedItem"
function ShareYourWork({sharedWork}) {
console.log(sharedWork + "Tthi is work")
	return	<div className="outerbox">
	 <div className="share jazzy-font">SHARE YOUR WORK!</div>

	{sharedWork.map((item, key)=>{
		return <SharedItem sharedWork={item}/>
	})}
	</div>
}
export default ShareYourWork;
