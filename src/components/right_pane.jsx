import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './itinerary.jsx';
import FlightDetails from './flight_details.jsx';


var RightPane = React.createClass({
	render: function(){
		return (
			<div>
				<Itinerary />
				<FlightDetails />
			</div>
		);
	}
});

export default RightPane;
