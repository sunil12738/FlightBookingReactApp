import React from 'react';
import ReactDOM from 'react-dom';
import IndividualFlightDetail from './individual_flight_detail.jsx';


var FlightDetails = React.createClass({

	// one way going flight
	getIndividualDeptFlightDetail: function(){
		var html = [];
		for (var i = 0; i < this.props.data.result.departure.length; i++) {
			html.push(<IndividualFlightDetail 
						data={this.props.data.result.departure[i]} />);
		};
		if(this.props.data.result.departure.length === 0) {
			html = <div>Not departure flights found. Please change the date and search again</div>
		}
		return html
	},

	// returning flight
	getIndividualArrFlightDetail: function(){
		var html = [];
		for (var i = 0; i < this.props.data.result.return_.length; i++) {
			html.push(<IndividualFlightDetail 
						data={this.props.data.result.return_[i]} />);
		};
		if(this.props.data.result.return_.length === 0) {
			html = <div>Not returning flights found. Please change the date and search again</div>
		}
		return html
	},
	
	render: function(){

		if(this.props.data && this.props.data.result) {}
		else return null

		var flightDetailsHTML = null;
		if(this.props.oneWay){
			var flightDetailsHTML = this.getIndividualDeptFlightDetail()
		}
		else {
			var flightDetailsHTML = (<table className="width-100">
				<tr>
					<td className="vertical-align-top width-50">{this.getIndividualDeptFlightDetail()}</td>
					<td className="vertical-align-top width-50">{this.getIndividualArrFlightDetail()}</td>
				</tr>
			</table> )
		}

		return (
			<div>
				{flightDetailsHTML}
			</div>
		);
	}
});

export default FlightDetails;
