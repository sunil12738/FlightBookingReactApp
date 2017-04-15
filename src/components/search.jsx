import React from 'react';
import ReactDOM from 'react-dom';
import SearchAction from '../actions/search_action.js'
var AppStore = require('../stores/AppStore');

var Search = React.createClass({

	getInitialState: function(){
		return {
			selectedDate : this.currentDate()
		}
	},

	componentDidMount: function(){
	},

	currentDate: function(){
		var today = new Date();
		var date = today.getDate();
		var month = today.getMonth()+1;
		var year = today.getFullYear();
		if(date/10<1) date = '0'+date;
		if(month/10<1) month = '0'+month;
		return year+'-'+month+'-'+date;
	},

	updateValue: function(x){
		console.log(this.state);
		this.setState({
			selectedDate : this.refs.selectedDate.value
		})
	},

	getCityNames: function(){
		var city_names = ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Kanpur"]
		var data = [];
		var temp = null;
		for (var i = 0; i < city_names.length; i++) {
			temp = <option value={city_names[i]} />
			data.push(temp) 
		};
		return data

	},

	searchFlight: function(){
		var data = {
			startCity : this.refs.startCity.value,
			endCity : this.refs.endCity.value,
			deptDate : this.refs.selectedDate.value,
			returnDate : this.refs.returnDate.value
		}
		SearchAction.searchFlights(data);
	},

	render: function(){
		return (
			<div>
				<div>
					<input type="button" value="one way" onclick="alert();" />
					<input type="button" value="two way" onclick="alert();" />
				</div>
				<div>
					<input list="city_names" ref="startCity"/> <br/>
					<input list="city_names" ref="endCity"/> <br/>
					<datalist id="city_names">
						{this.getCityNames()}
					</datalist> 
					<input type="date" min={this.currentDate()} onChange={this.updateValue.bind()} ref="selectedDate"/> <br/>
					<input type="date" min={this.state.selectedDate} ref="returnDate"/> <br/>
					<input type="button" value="Search" onClick={this.searchFlight.bind()} />
				</div>
			</div>
		);
	}
});

export default Search;
