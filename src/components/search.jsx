import React from 'react';
import ReactDOM from 'react-dom';
import SearchAction from '../actions/search_action.js'
import UpdateOneWay from '../actions/update_oneway.js'

var AppStore = require('../stores/AppStore');

var Search = React.createClass({

	getInitialState: function(){
		return {
			selectedDate : this.currentDate(),
			validation : {
				startCity : true,
				endCity : true,
				deptDate : true,
				returnDate : true
			},
			oneway : true
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
		this.setState({
			selectedDate : this.refs.selectedDate.value
		})
	},

	getCityNames: function(){
		var city_names = ["delhi", "mumbai", "bengaluru", "kolkata", "kanpur"]
		var data = [];
		var temp = null;
		for (var i = 0; i < city_names.length; i++) {
			temp = <option value={city_names[i]} />
			data.push(temp) 
		};
		return data

	},

	validateData: function(data){
		// TODO: very bad validation rule. need to update it 
		// console.log(data)
		// if(!data.startCity){
		// 	this.setState({
		// 		validation : {
		// 			startCity : false
		// 		}
		// 	})
		// 	return false
		// }
		// if(!data.endCity){
		// 	this.setState({
		// 		validation : {
		// 			endCity : false
		// 		}
		// 	})
		// 	return false
		// }
		// if(!data.deptDate){
		// 	this.setState({
		// 		validation : {
		// 			deptDate : false
		// 		}
		// 	})
		// 	return false
		// }
		// if(!data.returnDate && !this.state.oneway){
		// 	this.setState({
		// 		validation : {
		// 			returnDate : false
		// 		}
		// 	})
		// 	return false
		// }
		
		return true
	},

	resetValidation: function(){
		this.setState({
			validation : {
				startCity : true,
				endCity : true,
				deptDate : true,
				returnDate : true
			}			
		})
	},

	searchFlight: function(){
		var data = {
			startCity : this.refs.startCity.value,
			endCity : this.refs.endCity.value,
			deptDate : this.refs.selectedDate.value,
			returnDate : this.refs.returnDate.value,
			oneway : this.state.oneway
		}
		if(this.validateData(data)){
			SearchAction.searchFlights(data);
		}
	},
	oneWaySearch: function(){
		this.setState({
			oneway : true
		})
		UpdateOneWay.oneWayUpdate(this.state.oneway)
	},
	twoWaySearch: function(){
		this.setState({
			oneway : false
		})
		UpdateOneWay.oneWayUpdate(this.state.oneway)
	},

	render: function(){
		return (
			<div>
				<div>
					<input type="button" value="one way" onClick={this.oneWaySearch}/>
					<input type="button" value="two way" onClick={this.twoWaySearch}/>
				</div>
				<div>
					<input list="city_names" ref="startCity" 
						className={this.state.validation.startCity ? "" : "border-1px-solid-red"} 
						onClick={this.resetValidation}/> <br/>

					<input list="city_names" ref="endCity" 
						className={this.state.validation.startCity ? "" : "border-1px-solid-red"} 
						onClick={this.resetValidation}/> <br/>

					<datalist id="city_names">
						{this.getCityNames()}
					</datalist> 

					<input type="date" min={this.currentDate()} value={this.state.selectedDate} ref="selectedDate" 
						onChange={this.updateValue.bind()} onClick={this.resetValidation}/> <br/>

					<input type="date" min={this.state.selectedDate} ref="returnDate" disabled={this.state.oneway} 
						onClick={this.resetValidation}/> <br/>

					<input type="button" value="Search" onClick={this.searchFlight.bind()} />
				</div>
			</div>
		);
	}
});

export default Search;
