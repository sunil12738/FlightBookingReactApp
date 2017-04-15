import React from 'react';
import ReactDOM from 'react-dom';
import Itinerary from './itinerary.jsx';
import FlightDetails from './flight_details.jsx';

var AppStore = require('../stores/AppStore');

var RightPane = React.createClass({

	getInitialState: function(){
		return {
			data: [],
			oneWay: true
		}
	},


	componentDidMount: function(){
		AppStore.addChangeListener(this.getData)
	},

	getData: function(){
		var data = AppStore.getSearchData();
		var oneWay = AppStore.getOneWay();
		this.setState({
			data : data,
			oneWay : oneWay
		})
	},

	render: function(){
		return (
			<div>
				<Itinerary data={this.state.data} oneWay={this.state.oneWay}/>
				<FlightDetails data={this.state.data} oneWay={this.state.oneWay}/>
			</div>
		);
	}
});

export default RightPane;
