import React from 'react';
import ReactDOM from 'react-dom';

var AppStore = require('../stores/AppStore');


var Itinerary = React.createClass({

	render: function(){

		if(this.props.data && this.props.data.search_data) {} 
		else {return <div><h2>Your flight details will be shown here</h2></div>}
		
		return (
			<div className="margin-10px padding-10px">
				<div className="float-right margin-10px padding-10px">
					<div>{"Depart : " + this.props.data.search_data.deptDate}</div>
					<div>{this.props.data.search_data.oneway ? "" : "Return : " + this.props.data.search_data.returnDate}</div>
				</div>
				<h2>
					<span>{this.props.data.search_data.startCity}</span>
					<span>></span>
					<span>{this.props.data.search_data.endCity}</span>
					<span>{this.props.data.search_data.oneway ? "" : ">"}</span>
					<span>{this.props.data.search_data.oneway ? "" : this.props.data.search_data.startCity}</span>
				</h2>
			</div>
		);
	}
});

export default Itinerary;
