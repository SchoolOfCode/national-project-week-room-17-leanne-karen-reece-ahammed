import React from 'react';
import KeyTakeAways from '../Key-take-away';
import PieChart from '../Pie-Chart';
import WorkshopResults from '../WorkshopResults';
import DailyReflection from '../Daily-reflection';
import ShareYourWork from '../Share-your-work';
import './index.css';
// This page will contain all components to be displayed on the results page.
// The UserDisplay will be imported into the main App.
// This will help with styling & layout of the components.

//The data from the search form will be pulled into this page and then passed to child elements as props to be displayed.

function UserDisplay({reflect, sharedWork}) {
	return (
		<div className="primary-container">
				<div className="row">
					<PieChart />
				</div>
				<div className="row">
					<KeyTakeAways />
				</div>
				<div className="row">
					<WorkshopResults />
			</div>

			<div className="two-columns">
				<DailyReflection reflect={reflect}/>
				<ShareYourWork sharedWork={sharedWork}/>
			</div>
		</div>
	);
}

export default UserDisplay;
