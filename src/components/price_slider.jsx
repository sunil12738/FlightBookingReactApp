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
			<div className="padding-10px margin-10px border-1px-solid-grey">
				<div className=""> Refine flight search </div>
				<input type="number" min="0" ref="min_val" placeholder="min price"/> <br/>
				<input type="number" min="0" ref="max_val" placeholder="max price"/>
				<div className="text-align-center">
					<input type="button" className="button" value="Refine Results" onClick={this.validate} />
				</div>
			</div>
		);
	}
});

export default PriceSlider;
