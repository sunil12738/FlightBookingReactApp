import React from 'react';
import ReactDOM from 'react-dom';

import FlightPriceSort from '../actions/flight_price_sort.js'
// import RangeSlider from 'react-dual-rangeslider'; //Failing

var PriceSlider = React.createClass({

	getInitialState: function(){
		return {
			minValue : 0, 
			maxValue : 100,
			validation : true
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
		if(!minValue || !maxValue || minValue>maxValue || minValue<0 || maxValue <0) {
			this.setState({
				validation : false
			});
			return null;
		}
		FlightPriceSort.sortFlight(data);
	},

	resetValidation: function(){
		this.setState({
			validation : true
		});	
	},

	render: function(){
		return (
			<div className="padding-10px margin-10px border-1px-solid-grey">
				<h3> Refine flight search </h3>
				<div>{this.state.validation ? "" : "Enter proper price range"}</div>
				<input type="number" min="0" ref="min_val" placeholder="min price" onClick={this.resetValidation}/> <br/>
				<input type="number" min="0" ref="max_val" placeholder="max price" onClick={this.resetValidation}/>
				<div className="text-align-center">
					<input type="button" className="button" value="Refine Results" onClick={this.validate} />
				</div>
			</div>
		);
	}
});

export default PriceSlider;
