import React from 'react';
import ReactDOM from 'react-dom';

import FlightPriceSort from '../actions/flight_price_sort.js'
// import RangeSlider from 'react-dual-rangeslider'; //Failing

var PriceSlider = React.createClass({

	getInitialState: function(){
		return {
			minValue : 0, 
			maxValue : 100
		}
	},


	validate: function(){
		var minValue = parseInt(this.refs.min_val.value);
		var maxValue = parseInt(this.refs.max_val.value);
		var data = {
			minValue : minValue,
			maxValue : maxValue,
			searchResult : this.props.data
		};
		if(minValue>maxValue) return null;
		FlightPriceSort.sortFlight(data);
	},

	render: function(){
		return (
			<div>
				<div> Refine flight search </div>
				<input type="number" min="0" ref="min_val"/> <br/>
				<input type="number" min="0" ref="max_val"/> <br />
				<input type="button" value="refine results" onClick={this.validate} />
			</div>
		);
	}
});

export default PriceSlider;
