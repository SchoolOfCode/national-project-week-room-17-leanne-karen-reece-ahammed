import React, { useEffect } from 'react';
import "./index.css";
import DisplayItem from "../DisplayItem"



function DailyReflection({reflect}) {
	console.log(reflect);

	return	<div className="outerbox_2">
	 <div className="share_2 jazzy-font">Daily Reflection
	</div>
	{reflect.map((item, key)=>{
		return (
			<div>
		<DisplayItem reflect={item} index={key}/>
		</div>
		)
	})}
	</div>
}

export default DailyReflection;
