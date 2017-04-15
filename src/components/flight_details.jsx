import React from 'react';
import ReactDOM from 'react-dom';
import IndividualFlightDetail from './individual_flight_detail.jsx';


var FlightDetails = React.createClass({

	getIndividualFlightDetail: function(){
		var html = [];
		for (var i = 0; i < this.props.data.result.departure.length; i++) {
			html.push(<IndividualFlightDetail 
						data={this.props.data.result.departure[i]} 
						oneWay={this.props.oneWay}/>);
		};
		return html
	},
	
	render: function(){

		if(this.props.data && this.props.data.result) {}
		else return null

		return (
			<div>
				{this.getIndividualFlightDetail()}
			</div>
		);
	}
});

export default FlightDetails;
