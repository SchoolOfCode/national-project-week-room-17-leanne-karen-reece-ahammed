import React from 'react';
import "./index.css";
import DisplayItem from "../DisplayItem"



function DailyReflection({reflect}) {
	console.log(reflect);
	//daily reflection
	//["sdsds", "sdsdsd", "sdsd"]

	return	<div className="outerbox_2">
	 <div className="share_2">Daily Reflection
	</div>
	{reflect.map((item, key)=>{
		return <DisplayItem reflect={item}/>
	})}
	</div>
}

export default DailyReflection;
