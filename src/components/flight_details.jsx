import React from 'react';
import ReactDOM from 'react-dom';
import IndividualFlightDetail from './individual_flight_detail.jsx';


var FlightDetails = React.createClass({

	getIndividualFlightDetail: function(){
		var data = [];
		for (var i = 0; i <= 10; i++) {
			data.push(<IndividualFlightDetail />);
		};
		console.log(data)
		return data
	},
	render: function(){
		return (
			<div>
				<div>
				</div>
				{this.getIndividualFlightDetail()}
			</div>
		);
	}
});

export default FlightDetails;
