import React from 'react';
import ReactDOM from 'react-dom';
import IndividualFlightDetail from './individual_flight_detail.jsx';
var AppStore = require('../stores/AppStore');


var FlightDetails = React.createClass({

	getIndividualFlightDetail: function(){
		var html = [];
		console.log("his.state.data")
		console.log(this.props.data.result)
		for (var i = 0; i < this.props.data.result.length; i++) {
			html.push(<IndividualFlightDetail 
						price={this.props.data.result[i].price} 
						company_name={this.props.data.result[i].company_name} 
						flight_name={this.props.data.result[i].flight_name} 
						fromcity={this.props.data.result[i].fromcity} 
						tocity={this.props.data.result[i].tocity} 
						date={this.props.data.result[i].date} 
						data={this.props.data.result[i]} 
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
